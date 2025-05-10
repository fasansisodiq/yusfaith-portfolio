("use client");

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TiTimes } from "react-icons/ti";

export default function SearchBox() {
  const [showCancelBtn, setShowCancelBtn] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center justify-center w-full px-2 py-2 lg:px-4 lg:py-3 border-2 border-slate-300/40 rounded-full bg-stone-700/60 mb-24">
      <div className="flex items-center w-full max-w-7xl rounded-full gap-2">
        <CiSearch
          size={24}
          className="text-gray-400 md:size-8"
          aria-label="hidden"
        />

        <input
          type="text"
          placeholder="Search in the portfolio"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value.length > 0) {
              setShowCancelBtn(true);
            }
          }}
          className="flex-1 text-md lg:text-2xl font-normal border-none outline-none text-gray-300 placeholder-gray-500 p-2 lg:p-3"
        />

        {showCancelBtn && query.length > 0 && (
          <TiTimes
            onClick={() => setQuery("")}
            size={36}
            className="text-red-500"
          />
        )}
      </div>
    </div>
  );
}
