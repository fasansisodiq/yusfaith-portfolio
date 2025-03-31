import { CiSearch } from "react-icons/ci";
import ScrollBtns from "./ScrollBtns";
import { useState } from "react";
import { TiTimes } from "react-icons/ti";

function PageNavigation({ searchQuery, setSearchQuery, keyUp, onClearSeach }) {
  const [showCancelBtn, setShowCancelBtn] = useState(false);
  return (
    <div
      className={`lg:pb-20 ${
        !searchQuery ? " lg:w-full" : "lg:w-5/10  flex self-center"
      } `}
    >
      <div
        className={`${
          !searchQuery ? " lg:w-full" : "lg:w-8/10"
        }  flex  items-center gap-2 lg:gap-10 border-2 border-slate-300/40 lg:h-20 rounded-full text-slate-400  self-center bg-stone-700/60 `}
      >
        <div className="flex justify-center items-center gap-2 lg:gap-4 pl-8 w-fit lg:h-16 rounded-xl  ">
          <span className="lg:text-[2.8rem] text-slate-300/40">
            <CiSearch />
          </span>
          <div
            onMouseEnter={() => setShowCancelBtn(!showCancelBtn)}
            onMouseLeave={() => setShowCancelBtn(false)}
            className="flex bg-stone-700/60 rounded-full p-2  lg:h-12 "
          >
            <input
              onKeyUp={keyUp}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Search in the portfolio"
              name="search"
              className="outline-0 px-2  border-0 w-60 lg:w-85 placeholder-stone-300/80 placeholder:text-lg lg:placeholder:text-xl placeholder:opacity-75 text-white"
            />
            <button
              onClick={onClearSeach}
              className={`text-red-700 lg:text-3xl  ${
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
