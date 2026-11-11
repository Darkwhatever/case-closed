"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import LeftPanel from "./LeftPanel";

export default function StudioPanelPresence() {
  const pathname = usePathname();
  const isStudioRoute = pathname === "/studio" || pathname.startsWith("/studio/");

  return (
    <AnimatePresence mode="wait">
      {isStudioRoute && (
        <aside key="studio-left-panel">
          <LeftPanel />
        </aside>
      )}
    </AnimatePresence>
  );
}
