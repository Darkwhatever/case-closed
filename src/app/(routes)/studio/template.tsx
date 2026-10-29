"use client";
import FrozenRoute from "@/src/components/FrozenRoute";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function StudioTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="w-full"
      >
        <FrozenRoute>
          <main>{children}</main>
        </FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
}
