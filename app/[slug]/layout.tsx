// app/[slug]/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#18181b",
};

const inter = Inter({ subsets: ["latin"] });

export default function SlugLayout({
  children,
  params, // Next.js passes the dynamic route parameters here
}: {
  children: React.ReactNode;
  params: { slug: string }; // Define the type of params
}) {
  const { slug } = params;

  return (
    <html lang="en">
      <head>
        <title>{`${slug.toUpperCase()} Scoreboard`}</title>
        <meta
          name="description"
          content={`Live scores and updates for ${slug}`}
        />
      </head>

      <body className={inter.className}>{children} </body>
    </html>
  );
}
