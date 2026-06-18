import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 40,
          fontWeight: 700,
          color: "white",
          borderRadius: 16,
          background: "linear-gradient(135deg,#f97316,#fb7185)",
          fontFamily: "monospace",
        }}
      >
        {">"}
      </div>
    ),
    { ...size }
  );
}
