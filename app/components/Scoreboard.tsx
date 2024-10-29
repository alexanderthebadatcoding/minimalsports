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
    headlines?: Array<{
      shortLinkText: string;
    }>;
    series?: {
      type: string;
      title: string;
      summary: string;
    };
    notes?: Array<{ headline: string }>;
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
    outsText: string;
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
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 auto-cols-max">
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
              className={`bg-white dark:bg-slate-800 shadow-md rounded-lg overflow-hidden  ${
                games.length === 1 || games.length < 5 ? "col-span-full" : ""
              }`}
            >
              <div className="flex justify-between items-center bg-gray-200 dark:bg-slate-900 p-3">
                <span className="font-semibold text-lg">
                  {game.status.type.state === "in"
                    ? `${game.status.type.detail} ${" "} ${
                        competition?.outsText || ""
                      }`
                    : game.status.type.state === "post"
                    ? `${competition?.notes?.[0]?.headline ?? "Final"}`
                    : moment.utc(game.date).local().isSame(moment(), "day")
                    ? `${competition?.notes?.[0]?.headline ?? ""} ${
                        competition?.notes?.[0]?.headline ? " - " : ""
                      }${moment.utc(game.date).local().format("h:mm a")} ${
                        competition?.broadcasts?.[0]?.names?.[0] ?? ""
                      }`
                    : `${competition?.notes?.[0]?.headline ?? ""}${
                        competition?.notes?.[0]?.headline ? " - " : ""
                      }${moment.utc(game.date).local().format("dddd h:mm a")}
                      ${competition?.broadcasts?.[0]?.names?.[0] ?? ""} `}
                </span>

                <span className="text-sm text-gray-600 dark:text-gray-200">
                  {game.status.type.state === "pre"
                    ? competition?.odds?.[0]?.details || ""
                    : game.status.type.state === "post"
                    ? ""
                    : `  ${
                        competition?.broadcast && competition.broadcast !== ""
                          ? competition.broadcast
                          : competition?.broadcasts?.[0]?.names?.[0] ?? ""
                      }`}
                </span>
              </div>
              <div className={`pt-6 px-5`}>
                {competition?.competitors?.map((team) => (
                  <div
                    key={team.homeAway}
                    className="flex justify-between items-center mb-4"
                  >
                    <div className="flex items-center">
                      <Image
                        src={team.team.logo || "/NA.png"} // Just reference it directly from public
                        alt={`${team.team.displayName} logo`}
                        width={48}
                        height={48}
                        className="mr-3"
                        onError={(e) => {
                          e.currentTarget.src = "/NA.png";
                        }}
                      />
                      <div>
                        <span className="font-bold text-lg">
                          {team.team.shortDisplayName}{" "}
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
                    <div className="flex justify-center items-center">
                      <span className="text-2xl font-semibold text-center">
                        {game.status.type.state !== "pre" ? team.score : ""}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center items-center pb-5 px-3 text-center dark:text-gray-500 text-slate-600">
                {situation && (
                  <div className="text-lg mt-3">
                    <div>{situation.downDistanceText}</div>
                    <div>{situation.lastPlay?.text || ""}</div>
                  </div>
                )}
                {competition.series && (
                  <div className="text-lg mt-3">
                    <div>{competition.series.summary || ""}</div>
                  </div>
                )}
                {competition.headlines && (
                  <div className="text-lg mt-3">
                    <div>{competition.headlines[0]?.shortLinkText}</div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
