"use server";
import LandingHeader from "../components/LandingHeader";

export default async function Home() {
  return (
    <div className="relative flex flex-col h-screen">
      <LandingHeader />
    </div>
  );
}
