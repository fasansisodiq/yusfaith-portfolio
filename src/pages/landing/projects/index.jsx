import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
//images
import EbuteImg from "../../../assests/images/EbuteImg.png";
import ErpImg from "../../../assests/images/ErpImg.png";
import TraceImg from "../../../assests/images/TraceImg.png";
import { LuFigma } from "react-icons/lu";

export const ProjectList = () => {
  return (
    <section className="mb-24">
      <div className="mx-auto max-w-7xl">
        <Link
          heading="Ebute"
          subheading="Terminal management"
          imgSrc={EbuteImg}
          href="/ebute"
        />
        <Link
          heading="Traceability"
          subheading="The Traceability App is designed to help businesses"
          imgSrc={ErpImg}
          href="/traceability"
        />
        <Link
          heading="ERP"
          subheading="Terminal management"
          imgSrc={TraceImg}
          href="/terminal-management"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-white py-4 transition-colors duration-500 md:py-8"
    >
      <div className="flex items-start lg:items-center">
        <LuFigma className="size-5 md:size-6 mt-1 md:mt-0 flex-shrink-0 mr-3" />
        <div className="flex flex-col lg:flex-row lg:items-center border-l border-gray-300 pl-3 ">
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className="relative z-10 block text-xl font-bold text-gray-300 transition-colors duration-500 md:text-3xl lg:leading-0"
          >
            {heading.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: "spring" }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </motion.span>
          <span className="hidden lg:block px-3">—</span>
          <span className="relative z-10 mt-2 lg:mt-0 block text-base lg:text-3xl text-gray-300 lg:leading-0 transition-colors duration-500">
            {subheading}
          </span>
        </div>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "0deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-50 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};
