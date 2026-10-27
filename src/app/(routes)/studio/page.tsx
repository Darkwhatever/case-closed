"use server";
import { db } from "@/prisma/prismaDB";
import { auth } from "@clerk/nextjs/server";

const Create = async () => {
  const { userId } = await auth();

  return <div>Create page</div>;
};

export default Create;
