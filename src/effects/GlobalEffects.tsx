"use client";
import { useEffect, useLayoutEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { setSelectedTap, useGlobalStore } from "@/src/stores/globalStore";

const GlobalEffects = () => {
  const selectedTap = useGlobalStore((state) => state.selectedTap);
  const pathname = usePathname();
  const router = useRouter();

  return null;
};

export default GlobalEffects;
