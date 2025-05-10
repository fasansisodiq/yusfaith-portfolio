import React from "react";

const testimonials = [
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

function TestimonialCard() {
  return (
    <section className="w-full h-fit flex flex-col gap-5 pt-10 py-24">
      {/* Section Title */}
      <h1 className="self-start pb-0 pt-10 lg:pb-6 capitalize font-semibold text-2xl lg:text-5xl text-white">
        hear from our clients
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-20">
        {testimonials.map((data, idx) => (
          <div
            key={idx}
            className={
              "relative border-2 border-slate-300/30 rounded-lg pt-10 pb-6 px-6 text-center text-white mb-10 last-of-type:mb-0 md:mb-0"
            }
          >
            {/* Image positioned at the top middle, half outside the card */}
            <div className="absolute left-1/2 -top-10 lg:-top-16 -translate-x-1/2 transform ">
              <div className="relative">
                <div className="absolute -right-1 top-0 h-16 w-16 rounded-full" />
                <div className="relative z-10 h-20 w-20 lg:h-32 lg:w-32 overflow-hidden rounded-full">
                  <img
                    src={data.src}
                    alt={`Photo of ${data.name}`}
                    fill
                    className="object-cover absolute left-1/2 -top-10 lg:-top-16 -translate-x-1/2 transform bg-blend-multiply opacity-85 hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4 text-sm italic text-gray-300">
                "{data.quote}"
              </p>
              <div className="mt-auto">
                <h3 className="text-lg font-bold">{data.name}</h3>
                <p className="text-sm text-gray-400">{data.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialCard;
