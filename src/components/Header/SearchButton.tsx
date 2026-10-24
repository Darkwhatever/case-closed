import React from "react";
import { Search } from "lucide-react";

const SearchButton = () => {
  return (
    <button className="flex p-2 items-center justify-center cursor-pointer mt-1">
      <Search size={24} />
    </button>
  );
};

export default SearchButton;
