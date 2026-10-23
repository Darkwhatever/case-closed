"use client";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [searchType, setSearchType] = useState("cases"); // cases or users
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <motion.div className="flex h-10 w-200 items-center gap-2 rounded-xl bg-[#0d1527]/70 px-3 py-4 outline-none border-0">
      <Search size={18} className="text-white" />

      <motion.input
        type="text"
        name="search"
        autoComplete="off"
        placeholder={searchType === "cases" ? "Search Cases" : "Search Users"}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="min-w-0 flex-1 bg-transparent text-[15px] text-white outline-none placeholder:text-[16px]"
      />
    </motion.div>
  );
};

export default SearchBar;
