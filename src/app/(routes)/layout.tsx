"use server";
import { db } from "@/src/server/prisma/prismaDB";
import { auth } from "@clerk/nextjs/server";
import Header from "./homepage/(components)/(Header)/Header";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();

  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <aside>
        <Header userId={userId} />
      </aside>

      <main>{children}</main>
    </div>
  );
};

export default layout;
