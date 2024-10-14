"use client";
import Image from "next/image";
import moment from "moment";

// Type definitions (updated)
type Game = {
  id: string;
  date: string;
  status: {
    type: {
      state: string;
      detail: string;
    };
    displayClock: string;
    period: number;
  };
  competitions: Array<{
    broadcast: string;
    series?: {
      type: string;
      title: string;
      summary: string;
    };
    competitors: Array<{
      homeAway: string;
      team: {
        id: string; // Team ID for possession lookup
        abbreviation: string;
        displayName: string;
        shortDisplayName: string;
        logo: string;
      };
      score: string;
      records: Array<{
        type: string;
        summary: string;
      }>;
      curatedRank?: {
        current: string;
      };
    }>;
    situation?: {
      downDistanceText: string;
      possessionText: string;
      possession: string;
      lastPlay?: {
        // Adding lastPlay with text
        text: string;
      };
    };
    odds: Array<{
      details: string;
    }>;
    broadcasts: Array<{
      names: Array<{
        type: string;
      }>;
    }>;
  }>;
};

type ScoreboardProps = {
  games: Game[];
};

// Function to find the team abbreviation by team ID (from possession)
function findTeamAbbreviation(
  competitors: Game["competitions"][0]["competitors"],
  teamId: string
) {
  for (const competitor of competitors) {
    if (competitor.team.id === teamId) {
      return competitor.team.shortDisplayName;
    }
  }
  return "Unknown"; // Return "Unknown" if no match found
}

export default function Scoreboard({ games }: ScoreboardProps) {
  if (!games || games.length === 0) {
    return (
      <div className="text-center mt-10">No games available at the moment.</div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Scoreboard</h1>
      <div className="grid gap-6">
        {games.map((game) => {
          const competition = game.competitions?.[0]; // Safely access the first competition
          const situation = competition?.situation;
          const possessionTeamAbbreviation = situation
            ? findTeamAbbreviation(
                competition.competitors,
                situation.possession
              )
            : null;

          return (
            <div
              key={game.id}
              className="bg-white dark:bg-slate-800 shadow-md rounded-lg overflow-hidden"
            >
              <div className="flex justify-between items-center bg-gray-100 dark:bg-slate-900 p-3">
                <span className="font-semibold text-lg">
                  {game.status.type.state === "in"
                    ? `${game.status.type.detail}`
                    : game.status.type.state === "post"
                    ? "Final"
                    : moment.utc(game.date).local().isSame(moment(), "day")
                    ? `${moment.utc(game.date).local().format("h:mm a")} ${
                        competition?.broadcasts?.[0]?.names?.[0] ?? ""
                      }`
                    : moment.utc(game.date).local().format("dddd h:mm a") +
                      ` ${competition?.broadcasts?.[0]?.names?.[0] ?? ""}`}
                </span>

                <span className="text-sm text-gray-600 dark:text-gray-200">
                  {game.status.type.state === "pre"
                    ? competition?.odds?.[0]?.details || "No odds available"
                    : game.status.type.state === "post"
                    ? ""
                    : `  ${competition?.broadcast ?? ""}`}
                </span>
              </div>
              <div className="p-5">
                {competition?.competitors?.map((team) => (
                  <div
                    key={team.homeAway}
                    className="flex justify-between items-center mb-4"
                  >
                    <div className="flex items-center">
                      <Image
                        src={team.team.logo}
                        alt={`${team.team.displayName} logo`}
                        width={48}
                        height={48}
                        className="mr-3"
                      />
                      <div>
                        <span className="font-bold text-lg">
                          {team.team.abbreviation}{" "}
                          <p className="text-gray-600 dark:text-gray-400 font-medium inline">
                            {team.curatedRank &&
                            Number(team.curatedRank.current) < 30
                              ? team.curatedRank.current
                              : ""}{" "}
                          </p>
                          {situation?.possession !== team.team.id
                            ? " "
                            : " 🏈 "}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 block">
                          {team.records?.[0]?.summary}
                        </span>
                      </div>
                    </div>
                    <span className="text-2xl font-semibold">{team.score}</span>
                  </div>
                ))}

                {situation && (
                  <div className="text-lg text-gray-600 mt-3">
                    <div>{situation.downDistanceText}</div>
                    <div>{situation.lastPlay?.text || ""}</div>
                  </div>
                )}
                {competition.series && (
                  <div className="text-lg text-gray-600 mt-3">
                    <div>{competition.series.summary || ""}</div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
