import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "#4a5568",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          borderRadius: "20%",
        }}
      >
        0:0
      </div>
    ),
    {
      ...size,
    }
  );
}
