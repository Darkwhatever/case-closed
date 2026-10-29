"use client";
import Link from "next/link";
import { getUserIcon } from "@/src/lib/queries/userQueries";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import UserIcon from "./UserIcon";
import { usePathname } from "next/navigation";
import Notifications from "./Notifications";
import SearchButton from "./SearchButton";
import Navigations from "./Navigations";
import Image from "next/image";
type Props = {
  userId: string | null;
};

const Header = ({ userId }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const { data: user, isPending } = useQuery(getUserIcon({ userId }));

  const { username } = user || {};
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (pathname === "/sign-in" || pathname === "/sign-up") return null;
  return (
    <AnimatePresence mode="popLayout">
      <motion.header className="absolute inset-x-0 top-0 z-100 flex h-16 w-full items-center justify-between bg-transparent px-4 sm:px-6 lg:px-9 pointer-events-none">
        <div className="flex min-w-0 flex-row items-center justify-start gap-4 sm:gap-8 pointer-events-auto">
          <Link
            href="/"
            className="flex flex-row items-center justify-center gap-2 pointer-events-auto"
          >
            <Image
              src="/logo6.png"
              alt="Case Closed Logo"
              loading="eager"
              quality={100}
              width={38}
              height={38}
              className="object-cover w-ful h-full mb-1"
            />

            <h1 className="text-[1.30rem] font-semibold font-lachesis text-[#e7e7e7] tracking-wider select-none cursor-pointer pointer-events-auto">
              Case Closed
            </h1>
          </Link>

          <Navigations username={username ?? ""} />
        </div>

        <div className="flex shrink-0 flex-row items-center justify-center gap-1 sm:gap-3 pointer-events-auto">
          <SearchButton />
          <Notifications />
          {user && !isPending && isMounted ? (
            <UserIcon user={user} isPending={isPending} />
          ) : (
            <div className="flex w-10 h-10 bg-gray-700 rounded-full" />
          )}
        </div>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;
