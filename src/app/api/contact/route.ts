import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { rateLimit } from "@/lib/rate-limit";

const MIN_FILL_TIME_MS = 2_000;
const MAX_BODY_BYTES = 16_000;

function json(status: number, body: { ok: boolean; error?: string }) {
  return NextResponse.json(body, { status });
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!rateLimit(`contact:${ip}`, { limit: 5, windowMs: 10 * 60_000 })) {
    return json(429, { ok: false, error: "Too many messages. Please try again in a few minutes." });
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return json(413, { ok: false, error: "Message is too large." });
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return json(400, { ok: false, error: "Invalid request." });
  }

  // Honeypot: the "website" field is invisible to people, so only bots fill it.
  // Reply with a generic success so they don't adapt; no email is sent.
  if (body.website) {
    return json(200, { ok: true });
  }

  // Submitted faster than a person realistically could — tell them honestly.
  const startedAt = Number(body.startedAt);
  if (!Number.isFinite(startedAt) || startedAt <= 0 || Date.now() - startedAt < MIN_FILL_TIME_MS) {
    return json(400, { ok: false, error: "That was quick! Please wait a moment and send again." });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return json(422, { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid form data." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";
  if (!apiKey || !to) {
    console.error("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not set");
    return json(503, {
      ok: false,
      error: "The contact form isn't available right now. Please email me directly instead.",
    });
  }

  const { name, email, subject, message } = parsed.data;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        text: `New message from your portfolio\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      console.error("[contact] Resend error", res.status, await res.text());
      return json(502, { ok: false, error: "Your message couldn't be sent. Please try again or email me directly." });
    }
  } catch (error) {
    console.error("[contact] Network error", error);
    return json(502, { ok: false, error: "Your message couldn't be sent. Please try again or email me directly." });
  }

  return json(200, { ok: true });
}
