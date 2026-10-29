"use server";
import { db } from "@/prisma/prismaDB";
import { auth } from "@clerk/nextjs/server";
import Header from "../../components/Header/Header";
import AnimatePresencePresist from "@/src/components/AnimatePresencePresist";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();

  return (
    <div className="relative flex  min-h-screen w-full justify-center">
      <aside>
        <Header userId={userId} />
      </aside>
      <AnimatePresencePresist>{children}</AnimatePresencePresist>
    </div>
  );
};

export default layout;
