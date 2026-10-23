"use server";
import { db } from "@/src/server/prisma/prismaDB";
import { auth } from "@clerk/nextjs/server";
import Header from "./(components)/(Header)/Header";

const page = async () => {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  return <div className="relative flex flex-col min-h-screen w-full"></div>;
};

export default page;
