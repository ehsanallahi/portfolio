"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { contactSchema, type ContactData, type ContactInput } from "@/lib/contact-schema";
import { profile } from "@/data/portfolio";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ctaVariants } from "@/components/shared/cta";
import { cn } from "@/lib/utils";

type Status = { type: "idle" } | { type: "success" } | { type: "error"; message: string };

const fields = [
  { name: "name", label: "Full name", type: "text", autoComplete: "name", placeholder: "Jane Doe" },
  { name: "email", label: "Email address", type: "email", autoComplete: "email", placeholder: "jane@company.com" },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  // When the visitor first focused a field — the server rejects instant (bot) submits
  const [startedAt, setStartedAt] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput, unknown, ContactData>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  async function onSubmit(data: ContactData, event?: React.BaseSyntheticEvent) {
    setStatus({ type: "idle" });
    const form = event?.target as HTMLFormElement | undefined;
    const website = (form?.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, website, startedAt }),
      });
      const result = (await res.json().catch(() => null)) as { ok: boolean; error?: string } | null;

      if (!res.ok || !result?.ok) {
        const message = result?.error ?? "Something went wrong. Please try again or email me directly.";
        setStatus({ type: "error", message });
        toast.error("Message not sent", { description: message });
        return;
      }

      setStatus({ type: "success" });
      toast.success("Message sent", { description: "Thanks for reaching out — I'll get back to you soon." });
      reset();
    } catch {
      const message = "Network error. Check your connection, or email me directly.";
      setStatus({ type: "error", message });
      toast.error("Message not sent", { description: message });
    }
  }

  const fieldClass =
    "h-12 rounded-xl border-border bg-background/60 px-4 text-base transition-colors focus-visible:border-brand md:text-sm";

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="relative space-y-5"
      aria-describedby="form-status"
      onFocusCapture={() => {
        if (!startedAt) setStartedAt(Date.now());
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className="space-y-2">
            <Label htmlFor={f.name}>
              {f.label} <span aria-hidden="true" className="text-brand">*</span>
            </Label>
            <Input
              id={f.name}
              type={f.type}
              autoComplete={f.autoComplete}
              placeholder={f.placeholder}
              aria-invalid={errors[f.name] ? true : undefined}
              aria-describedby={errors[f.name] ? `${f.name}-error` : undefined}
              aria-required="true"
              className={fieldClass}
              {...register(f.name)}
            />
            <FieldError id={`${f.name}-error`} message={errors[f.name]?.message} />
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">
          Subject <span aria-hidden="true" className="text-brand">*</span>
        </Label>
        <Input
          id="subject"
          placeholder="Full-stack role / project enquiry"
          aria-invalid={errors.subject ? true : undefined}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          aria-required="true"
          className={fieldClass}
          {...register("subject")}
        />
        <FieldError id="subject-error" message={errors.subject?.message} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span aria-hidden="true" className="text-brand">*</span>
        </Label>
        <Textarea
          id="message"
          rows={6}
          placeholder="Tell me about the role, product or problem you're working on…"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-required="true"
          className={cn(fieldClass, "h-auto min-h-36 resize-y py-3")}
          {...register("message")}
        />
        <FieldError id="message-error" message={errors.message?.message} />
      </div>

      {/* Honeypot — visually hidden and skipped by keyboard and screen readers */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          <span aria-hidden="true" className="text-brand">*</span> Required fields
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
          className={cn(ctaVariants({ variant: "primary", size: "lg" }), "w-full sm:w-auto")}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" aria-hidden="true" /> Sending…
            </>
          ) : (
            <>
              Send message
              <Send className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" aria-hidden="true" />
            </>
          )}
        </button>
      </div>

      <div id="form-status" role="status" aria-live="polite">
        <AnimatePresence mode="wait">
          {status.type === "success" && (
            <motion.p
              key="success"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-2.5 rounded-xl border border-success/30 bg-success/10 p-4 text-sm"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
              Thanks! Your message has been sent — I&apos;ll get back to you soon.
            </motion.p>
          )}
          {status.type === "error" && (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm"
            >
              <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
              <span>
                {status.message}{" "}
                <a href={`mailto:${profile.email}`} className="font-medium underline underline-offset-4">
                  {profile.email}
                </a>
              </span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <AnimatePresence initial={false}>
      {message && (
        <motion.p
          id={id}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="flex items-center gap-1.5 text-sm text-destructive"
        >
          <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
