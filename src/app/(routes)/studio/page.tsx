"use server";
import { db } from "@/prisma/prismaDB";
import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";
import StudioClient from "./(components)/StudioClient";

export default async function CreatePage() {
  const { userId } = await auth();

  return (
    <div className="relative flex flex-col min-w-screen min-h-screen px-15 py-20 no-scrollbar">
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <StudioClient />
        </main>
      </Suspense>
    </div>
  );
}
