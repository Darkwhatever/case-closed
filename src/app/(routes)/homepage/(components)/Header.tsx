"use client";
import { motion } from "framer-motion";
type Props = {
  user: any;
};

const Header = ({ user }: Props) => {
  const { avatarUrl, username } = user;

  return (
    <motion.div className="absolute top-0 right-0 flex w-full h-12 bg-amber-500"></motion.div>
  );
};

export default Header;
