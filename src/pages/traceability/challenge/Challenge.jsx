import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Challenge = ({ title, description, challenges }) => {
  const [showMore, setShowMore] = React.useState(null); // Track the index of the expanded item

  const toggleShowMore = (index) => {
    setShowMore((prevIndex) => (prevIndex === index ? null : index)); // Toggle the clicked item
  };

  return (
    <section className="w-full mt-24">
      <div className="space-y-4 lg:space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold">
          {title}
        </h2>
        <p className="w-full lg:max-w-[748px] text-base lg:text-xl">
          {description}
        </p>
      </div>

      <div className="w-full lg:max-w-[800px] mt-8 grid gap-6 items-center">
        {challenges.map((item, index) => (
          <div
            key={index}
            className="border border-white rounded-xl p-6 flex flex-col bg-white cursor-pointer"
          >
            <div
              onClick={() => toggleShowMore(index)}
              className="flex items-center justify-between"
            >
              <h3 className="text-base lg:text-2xl !text-black font-semibold w-[calc(100%-3rem)]">
                {item.title}
              </h3>
              {/* Toggle button */}
              <div className="p-2 flex items-center justify-center rounded-full bg-black cursor-pointer w-8 h-8 lg:w-12 lg:h-12">
                <IoIosArrowDown
                  color="#fff"
                  className={`size-6 lg:size-8 transition-transform duration-300 ${
                    showMore === index ? "-rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>

            {/* Show More Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                showMore === index
                  ? "max-h-50 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <hr className="my-4" />
              <span className={`text-sm lg:text-base`}>{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Challenge;
