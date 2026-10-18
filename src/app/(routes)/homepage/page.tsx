"use server";
import { db } from "@/prisma/prismaDB";
import { auth } from "@clerk/nextjs/server";

const page = async () => {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  return <div>page</div>;
};

export default page;
