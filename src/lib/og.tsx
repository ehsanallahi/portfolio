import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const ogSize = { width: 1200, height: 630 };

/** Shared Open Graph / Twitter card renderer. */
export function renderOgImage({
  eyebrow,
  title,
  subtitle,
  tags,
  hue = 277,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  tags: string[];
  hue?: number;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: `radial-gradient(circle at 15% 0%, hsl(${hue} 70% 45% / 0.45), transparent 55%), radial-gradient(circle at 100% 100%, hsl(${hue - 70} 80% 50% / 0.3), transparent 55%), #0f1015`,
          color: "#f4f4f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #8b8cf8, #6ad6f0)",
              color: "#0f1015",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            {profile.initials}
          </div>
          <div style={{ fontSize: 28, color: "#b9bac6" }}>{eyebrow}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>{title}</div>
          <div style={{ fontSize: 34, color: "#a5b4fc" }}>{subtitle}</div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {tags.map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.05)",
                fontSize: 24,
                color: "#d6d7e0",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    ogSize,
  );
}
