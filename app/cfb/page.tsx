// pages/new-page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import Scoreboard from "../components/Scoreboard";

export const metadata: Metadata = {
  title: "College Football Scores 🏈",
  description: "Minimal Scoreboard for CFB", // Fixed the typo in "for"
  keywords: ["CFB", "Scores", "Soccer", "NCAA", "Sports Scores"],
  robots: "index, follow", // Allows search engines to index and follow links on this page
  openGraph: {
    title: "NCAA Football Scores",
    description: "Live updates and results for CFB games.",
    // url: "https://example.com/CFB-scores", // Replace with the actual URL of your page
    type: "website",
    images: [
      {
        url: "https://a.espncdn.com/redesign/assets/img/icons/ESPN-icon-football-college.png", // Replace with an actual image URL
        alt: "CFB Scoreboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // Better for sharing a page with an image
    title: "CFB Scores",
    description: "Get live updates for CFB games.",
    images: [
      "https://a.espncdn.com/redesign/assets/img/icons/ESPN-icon-football-college.png",
    ], // Replace with the actual image URL
  },
};

async function getAnotherScores() {
  const res = await fetch(
    "http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard",
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
