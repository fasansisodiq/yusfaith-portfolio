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
    <div
      className={`${showPageNav && "lg:pb-20"}  ${
        !searchQuery
          ? `${fullWidth}`
          : "w-5/10 sm:w-6/10 md:w-6/10 lg:w-6/10  flex self-center"
      } `}
    >
      <div
        className={`${
          !searchQuery ? `${fullWidth}` : "w-8/10 sm:w-9/10 lg:w-8/10"
        }  flex  items-center gap-2 sm:gap-5 lg:gap-8 xl:gap-10 border-2 border-slate-300/40 sm:h-15 lg:h-20 rounded-full text-slate-400  self-center bg-stone-700/60 `}
      >
        <div className="flex justify-center items-center gap-2 lg:gap-4 sm:pl-4 lg:pl-6 xl:pl-8 w-fit h-10 sm:h-14 lg:h-16 rounded-xl  ">
          <span className=" text-[1.4rem] sm:text-[1.7rem] lg:text-[2.8rem] text-slate-300/40">
            <CiSearch />
          </span>
          <div
            onMouseEnter={() => setShowCancelBtn(!showCancelBtn)}
            onMouseLeave={() => setShowCancelBtn(false)}
            className="flex bg-stone-700/60 rounded-full p-1 lg:p-2 h-8 sm:h-10 lg:h-12 xl:h-12 "
          >
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Search in the portfolio"
              name="search"
              className="outline-0 px-2  border-0 w-30 sm:w-60 lg-w-80 xl:w-85 placeholder-stone-300/80 placeholder:text-lg lg:placeholder:text-xl placeholder:opacity-75 text-white"
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
