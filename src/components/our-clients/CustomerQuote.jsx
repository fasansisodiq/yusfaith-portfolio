import React from "react";

function CustomerQuote({ quote }) {
  return (
    <div className="shake-container w-full pt-10 sm:pt-10 lg:pt-5 xl:pt-5 text-white text-wrap text-[0.6rem] sm:text-sm lg:text-lg xl:text-xl text-center normal-case">
      &quot;{quote}&quot;
    </div>
  );
}

export default CustomerQuote;
