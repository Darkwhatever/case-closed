"use server";
import { db } from "@/prisma/prismaDB";
import { auth } from "@clerk/nextjs/server";

const Profile = async () => {
  const { userId } = await auth();

  return <div>My Profile</div>;
};

export default Profile;
