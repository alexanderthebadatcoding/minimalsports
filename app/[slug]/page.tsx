"use client";
import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import useSWR from "swr";
import Scoreboard from "@/app/components/Scoreboard";
import Footer from "@/app/components/Footer";
import { getSportData } from "@/lib/getSportData";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ResultPage() {
  const router = useRouter();
  const params = useParams();
  const slug = Array.isArray(params.slug)
    ? params.slug[0]
    : (params.slug as string);

  const { apiUrl, title } = getSportData(slug);
  const { data, error } = useSWR(apiUrl, fetcher, { refreshInterval: 60000 });

  useEffect(() => {
    const handlePopState = () => {
      router.push("/");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [router]);

  if (!apiUrl)
    return (
      <>
        <div className="text-3xl font-bold mx-auto text-center my-16">
          Invalid Sport
        </div>
        <Footer />
      </>
    );

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
      <div className="w-full max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">{title}</h1>
        <Scoreboard games={data.events} />
      </div>
      <Footer />
    </>
  );
}
