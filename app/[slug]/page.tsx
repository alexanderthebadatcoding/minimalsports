"use client";

import { useParams } from "next/navigation"; // Import useParams from next/navigation
import useSWR from "swr";
import Scoreboard from "@/app/components/Scoreboard";
import Footer from "@/app/components/Footer";

// Fetcher function for SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ResultPage() {
  const params = useParams(); // Using useParams to get the slug
  const slug = params.slug;

  // Define the API URL and custom title based on slug
  let apiUrl;
  let title;

  if (slug === "nba") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard";
    title = "NBA"; // Custom title
  } else if (slug === "wnba") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard";
    title = "WNBA"; // Custom title
  } else if (slug === "nfl") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard";
    title = "NFL"; // Custom title
  } else if (slug === "cfb") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard";
    title = "College Football"; // Custom title
  } else if (slug === "nhl") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard";
    title = "NHL"; // Custom title
  } else if (slug === "mlb") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard";
    title = "MLB Scoreboard"; // Custom title
  } else if (slug === "mls") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/scoreboard";
    title = "MLS"; // Custom title
  } else if (slug === "nwsl") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/scoreboard";
    title = "NWSL"; // Custom title
  } else if (slug === "bundesliga") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/scoreboard";
    title = "Bundesliga"; // Custom title
  } else if (slug === "epl") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard";
    title = "English Premier League";
  } else if (slug === "fifa") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.friendly/scoreboard";
    title = "FIFA Friendlies";
  } else if (slug === "uefa") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.nations/scoreboard";
    title = "UEFA Nations League";
  } else if (slug === "concacaf") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/soccer/concacaf.nations.league/scoreboard";
    title = "Concacaf Nations League";
  } else {
    return (
      <div className="text-3xl font-bold mx-auto text-center mt-16">
        Invalid Sport
      </div>
    );
  }

  // Use SWR to fetch data
  const { data, error } = useSWR(apiUrl, fetcher, { refreshInterval: 60000 });

  if (error)
    return (
      <div className="text-3xl font-bold mb-6 text-center text-red-900">
        Error Loading Data please Refresh
      </div>
    );
  if (!data)
    return (
      <div className="text-3xl font-bold mb-6 text-center">Loading...</div>
    );

  return (
    <>
      <div className="w-full max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">{title}</h1>
        <Scoreboard games={data.events} />
      </div>
      <Footer />
    </>
  );
}
