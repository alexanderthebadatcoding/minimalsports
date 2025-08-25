import Image from "next/image";
// pages/_app.js
import "./globals.css";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Home() {
  const pages = [
    // { name: "Concacaf Gold Cup", path: "/concacafGold" },
    // { name: "FIFA Club World Cup", path: "/cwc" },
		{ name: "MLB", path: "/mlb" },
    { name: "NFL", path: "/nfl" },
    { name: "NCAA Football", path: "/cfb" },
    // { name: "College Baseball", path: "/ncaab" },
    // { name: "NBA Summer League", path: "/nbaSummer" },
    // { name: "NBA", path: "/nba" },
    // { name: "Mens College Basketball", path: "/ncaam" },
    // { name: "Womens College Basketball", path: "/ncaaw" },
    { name: "WNBA", path: "/wnba" },
    // { name: "NHL", path: "/nhl" },
    { name: "MLS", path: "/mls" },
    { name: "NWSL", path: "/nwsl" },
		{ name: "Concacaf Leagues Cup", path: "/concacafLeagues" },
    // { name: "USA Open Cup", path: "/open" },
    // { name: "Club Friendly", path: "/club" },
    // { name: "UEFA Champions League", path: "/uefa" },
    // { name: "UEFA Nations League", path: "/uefaNations" },
    // { name: "UEFA Europa League", path: "/uefaeu" },
    { name: "Bundesliga", path: "/bundesliga" },
	  { name: "2. Bundesliga", path: "/b2" },
    { name: "English Premier League", path: "/epl" },
    { name: "German Cup", path: "/germanCup" },
	  //{ name: "Europa League Qualifying", path: "/EUQual" },
    { name: "FIFA Friendlies", path: "/fifa" },
    { name: "FIFA Womens Friendlies", path: "/fifaw" },
    // { name: "Women's European Championship", path: "/weuro" }, 
    // { name: "World Cup Qualifying - Concacaf", path: "/fifaconQ" },
    { name: "World Cup Qualifying", path: "/worldq" },
    // { name: "World Cup Qualifying - AFC", path: "/worldAFC" },
		// { name: "Concacaf Nations League", path: "/concacaf" }, 
    // { name: "Concacaf Champions Cup", path: "/concacafCup" },
    // { name: "She Believes Cup", path: "/sheBelieves" },
	  
    // Add more pages as needed concacafLeagues concacafGold
  ];

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center rounded-lg overflow-hidden p-4">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-200">
            ScoreB.site
          </h1>
          <p className="text-gray-600 dark:text-slate-300">
            Choose a sport to view live scores
          </p>
        </header>

        <div className="items-center p-6 w-full max-w-md">
          <ul className="space-y-3">
            {pages.map((page) => (
              <li key={page.path}>
                <Link
                  href={page.path}
                  className="w-full justify-between text-lg font-medium bg-white dark:bg-slate-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 px-4 py-2 border rounded-md flex items-center"
                >
                  {page.name}
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer className=" pb-10 mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p>
              &copy; {new Date().getFullYear()} ScoreB. Data powered by ESPN
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
