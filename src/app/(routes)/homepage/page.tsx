"use server";
import { db } from "@/prisma/prismaDB";
import { auth } from "@clerk/nextjs/server";
import Header from "./(components)/Header";

const page = async () => {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
    </div>
  );
};

export default page;
