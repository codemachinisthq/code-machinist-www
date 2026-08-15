import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Code Machinist — Custom Software for Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080818",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Radial gradient bg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.15) 0%, rgba(168,85,247,0.08) 50%, transparent 100%)",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 32,
          }}
        >
          {/* Gear circle placeholder */}
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3b82f6, #a855f7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              color: "white",
              fontWeight: 700,
            }}
          >
            {"</>"}
          </div>
          <span
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#f0f0ff",
              letterSpacing: "-1px",
            }}
          >
            Code Machinist
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: 26,
            color: "#9090bb",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          Websites · Apps · Automation — For Business
        </p>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #3b82f6, #a855f7, #22d3ee)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
