// app/[abbreviation]/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { Viewport } from "next";
import "../../../app/globals.css";

export const viewport: Viewport = {
  themeColor: "#18181b",
};

const inter = Inter({ subsets: ["latin"] });

export default async function abbreviationLayout({
  children,
  params, // Next.js passes the dynamic route parameters here
}: {
  children: React.ReactNode;
  params: Promise<{ abbreviation: string }>; // Define the type of params
}) {
  const { abbreviation } = await params;

  return (
    <html lang="en">
      <head>
        <title>{`${abbreviation.toUpperCase()} Team info`}</title>
        <meta name="description" content={`Information for ${abbreviation}`} />
      </head>

      <body className={inter.className}>{children} </body>
    </html>
  );
}
