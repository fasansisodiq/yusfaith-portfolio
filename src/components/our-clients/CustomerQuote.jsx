import React from "react";

function CustomerQuote({ quote }) {
  return (
    <div className="shake-container w-full pt-7 sm:pt-10 lg:pt-0 xl:pt-0 text-white text-wrap text-xs sm:text-sm lg:text-xl xl:text-xl text-center normal-case">
      &quot;{quote}&quot;
    </div>
  );
}

export default CustomerQuote;
