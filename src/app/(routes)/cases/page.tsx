"use server";
import { db } from "@/prisma/prismaDB";
import { auth } from "@clerk/nextjs/server";

const Cases = async () => {
  const { userId } = await auth();

  return <div>Cases Page</div>;
};

export default Cases;
