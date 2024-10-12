// pages/new-page.tsx
import Image from "next/image";
import Link from "next/link";
import Scoreboard from "../components/Scoreboard";

async function getAnotherScores() {
  const res = await fetch(
    "http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard",
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
