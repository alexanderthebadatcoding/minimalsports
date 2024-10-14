// pages/new-page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import Scoreboard from "../components/Scoreboard";

export const metadata: Metadata = {
  title: "Soccer Scores",
  description: "Minimal Scoreboard for Soccer Scores", // Fixed the typo in "for"
  keywords: ["Soccer", "Scores", "Soccer", "UEFA Soccer", "Sports Scores"],
  robots: "index, follow", // Allows search engines to index and follow links on this page
  openGraph: {
    title: "Soccer Scores",
    description: "Live updates and results from the Soccer games.",
    // url: "https://example.com/Soccer-scores", // Replace with the actual URL of your page
    type: "website",
    images: [
      {
        url: "https://a.espncdn.com/i/leaguelogos/soccer/500/2395.png", // Replace with an actual image URL
        alt: "Soccer Scoreboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // Better for sharing a page with an image
    title: "Soccer Scores",
    description: "Get live updates for Soccer games.",
    images: ["https://a.espncdn.com/i/leaguelogos/soccer/500/2395.png"], // Replace with the actual image URL
  },
};

async function getAnotherScores() {
  const res = await fetch(
    "http://site.api.espn.com/apis/site/v2/sports/soccer/uefa.nations/scoreboard",
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
    <div>
      <Scoreboard games={data.events} />
    </div>
  );
}
