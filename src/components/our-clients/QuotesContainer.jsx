import React from "react";
import QuoteCard from "./QuoteCard";
import { usePortState } from "../../hooks/PortfolioContext";

const quotes = [
  {
    name: "dev qazeem",
    position: "data analyst",
    src: "customer.jpeg",
    quote:
      "Their designs are not just appealing, but also incredibly user-friendly.",
  },
  {
    name: "dev quams",
    position: "web developer",
    src: "customer.jpeg",
    quote:
      "Their designs solutions have significantly improved our websites's user experience, leading to a 20% increase in conversation",
  },
  {
    name: "dev sodiq",
    position: "full-stack engineer",
    src: "customer.jpeg",
    quote:
      "They were able to quickly understand our target audience and create a design that resonated with them on an emotional level.",
  },
];

function QuotesContainer() {
  const { showPageNav } = usePortState();
  return (
    <div
      className={` flex flex-col justify-center items-center   ${
        showPageNav ? "h-screen" : "h-fit sm:pt-10 lg:pt-20"
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
