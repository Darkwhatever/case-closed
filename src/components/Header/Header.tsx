"use client";
import Link from "next/link";
import { getUserIcon } from "@/src/lib/queries/userQueries";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import UserIcon from "./UserIcon";
import SearchBar from "./SearchBar";
import Notifications from "./Notifications";
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
    <motion.div
      className="absolute top-0 right-0 flex w-full h-16 bg-[#02070f] items-center justify-between px-4 py-1 z-100"
      style={{ borderBottom: "0.5px solid #122446" }}
    >
      <div>
        <Link href="/">
          <h1 className="text-[1.5rem] font-semibold font-lachesis text-[#e7e7e7] tracking-wider select-none cursor-pointer">
            Case Closed
          </h1>
        </Link>
      </div>

      <div>
        <SearchBar />
      </div>

      <div className="flex flex-row gap-4 items-center justify-center">
        <Notifications />
        {user && !isPending && isMounted && (
          <UserIcon user={user} isPending={isPending} />
        )}
      </div>
    </motion.div>
  );
};

export default Header;
