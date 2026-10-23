"use client";
import { getUser, getUserIcon } from "@/src/lib/queries/userQueries";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import UserIcon from "./UserIcon";
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
    <motion.div className="absolute top-0 right-0 flex w-full h-12 bg-amber-500 items-center justify-between px-4 py-1">
      <div>
        <h1 className="text-[1.5rem] font-semibold font-lachesis text-[#e7e7e7] tracking-wider">
          Case Closed
        </h1>
      </div>

      <div>{user && !isPending && isMounted && <UserIcon user={user} />}</div>
    </motion.div>
  );
};

export default Header;
