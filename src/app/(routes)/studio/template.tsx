"use client";
import { motion } from "framer-motion";

const dashboardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Staggers all children inside the dashboard
    },
  },
  exit: { opacity: 0 },
};

export default function StudioTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={dashboardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
