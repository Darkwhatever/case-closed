import React from "react";
import { Search } from "lucide-react";

const SearchButton = () => {
  return (
    <button className="flex h-10 w-10 items-center justify-center rounded-full cursor-pointer">
      <Search size={22} />
    </button>
  );
};

export default SearchButton;
