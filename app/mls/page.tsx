// pages/new-page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import Scoreboard from "../components/Scoreboard";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "MLS Scores",
  description: "Minimal Scoreboard for MLS Scores", // Fixed the typo in "for"
  keywords: ["MLS", "Scores", "Soccer", "USA Soccer", "Sports Scores"],
  robots: "index, follow", // Allows search engines to index and follow links on this page
  openGraph: {
    title: "MLS Scores",
    description: "Live updates and results from the MLS games.",
    // url: "https://example.com/MLS-scores", // Replace with the actual URL of your page
    type: "website",
    images: [
      {
        url: "https://a.espncdn.com/i/leaguelogos/soccer/500/19.png", // Replace with an actual image URL
        alt: "MLS Scoreboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // Better for sharing a page with an image
    title: "MLS Scores",
    description: "Get live updates for MLS games.",
    images: ["https://a.espncdn.com/i/leaguelogos/soccer/500/19.png"], // Replace with the actual image URL
  },
};

async function getAnotherScores() {
  const res = await fetch(
    "http://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/scoreboard",
    { next: { revalidate: 60 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch scores");
  }
  return res.json();
}

export default async function NewPage() {
  const data = await getAnotherScores();

  return (
    <>
      <div className="w-full max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">MLS</h1>
        <Scoreboard games={data.events} />
      </div>
      <Footer />
    </>
  );
}
