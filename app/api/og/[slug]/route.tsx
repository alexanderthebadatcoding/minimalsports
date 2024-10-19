// app/api/og/[slug]/route.ts
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Default Title";

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 80,
          color: "white",
          fontWeight: 700,
          background: "#10172A",
          backgroundImage: "linear-gradient(to bottom, #10172A, #23529E)",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        Live Score and Updates for {title}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
