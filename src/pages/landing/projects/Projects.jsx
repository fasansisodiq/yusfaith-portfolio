//hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//icons
import { LuFigma } from "react-icons/lu";

//images
import EbuteImg from "../../../assests/images/EbuteImg.png";
import ErpImg from "../../../assests/images/ErpImg.png";
import TraceImg from "../../../assests/images/TraceImg.png";

const projects = [
  {
    image: EbuteImg,
    title: "Ebute",
    description: "Terminal management",
    href: "/ebute",
  },
  {
    image: TraceImg,
    title: "Traceability",
    description: "The Traceability App is designed to help businesses",
    href: "/traceability",
  },
  {
    image: ErpImg,
    title: "ERP",
    description: "Terminal management",
    href: "/terminal-management",
  },
];

function Project() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="w-full mb-24">
      <h3 className="text-2xl lg:text-5xl font-semibold mb-4 lg:mb-10">
        Projects
      </h3>
      <div className="w-full flex flex-col">
        {projects.map((item, index) => (
          <div
            key={index}
            className="relative border-b lg:border-b-2 border-white py-6 lg:py-10 text-gray-300 transition-all duration-300"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onTouchStart={() =>
              setHoveredIndex(index === hoveredIndex ? null : index)
            }
          >
            <div className="flex items-start md:items-center">
              <LuFigma className="size-5 md:size-6 mt-1 md:mt-0 flex-shrink-0" />
              <span className="mx-3">|</span>
              <h4
                onClick={() => navigate(item.href)}
                className="flex flex-col md:flex-row md:items-center text-xl md:text-2xl lg:text-3xl cursor-pointer"
              >
                <span className="uppercase font-semibold">{item.title}</span>
                <span className="hidden md:block px-3">-</span>
                <span className="text-base md:text-2xl lg:text-3xl mt-1 md:mt-0">
                  {item.description}
                </span>
              </h4>
            </div>
            <img
              src={item.image}
              alt={`photo of ${item.title}`}
              className={`w-96 h-auto absolute top-1/2 right-[10%] -translate-y-1/2 transition-opacity duration-300 z-10 bg-black rounded-xl p-4 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
