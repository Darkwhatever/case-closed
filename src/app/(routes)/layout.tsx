"use server";
import { db } from "@/src/server/prisma/prismaDB";
import { auth } from "@clerk/nextjs/server";
import Header from "../../components/Header/Header";
import LeftPanel from "@/src/components/LeftPanel/LeftPanel";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();

  return (
    <div className="relative flex  min-h-screen w-full">
      <aside>
        <Header userId={userId} />
      </aside>

      <aside>
        <LeftPanel />
      </aside>

      <main>{children}</main>
    </div>
  );
};

export default layout;
