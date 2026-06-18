import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Shared branded Open Graph image (sunset palette).
 * Used by the site default, blog posts, and project case studies.
 */
export function renderOgImage({
  eyebrow,
  title,
  footer,
  tags,
}: {
  eyebrow?: string;
  title: string;
  footer?: string;
  tags?: string[];
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
          padding: "72px",
          background: "#050509",
          backgroundImage:
            "radial-gradient(circle at 18% 18%, rgba(249,115,22,0.5), transparent 45%), radial-gradient(circle at 85% 85%, rgba(236,72,153,0.35), transparent 45%), radial-gradient(circle at 95% 12%, rgba(34,211,238,0.22), transparent 40%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 16,
                background: "linear-gradient(135deg,#f97316,#fb7185)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
                fontWeight: 700,
              }}
            >
              {">"}
            </div>
            <div style={{ display: "flex", fontSize: 32, fontWeight: 600 }}>
              herdoy<span style={{ color: "#fb7185" }}>dev</span>
            </div>
          </div>
          {eyebrow ? (
            <div
              style={{
                display: "flex",
                fontSize: 22,
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.18)",
                color: "#fdba74",
              }}
            >
              {eyebrow}
            </div>
          ) : (
            <div style={{ display: "flex" }} />
          )}
        </div>

        {/* title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 60 ? 58 : 70,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          {tags && tags.length ? (
            <div style={{ display: "flex", gap: 14 }}>
              {tags.slice(0, 4).map((t) => (
                <div
                  key={t}
                  style={{
                    display: "flex",
                    fontSize: 22,
                    padding: "8px 18px",
                    borderRadius: 999,
                    background: "rgba(249,115,22,0.16)",
                    color: "#fed7aa",
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {/* footer */}
        <div style={{ display: "flex", fontSize: 24, color: "#94a3b8" }}>
          {footer ?? "herdoydev.com"}
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
