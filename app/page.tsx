import Image from "next/image";
// pages/_app.js
import "./globals.css";
import NFLScoreboard from "./components/NFLScoreboard";

async function getScores() {
  const res = await fetch(
    "http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard",
    { next: { revalidate: 60 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch scores");
  }
  return res.json();
}

export default async function Home() {
  const data = await getScores();

  return <NFLScoreboard games={data.events} />;
}
