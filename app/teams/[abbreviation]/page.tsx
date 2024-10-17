"use client";
import Footer from "@/app/components/Footer";
import { useParams } from "next/navigation";
import Image from "next/image";
import moment from "moment";
import useSWR from "swr";
import { Key } from "react";

// Fetcher function to handle API calls and error responses
const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    // Check if it's a 400 error
    if (res.status === 400) {
      throw new Error("Team not found");
    }
    throw new Error("An error occurred");
  }
  return res.json();
};

export default function TeamPage() {
  const params = useParams(); // Using useParams to get the abbreviation from the URL
  const abbreviation = Array.isArray(params.abbreviation)
    ? params.abbreviation[0] // If it's an array, take the first element
    : params.abbreviation; // If it's a string, use it directly

  // Construct the API URL based on the abbreviation
  const apiUrl = abbreviation
    ? `https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/${abbreviation.toLowerCase()}`
    : null;

  // Always call the useSWR hook
  const { data, error } = useSWR(apiUrl, fetcher, { refreshInterval: 60000 });

  // Only proceed if abbreviation is a string
  if (typeof abbreviation !== "string") {
    return <div>Error: Invalid team abbreviation.</div>;
  }

  // If error is 400, display "Team not found"
  if (error?.message === "Team not found") {
    return (
      <>
        <div className="text-center mt-10 text-xl text-red-500">
          Team not found
        </div>
        <Footer />
      </>
    );
  }

  // Handle other potential errors
  if (error) {
    return (
      <div className="text-center mt-10 text-2xl text-red-400">
        {error.message}
      </div>
    );
  }

  // Loading state
  if (!data) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  // Safely access the team's first record item summary
  const teamRecordSummary =
    data.team?.record?.items?.[0]?.summary || "No record available";

  const GamecastURL = data.team.nextEvent[0].links[0].href;
  const week = data.team.nextEvent[0].week.text;

  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        {data.team?.logos?.[0]?.href && (
          <div className="flex justify-center mt-6">
            <Image
              src={data.team.logos[0].href}
              alt={`${data.team.displayName} logo`}
              width={124}
              height={124}
              className="object-contain"
            />
          </div>
        )}
        {/* Team Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">{data.team?.displayName}</h1>
        </div>

        {/* Team Record */}
        <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg overflow-hidden mt-6">
          <div className="flex justify-between items-center bg-gray-100 dark:bg-slate-900 p-3">
            <h2 className="text-xl font-semibold text-center">Team Overview</h2>
          </div>
          <div className="text-lg p-5">
            <p className="mb-2">
              <span className="font-medium">Record:</span> {teamRecordSummary}
            </p>
            <p className="mb-2">
              <span className="font-medium">Location:</span>{" "}
              {data.team?.location}
            </p>
            {data.team.rank != null && (
              <p className="mb-2">
                <span className="font-medium">Rank:</span> {data?.team?.rank}
              </p>
            )}

            <p className="mb-2">{data.team.standingSummary}</p>
          </div>
        </div>
        {data.team?.nextEvent?.[0]?.competitions?.map(
          (
            competition: {
              status: { type: { state: string; detail: any } };
              date: moment.MomentInput;
              competitors: any[];
            },
            index: Key | null | undefined
          ) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 shadow-md rounded-lg overflow-hidden mt-6"
            >
              {/* Header Section */}
              <div className="flex justify-between items-center bg-gray-100 dark:bg-slate-900 p-3">
                <span className="font-semibold text-xl">
                  {competition.status.type.state === "in"
                    ? `${competition.status.type.detail}`
                    : competition.status.type.state === "post"
                    ? "Final"
                    : moment
                        .utc(competition.date)
                        .local()
                        .isSame(moment(), "day")
                    ? `${moment.utc(competition.date).local().format("h:mm a")}`
                    : moment
                        .utc(competition.date)
                        .local()
                        .diff(moment(), "days") > 5
                    ? moment
                        .utc(competition.date)
                        .local()
                        .format("MM/DD dddd h:mm a")
                    : moment
                        .utc(competition.date)
                        .local()
                        .format("dddd h:mm a")}
                </span>

                <span className="text-gray-600 dark:text-gray-200">{week}</span>
              </div>

              {/* Body Section */}
              <div className="p-5 flex flex-row justify-around content-center">
                {competition?.competitors?.map((team) => (
                  <div
                    key={team.homeAway}
                    className="flex justify-between items-center"
                  >
                    <div className="flex-row items-center">
                      <Image
                        src={team.team.logos[0].href}
                        alt={`${team.team.displayName} logo`}
                        width={100}
                        height={100}
                      />
                      <div className="text-center">
                        <span className="font-bold text-lg ">
                          {team.team.shortDisplayName}{" "}
                          <p className="text-gray-600 dark:text-gray-400 font-medium inline">
                            {team.curatedRank &&
                            Number(team.curatedRank.current) < 30
                              ? team.curatedRank.current
                              : ""}{" "}
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-lg p-5 text-center">
                <div>
                  <a
                    href={GamecastURL} // Assuming the structure holds true
                    target="_blank" // Opens link in a new tab
                    rel="noopener noreferrer" // Security measure
                    className="text-blue-600 hover:underline"
                  >
                    View Game on ESPN
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <Footer />
    </>
  );
}
