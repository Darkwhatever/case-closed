"use server";
import { db } from "@/prisma/prismaDB";
import { auth } from "@clerk/nextjs/server";

const EditCase = async () => {
  const { userId } = await auth();

  return <div>Create page</div>;
};

export default EditCase;
