"use client";

import FrozenRoute from "@/src/components/FrozenRoute";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";

export default function RoutesPresister({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const parentVariants: Variants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },

    exit: {
      opacity: 0,
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <AnimatePresence
      mode="popLayout"
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        key={pathname}
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
}
