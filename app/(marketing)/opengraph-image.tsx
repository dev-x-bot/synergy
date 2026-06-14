import { ImageResponse } from "next/og";

export const alt = "Synergy — Global IT Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b1a2c 0%, #17344f 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 30,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#8FFF24",
            fontWeight: 700,
          }}
        >
          <div style={{ width: 18, height: 18, borderRadius: 5, background: "linear-gradient(135deg,#FDCC06,#8FFF24)" }} />
          Synergy
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, marginTop: 28, maxWidth: 980 }}>
          Delivering technology that works for you
        </div>
        <div style={{ fontSize: 30, color: "#9fb4c8", marginTop: 28, maxWidth: 900 }}>
          Global IT solutions — AI/ML, cloud, cyber security & digital transformation.
        </div>
        <div
          style={{
            position: "absolute",
            right: -120,
            bottom: -120,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(143,255,36,0.35), transparent 70%)",
          }}
        />
      </div>
    ),
    size
  );
}
