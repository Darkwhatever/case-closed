import { useState } from "react";
import { navigationLabels } from "@/src/lib/mapping/headerMaps";

const Navigations = () => {
  const [selectedTap, setSelectedTap] = useState("discover");

  const navigations = navigationLabels(setSelectedTap);

  return (
    <nav className="flex flex-row gap-4">
      {navigations.map((item: any) => {
        const { label, id, action } = item;
        const isSelected = selectedTap === item?.id;
        return (
          <button
            key={id}
            type="button"
            onClick={action}
            className={`flex items-center justify-center px-3 py-2 text-sm font-medium text-[#e7e7e7] cursor-pointer ${
              isSelected
                ? "border-b-2 border-[#e7e7e7] "
                : "border-b-2 border-transparent"
            }`}
          >
            {item?.label ?? item}
          </button>
        );
      })}
    </nav>
  );
};

export default Navigations;
