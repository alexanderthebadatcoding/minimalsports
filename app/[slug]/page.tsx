"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation"; // Import useParams from next/navigation
import useSWR from "swr";
import Scoreboard from "@/app/components/Scoreboard";
import Footer from "@/app/components/Footer";
import { getSportData } from "@/lib/getSportData";

// Fetcher function for SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ResultPage({
  params,
}: {
  params: { slug: string | string[] };
}) {
  // const params = useParams(); // Using useParams to get the slug
  const router = useRouter(); // Initialize the router
  // const slug = params.slug;
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const { apiUrl, title } = getSportData(slug);

  // Use SWR to fetch data
  const { data, error } = useSWR(apiUrl, fetcher, { refreshInterval: 60000 });
  useEffect(() => {
    // Function to intercept back button and redirect to "/"
    const handlePopState = () => {
      router.push("/"); // Always navigate to the homepage on back button
    };

    // Add an event listener to listen for the popstate event (browser back button)
    window.addEventListener("popstate", handlePopState);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [router]);

  // Handle loading and error states
  if (!apiUrl) {
    return (
      <>
        <div className="text-3xl font-bold mx-auto text-center my-16">
          Invalid Sport
        </div>
        <Footer />
      </>
    );
  }

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
