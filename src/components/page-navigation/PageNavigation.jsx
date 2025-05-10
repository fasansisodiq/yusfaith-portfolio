import { CiSearch } from "react-icons/ci";
import ScrollBtns from "./ScrollBtns";
import { useState } from "react";
import { TiTimes } from "react-icons/ti";
import { usePortState } from "../../hooks/PortfolioContext";

function PageNavigation() {
  const { showPageNav, searchQuery, setSearchQuery, handleClearSearch, keyUp } =
    usePortState();
  const [showCancelBtn, setShowCancelBtn] = useState(false);
  const fullWidth = "w-full sm:w-full lg:w-full";

  return (
    <div className={` ${!searchQuery ? `${fullWidth}` : "flex self-center"} `}>
      <div
        className={`${
          !searchQuery ? `${fullWidth}` : ""
        } h-20 border-2 border-slate-300/40 rounded-full text-slate-400 bg-stone-700/60 `}
      >
        <div className="flex justify-center items-center gap-2 lg:gap-4 sm:pl-4 lg:pl-6 xl:pl-8 h-10 sm:h-14 lg:h-16 rounded-xl">
          <span className=" text-[1.4rem] sm:text-[1.7rem] lg:text-[2.8rem] text-slate-300/40">
            <CiSearch />
          </span>
          <div
            onMouseEnter={() => setShowCancelBtn(!showCancelBtn)}
            onMouseLeave={() => setShowCancelBtn(false)}
            className="w-full flex bg-stone-700/60 rounded-full p-1 lg:p-2 h-8 sm:h-10 lg:h-12 xl:h-12"
          >
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Search in the portfolio"
              name="search"
              className="w-full outline-0 px-2 border-0 placeholder-stone-300/80 placeholder:text-sm lg:placeholder:text-xl placeholder:opacity-75 text-white"
            />
            <button
              onClick={handleClearSearch}
              className={`text-red-700 text-xl sm:text-2xl lg:text-3xl xl:text-3xl ${
                showCancelBtn ? "cursor-pointer" : ""
              }`}
            >
              {showCancelBtn && <TiTimes />}
            </button>
          </div>
        </div>
        {!searchQuery && <ScrollBtns />}
      </div>
    </div>
  );
}

export default PageNavigation;
