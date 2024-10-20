import Image from "next/image";
// pages/_app.js
import "./globals.css";
import Link from "next/link";

export default function Home() {
  const pages = [
    { name: "NFL", path: "/nfl" },
    { name: "NCAA Football", path: "/cfb" },
    { name: "MLB", path: "/mlb" },
    { name: "NBA", path: "/nba" },
    { name: "WNBA", path: "/wnba" },
    { name: "NHL", path: "/nhl" },
    { name: "MLS", path: "/mls" },
    { name: "NWSL", path: "/nwsl" },
    { name: "Bundesliga", path: "/bundesliga" },
    { name: "English Premier League", path: "/epl" },
    { name: "FIFA Friendlies", path: "/fifa" },
    { name: "FIFA Womens Friendlies", path: "/fifaw" },
    // { name: "UEFA Nations League", path: "/uefa" },
    // { name: "Concacaf Nations League", path: "/concacaf" },
    // Add more pages as needed
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 shadow-md rounded-lg overflow-hidden">
      <h1 className="text-4xl font-bold mb-8 text-gray-600 dark:text-gray-200 text-center">
        Welcome to Scoreb.site
      </h1>
      <div className="items-center bg-gray-100 dark:bg-slate-900 shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-600 dark:text-gray-200">
          Available Scoreboards:
        </h2>
        <ul className="space-y-3">
          {pages.map((page) => (
            <li key={page.path}>
              <Link
                href={page.path}
                className="text-blue-600 hover:underline text-xl"
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
