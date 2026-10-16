"use server";
import { Show } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const LandingHeader = async () => {
  return (
    <header className="w-full px-8 md:px-8 py-1 fixed top-0 z-50 transition-all duration-1000 ease-in-out bg-red-500 items-center ">
      <nav className="flex justify-between items-center w-full h-full overflow-visible">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Case Closed Logo"
            width={180}
            height={180}
            className="object-cover w-ful h-full"
          />
        </Link>
      </nav>
    </header>
  );
};

export default LandingHeader;
