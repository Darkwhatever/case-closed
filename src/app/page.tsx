"use server";
import { auth } from "@clerk/nextjs/server";
import LandingHeader from "../components/LandingHeader";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();

  if (userId) return redirect("/homepage");

  return (
    <div className="relative flex flex-col h-screen">
      <LandingHeader />
    </div>
  );
}
