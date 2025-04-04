import React from "react";
import QuoteCard from "./QuoteCard";
import { usePortState } from "../../hooks/PortfolioContext";

const quotes = [
  {
    name: "dev qazeem",
    position: "data analyst",
    src: "./sodiq3.png",
    quote:
      "Their designs are not just appealing, but also incredibly user-friendly.",
  },
  {
    name: "dev smith",
    position: "web developer",
    quote:
      "Their designs are not just appealing, but also incredibly user-friendly.",
  },
  {
    name: "dev sodiq",
    position: "full-stack engineer",
    src: null,
    quote:
      "Their designs are not just appealing, but also incredibly user-friendly.",
  },
];

function QuotesContainer() {
  const { showPageNav } = usePortState();
  return (
    <div
      className={` flex flex-col justify-center items-center   ${
        showPageNav
          ? "h-fit sm:h-screen"
          : "h-fit pt-0 sm:pt-10 md:pt-15 lg:pt-20"
      }
    `}
    >
      <h1 className="self-start pb-0 pt-10  lg:pb-6 capitalize font-bold text-2xl sm:text-3xl lg:text-5xl xl:text-5xl text-white">
        hear from our clients
      </h1>

      <div className="flex  justify-center items-center gap-3 pb-20 sm:pb-10">
        {quotes.map((quote, idx) => (
          <QuoteCard
            src={quote.src}
            name={quote.name}
            position={quote.position}
            quote={quote.quote}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}

export default QuotesContainer;
