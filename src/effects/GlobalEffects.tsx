"use client";
import { useEffect, useLayoutEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { setSelectedTap, useGlobalStore } from "@/src/stores/globalStore";

const GlobalEffects = () => {
  const selectedTap = useGlobalStore((state) => state.selectedTap);
  const pathname = usePathname();
  const router = useRouter();
  useLayoutEffect(() => {
    if (pathname.startsWith("/homepage")) {
      setSelectedTap(selectedTap);
    } else if (pathname.startsWith("/cases")) {
      setSelectedTap("cases");
    } else if (pathname.startsWith("/studio/")) {
      setSelectedTap("studio");
    } else if (pathname.startsWith("/profile/")) {
      setSelectedTap("profile");
    } else if (pathname.startsWith("/caselist/")) {
      setSelectedTap("myCases");
    }
  }, [pathname]);

  return null;
};

export default GlobalEffects;
