// app/[abbreviation]/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { Viewport } from "next";
import "../../../app/globals.css";

export const viewport: Viewport = {
  themeColor: "#18181b",
};

const inter = Inter({ subsets: ["latin"] });

export default function abbreviationLayout({
  children,
  params, // Next.js passes the dynamic route parameters here
}: {
  children: React.ReactNode;
  params: { abbreviation: string }; // Define the type of params
}) {
  const { abbreviation } = params;

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
