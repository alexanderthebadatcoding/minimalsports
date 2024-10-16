// pages/new-page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr"; // Correct import

import Scoreboard from "../components/Scoreboard";
import Footer from "../components/Footer";

//

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
};

export default function NewPage() {
  // Remove typeof window check for testing
  const { data, error } = useSWR(
    "https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard",
    fetcher,
    {
      refreshInterval: 60000, // Re-fetch data every 60 seconds
    }
  );

  // console.log("Data:", data);
  // console.log("Error:", error);

  if (error) return <div>Failed to load scores</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className="w-full max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">MLB Scoreboard</h1>
        <Scoreboard games={data.events} />
      </div>
      <Footer />
    </>
  );
}
