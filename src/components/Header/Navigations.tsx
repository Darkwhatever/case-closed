import { navigationLabels } from "@/src/lib/mapping/headerMaps";
import { setSelectedTap, useGlobalStore } from "@/src/stores/globalStore";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

const Navigations = ({ username }: { username: string }) => {
  const selectedTap = useGlobalStore((state) => state.selectedTap);
  const pathname = usePathname();
  const router = useRouter();

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const navigations = navigationLabels({
    setSelectedTap,
    router,
    username,
    params,
  });

  useLayoutEffect(() => {
    const { id } = navigations.find((item) => item.route === pathname) || {};

    if (id && selectedTap !== id) setSelectedTap(id);
  }, []);

  useEffect(() => {
    console.log(selectedTap);
  }, [selectedTap]);

  return (
    <nav className="flex flex-row items-center justify-center gap-1 sm:gap-2 select-none">
      {navigations.map((item: any) => {
        const { label, id, action, route } = item;
        const isSelected = selectedTap === item?.id;

        return (
          <button
            key={id}
            type="button"
            onClick={() => {
              if (id === selectedTap) return;
              action();
            }}
            className={`flex items-center justify-center px-2 py-2 text-sm font-medium cursor-pointer transition duration-250 sm:px-3 sm:text-base ${
              isSelected ? "text-[#e7e7e7]" : "text-[#9b9999] select-none"
            }`}
          >
            {label}
          </button>
        );
      })}
    </nav>
  );
};

export default Navigations;
