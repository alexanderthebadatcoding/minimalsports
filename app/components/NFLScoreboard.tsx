import Image from "next/image";

// Type definitions (same as before)
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
    competitors: Array<{
      homeAway: string;
      team: {
        abbreviation: string;
        displayName: string;
        logo: string;
      };
      score: string;
      records: Array<{
        type: string;
        summary: string;
      }>;
    }>;
    situation?: {
      downDistanceText: string;
      possessionText: string;
    };
    odds: Array<{
      details: string; // Adding the 'details' property here
      // Add any other properties for 'odds' as needed
    }>;
  }>;
};

type NFLScoreboardProps = {
  games: Game[];
};

export default function NFLScoreboard({ games }: NFLScoreboardProps) {
  if (!games || games.length === 0) {
    return (
      <div className="text-center mt-10">No games available at the moment.</div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">NFL Scoreboard</h1>
      <div className="grid gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="flex justify-between items-center bg-gray-100 p-3">
              <span className="font-semibold text-lg">
                {game.status.type.state === "in"
                  ? `Q${game.status.period}`
                  : new Date(game.date).toLocaleDateString(undefined, {
                      weekday: "long", // e.g., "Monday"
                      month: "long", // e.g., "August"
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                    })}
              </span>
              <span className="text-sm text-gray-600">
                {game.status.type.state === "pre"
                  ? game.competitions[0]?.odds[0]?.details ||
                    "No odds available"
                  : game.status.displayClock}
              </span>
            </div>
            <div className="p-5">
              {game.competitions[0].competitors.map((team) => (
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
                        {team.team.abbreviation}
                      </span>
                      <span className="text-sm text-gray-600 block">
                        {team.records[0].summary}
                      </span>
                    </div>
                  </div>
                  <span className="text-2xl font-semibold">{team.score}</span>
                </div>
              ))}
              {game.competitions[0].situation && (
                <div className="text-sm text-gray-600 mt-3">
                  <div>{game.competitions[0].situation.downDistanceText}</div>
                  <div>{game.competitions[0].situation.possessionText}</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}