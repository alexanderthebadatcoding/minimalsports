import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";
import Footer from "./components/Footer";

export const viewport: Viewport = {
  themeColor: "#18181b",
};

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { slug?: string };
}): Promise<Metadata> {
  const { slug } = params;

  // Safely handle slug being undefined
  const pageTitle = slug
    ? `Minimalist Scoreboard for ${slug}`
    : "Minimalist Scoreboard";

  return {
    title: pageTitle, // Dynamic title based on slug
    description: "Minimal Scoreboard created by Gilbster",
    icons: {
    icon: [
      { url: '/icon', sizes: '32x32', type: 'image/png' },
      { url: '/icon', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children} </body>
    </html>
  );
}
