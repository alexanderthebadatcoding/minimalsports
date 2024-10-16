// pages/new-page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import Scoreboard from "../components/Scoreboard";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "NHL Scores",
  description: "Minimal Scoreboard for NHL",
};

async function getAnotherScores() {
  const res = await fetch(
    "http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard",
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
        <h1 className="text-3xl font-bold mb-6 text-center">NHL</h1>
        <Scoreboard games={data.events} />
      </div>
      <Footer />
    </>
  );
}
