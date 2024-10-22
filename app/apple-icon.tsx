import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 144,
          background: "#4a5568",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
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
