import React from "react";
import QuoteCard from "./QuoteCard";
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
    position: "full-stack enginer",
    src: null,
    quote:
      "Their designs are not just appealing, but also incredibly user-friendly.",
  },
];
function QuotesContainer() {
  return (
    <div
      className={` flex flex-col justify-center items-center  h-screen
    `}
    >
      <h1 className="self-start  lg:pb-6 capitalize font-bold lg:text-5xl text-white">
        hear from our clients
      </h1>

      <div className="flex  justify-center items-center gap-3 lg:pb-10">
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
