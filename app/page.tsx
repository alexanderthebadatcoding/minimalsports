import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Import sports configuration
const SPORTS_CONFIG: Record<string, { apiUrl: string; title: string }> = {
  // Basketball
  nba: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard",
    title: "NBA",
  },
  ncaam: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard",
    title: "College Mens 🏀",
  },
  nit: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard?groups=98",
    title: "NIT 🏀",
  },
  ncaaw: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/basketball/womens-college-basketball/scoreboard",
    title: "College Womens 🏀",
  },
  wnba: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard",
    title: "WNBA",
  },
  fiba: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/basketball/fiba/scoreboard",
    title: "FIBA",
  },
  nbaSummer: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/basketball/nba-summer/scoreboard",
    title: "NBA Summer League",
  },
  // Football
  nfl: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard",
    title: "NFL",
  },
  cfb: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard",
    title: "College Football",
  },
  // Hockey
  nhl: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard",
    title: "NHL 🏒",
  },
  OlympicHockey: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/hockey/olympics-mens-ice-hockey/scoreboard",
    title: "Mens Ice Hockey",
  },
  OlympicHockeyW: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/hockey/olympics-womens-ice-hockey/scoreboard",
    title: "Womens Ice Hockey",
  },
  // Baseball
  mlb: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard",
    title: "MLB",
  },
  ncaab: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/baseball/college-baseball/scoreboard",
    title: "College Baseball",
  },
  // Soccer
  mls: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/scoreboard",
    title: "MLS",
  },
  nwsl: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/scoreboard",
    title: "NWSL",
  },
  laliga: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/scoreboard",
    title: "La Liga",
  },
  epl: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard",
    title: "English Premier League",
  },
  bundesliga: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/scoreboard",
    title: "Bundesliga",
  },
  b2: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.2/scoreboard",
    title: "2. Bundesliga",
  },
  club: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/club.friendly/scoreboard",
    title: "Club Friendly",
  },
  open: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.open/scoreboard",
    title: "USA Open Cup",
  },
  concacafLeagues: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/concacaf.leagues.cup/scoreboard",
    title: "Concacaf Leagues Cup",
  },
  EUQual: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.europa_qual/scoreboard",
    title: "Europa League Qualifying",
  },
  germanCup: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.dfb_pokal/scoreboard",
    title: "DFB Pokal",
  },
  // More sports available
  fifa: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.friendly/scoreboard",
    title: "FIFA Friendlies",
  },
  fifaw: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.friendly.w/scoreboard",
    title: "FIFA Womens Friendlies",
  },
  cwc: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.cwc/scoreboard",
    title: "FIFA Club World Cup",
  },
  worldcup: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard",
    title: "FIFA World Cup",
  },
  uefa: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions/scoreboard",
    title: "UEFA Champions League",
  },
  uefaeu: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.europa/scoreboard",
    title: "UEFA Europa League",
  },
  uefaNations: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.nations/scoreboard",
    title: "UEFA Nations League",
  },
  concacaf: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/concacaf.nations.league/scoreboard",
    title: "Concacaf Nations League",
  },
  concacafCup: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/concacaf.champions/scoreboard",
    title: "Concacaf Champions Cup",
  },
  concacafGold: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/concacaf.gold/scoreboard",
    title: "Concacaf Gold Cup",
  },
  sheBelieves: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.shebelieves/scoreboard",
    title: "She Believes Cup ⚽️",
  },
  fifaconQ: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.worldq.concacaf/scoreboard",
    title: "FIFA World Cup Qualifying - Concacaf",
  },
  worldq: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.worldq.uefa/scoreboard",
    title: "World Cup Qualifying - UEFA",
  },
  worldAFC: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.worldq.afc/scoreboard",
    title: "World Cup Qualifying - AFC",
  },
  weuro: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.weuro/scoreboard",
    title: "Womens European Championship",
  },
  caf: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/caf.nations/scoreboard",
    title: "Africa Cup of Nations",
  },
  italyCup: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.coppa_italia/scoreboard",
    title: "Coppa Italiana",
  },
  ncaaSoccer: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.ncaa.m.1/scoreboard",
    title: "NCAA Mens ⚽️",
  },
  ncaaWSoccer: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.ncaa.w.1/scoreboard",
    title: "NCAA Womens ⚽️",
  },
  volleyball: {
    apiUrl:
      "https://site.api.espn.com/apis/site/v2/sports/volleyball/womens-college-volleyball/scoreboard",
    title: "NCAA Womens 🏐",
  },
};

// Check if a sport has recent or upcoming events (last 2 weeks or next month)
async function hasRecentOrUpcomingEvents(apiUrl: string): Promise<boolean> {
  try {
    const response = await fetch(apiUrl, { next: { revalidate: 3600 } }); // Cache for 1 hour
    if (!response.ok) return false;

    const data = await response.json();
    const now = new Date();
    const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
    const oneMonthFromNow = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

    // Check for events in the API response (past 2 weeks or next month)
    if (data.events && Array.isArray(data.events)) {
      return data.events.some((event: any) => {
        const eventDate = new Date(event.date);
        return eventDate >= twoWeeksAgo && eventDate <= oneMonthFromNow;
      });
    }

    return false;
  } catch (error) {
    console.error(`Error checking events for ${apiUrl}:`, error);
    return false;
  }
}

export default async function Home() {
  // Check all available sports for upcoming events
  const sportsToCheck = Object.keys(SPORTS_CONFIG);

  // Check which sports have recent or upcoming events
  const activeSportsPromises = sportsToCheck.map(async (slug) => {
    const sport = SPORTS_CONFIG[slug];
    if (!sport) return null;

    const hasEvents = await hasRecentOrUpcomingEvents(sport.apiUrl);
    return hasEvents ? slug : null;
  });

  const activeSportsResults = await Promise.all(activeSportsPromises);
  const activeSports = activeSportsResults.filter(
    (slug) => slug !== null,
  ) as string[];

  // Build pages array from active sports
  const pages = activeSports
    .map((slug) => {
      const sport = SPORTS_CONFIG[slug];
      return sport ? { name: sport.title, path: `/${slug}` } : null;
    })
    .filter((page) => page !== null);

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
