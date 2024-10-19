// app/[slug]/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { getSportData } from "@/lib/getSportData";

const inter = Inter({ subsets: ["latin"] });
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const { title } = getSportData(slug);

  const ogImageUrl = `/api/og/${slug}?title=${encodeURIComponent(title)}`;

  return {
    title: `${slug.toUpperCase()} on ScoreB`,
    description: `Live scores and updates for ${title}`,
    openGraph: {
      title: `${slug.toUpperCase()} Scoreboard`,
      description: `Live scores and updates for ${title}`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} Scoreboard`,
        },
      ],
    },
  };
}

export default function SlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return <div>{children}</div>;
}
