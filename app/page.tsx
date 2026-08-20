import "./globals.css";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SPORTS_CONFIG } from "@/lib/getSportData";

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
