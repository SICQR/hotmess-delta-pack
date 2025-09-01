import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "HOTMESS London";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#000",
          color: "#fff",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(255,83,0,0.25), rgba(0,0,0,0.25))",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", padding: 64 }}>
          <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: -1 }}>
            HOT<span style={{ color: "#FF5300" }}>MESS</span>
          </div>
          <div style={{ marginTop: 16, fontSize: 36 }}>
            Always too much, never enough.
          </div>
          <div style={{ marginTop: "auto", opacity: 0.75 }}>
            hotmessldn.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
