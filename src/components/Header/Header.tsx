"use client";
import Link from "next/link";
import { getUserIcon } from "@/src/lib/queries/userQueries";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import UserIcon from "./UserIcon";
import SearchBar from "./SearchBar";
import Notifications from "./Notifications";
import SearchButton from "./SearchButton";
import Navigations from "./Navigations";
type Props = {
  userId: string | null;
};

const Header = ({ userId }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const { data: user, isPending } = useQuery(getUserIcon({ userId }));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div className="absolute top-0 right-0 flex w-full h-14 bg-transparent items-center justify-between px-10 py-1 z-100 pointer-events-none">
      <div className="flex flex-row justify-start items-center gap-6 pointer-events-auto">
        <Link href="/">
          <h1 className="text-[1.25rem] font-semibold font-lachesis text-[#e7e7e7] tracking-wider select-none cursor-pointer pointer-events-auto">
            Case Closed
          </h1>
        </Link>

        <Navigations />
      </div>

      <div className="flex flex-row gap-3 items-center justify-center pointer-events-auto">
        <SearchButton />
        <Notifications />
        {user && !isPending && isMounted && (
          <UserIcon user={user} isPending={isPending} />
        )}
      </div>
    </motion.div>
  );
};

export default Header;
