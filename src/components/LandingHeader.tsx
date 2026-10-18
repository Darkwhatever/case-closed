"use server";
import { Show } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import LoginButtons from "./LoginButtons";
import { Suspense } from "react";
const LandingHeader = async () => {
  return (
    <header className="w-full px-8 md:px-8 py-3 fixed top-0 z-50 transition-all duration-1000 ease-in-out bg-[#00040a]/50 items-center ">
      <nav className="flex justify-between items-center w-full h-full overflow-visible">
        <div className="flex flex-row items-center select-none ">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Case Closed Logo"
              loading="eager"
              quality={100}
              width={135}
              height={135}
              className="object-cover w-ful h-full"
            />
          </Link>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Show when="signed-out">
            <LoginButtons />
          </Show>
        </Suspense>
      </nav>
    </header>
  );
};

export default LandingHeader;
