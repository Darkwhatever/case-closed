"use client";

import FrozenRoute from "@/src/components/FrozenRoute";
import { AnimatePresence, motion } from "framer-motion";

export default function RoutesTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const parentVariants = {};
  return (
    <AnimatePresence
      mode="popLayout"
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
}
