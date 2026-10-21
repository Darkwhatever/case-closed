"use server";
import { db } from "@/prisma/prismaDB";
import { auth } from "@clerk/nextjs/server";
import Header from "./(components)/Header";

const page = async () => {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  const getUser = async () => {
    "use cache";
    return db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });
  };

  const user = await getUser();

  if (!user) return redirectToSignIn();
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <Header user={user} />
    </div>
  );
};

export default page;
