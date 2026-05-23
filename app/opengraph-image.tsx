import { ImageResponse } from "next/og";
import resume from "@/data/resume.json";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${(resume as { name: string }).name} · career journey`;

export default async function Image() {
  const data = resume as { name: string; headline: string; summary: string };
  const eyebrow = data.headline.split("·")[0]?.trim() ?? data.headline;
  const subheadline = data.headline.split("·").slice(1).join(" ·").trim() || data.headline;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "linear-gradient(135deg, #F3EFE8 0%, #F3EFE8 55%, #F0D2C2 100%)",
          fontFamily: "Inter, system-ui, sans-serif",
          padding: "80px",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-160px",
            width: "640px",
            height: "640px",
            borderRadius: "9999px",
            background: "rgba(226, 90, 28, 0.18)",
            display: "flex",
          }}
        />

        {/* LEFT — text */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.28em",
              color: "#E25A1C",
              marginBottom: 28,
              display: "flex",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontSize: 128,
              fontWeight: 900,
              color: "#15130F",
              lineHeight: 0.92,
              letterSpacing: "-0.045em",
              display: "flex",
            }}
          >
            {data.name}
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#6E6862",
              marginTop: 32,
              maxWidth: 640,
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            {subheadline}
          </div>
        </div>

        {/* RIGHT — mini zigzag path */}
        <div
          style={{
            width: 240,
            height: 470,
            position: "relative",
            display: "flex",
          }}
        >
          <svg width="240" height="470" style={{ position: "absolute" }}>
            <path
              d="M 120 30 L 60 160 L 180 290 L 70 410 L 120 460"
              stroke="rgba(226, 90, 28, 0.55)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Dot 1 */}
          <div
            style={{
              position: "absolute",
              left: 110,
              top: 20,
              width: 20,
              height: 20,
              borderRadius: 9999,
              border: "2px solid rgba(21, 19, 15, 0.7)",
              background: "#F3EFE8",
              display: "flex",
            }}
          />
          {/* Dot 2 */}
          <div
            style={{
              position: "absolute",
              left: 50,
              top: 150,
              width: 20,
              height: 20,
              borderRadius: 9999,
              border: "2px solid rgba(21, 19, 15, 0.7)",
              background: "#F3EFE8",
              display: "flex",
            }}
          />
          {/* Dot 3 — NOW emphasis */}
          <div
            style={{
              position: "absolute",
              left: 162,
              top: 272,
              width: 36,
              height: 36,
              borderRadius: 9999,
              border: "3px solid #E25A1C",
              background: "#F3EFE8",
              boxShadow: "0 0 32px rgba(226, 90, 28, 0.6)",
              display: "flex",
            }}
          />
          {/* NOW tag */}
          <div
            style={{
              position: "absolute",
              left: 205,
              top: 268,
              background: "#E25A1C",
              color: "#FFFFFF",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.18em",
              padding: "6px 12px",
              borderRadius: 9999,
              display: "flex",
            }}
          >
            NOW
          </div>
          {/* Dot 4 */}
          <div
            style={{
              position: "absolute",
              left: 60,
              top: 400,
              width: 20,
              height: 20,
              borderRadius: 9999,
              border: "2px solid rgba(21, 19, 15, 0.7)",
              background: "#F3EFE8",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
