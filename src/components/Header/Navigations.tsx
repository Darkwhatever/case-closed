import { navigationLabels } from "@/src/lib/mapping/headerMaps";
import { setSelectedTap, useGlobalStore } from "@/src/stores/globalStore";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const Navigations = ({ username }: { username: string }) => {
  const selectedTap = useGlobalStore((state) => state.selectedTap);
  const pathname = usePathname();
  const router = useRouter();
  const navigations = navigationLabels({ setSelectedTap, router, username });

  const { id, route } =
    navigations.find((item) => item?.id === selectedTap) || {};

  return (
    <nav className="flex flex-row items-center justify-center gap-1 sm:gap-2 select-none">
      {navigations.map((item: any) => {
        const { label, id, action, route } = item;
        const isSelected = selectedTap === item?.id;
        const handleClick = () => {
          if (id === selectedTap) return;
          action();

          if (pathname !== route) router.replace(route);
        };
        return (
          <button
            key={id}
            type="button"
            onClick={() => {
              handleClick();
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
