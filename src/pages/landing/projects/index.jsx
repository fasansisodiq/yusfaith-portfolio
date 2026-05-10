import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  IconAnchor,
  IconLink,
  IconGridPattern,
  IconHome2,
  IconMosque,
  IconCreditCard,
  IconArrowUpRight,
} from "@tabler/icons-react";
//images
import EbuteImg from "../../../assests/images/EbuteImg.png";
import ErpImg from "../../../assests/images/ErpImg.png";
import TraceImg from "../../../assests/images/TraceImg.png";
import { LuFigma } from "react-icons/lu";
import { div } from "framer-motion/client";
import { SectionTitle } from "../../../components/ui/section-title";

export const ProjectList = () => {
  return (
    <section className="py-24">
      <SectionTitle title="Projects" subtitle="Work" className="mb-12" />
      <div className="mx-auto max-w-7xl">
        <Link
          sn="01"
          icon={IconAnchor}
          heading="Ebute"
          subheading="Terminal management system for port operations"
          imgSrc={EbuteImg}
          linkText="Enterprise"
          href="/ebute"
        />
        <Link
          sn="02"
          icon={IconLink}
          heading="Traceability"
          subheading="The Traceability App is designed to help businesses track supply chains"
          imgSrc={ErpImg}
          linkText="Saas"
          href="/traceability"
        />
        <Link
          sn="03"
          icon={IconGridPattern}
          heading="ERP"
          subheading="Terminal management ERP built for multi-department operations"
          imgSrc={TraceImg}
          linkText="Enterprise"
          href="/terminal-management"
        />
        <Link
          sn="04"
          icon={IconHome2}
          heading="Quicklist"
          subheading="Leasing, renting, and selling of Properties"
          imgSrc={TraceImg}
          linkText="PropTech"
          href="/quicklist"
        />
        <Link
          sn="05"
          icon={IconMosque}
          heading="Hon.Iyepe"
          subheading="Communication and engagement between Hon. Iyepe and constituents"
          imgSrc={TraceImg}
          linkText="Community"
          href="/quicklist"
        />
        <Link
          sn="06"
          icon={IconCreditCard}
          heading="PayIQ"
          subheading="Finance project — Mobile banking app for seamless payments"
          imgSrc={TraceImg}
          linkText="PropTech"
          href="/quicklist"
        />
      </div>
    </section>
  );
};

const Link = ({ icon, sn, heading, imgSrc, subheading, linkText, href }) => {
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

  const IconComponent = icon;

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-white/10 py-4 transition-colors duration-500 md:py-8"
    >
      <div className="flex items-start lg:items-center gap-6">
        <span className="text-gray-500">{sn}</span>
        {IconComponent && (
          <div className="h-9 w-9 flex items-center justify-center border border-white/20 bg-[#141414] rounded-lg mt-1">
            <IconComponent className="size-4 md:mt-0 shrink-0" />
          </div>
        )}
        <div>
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
            className="relative z-10 block text-xl font-bold text-gray-300 transition-colors duration-500 md:text-3xl"
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
          <span className="relative z-10 mt-2 lg:mt-0 block text-sm text-gray-300 transition-colors duration-500">
            {subheading}
          </span>
        </div>
      </div>

      <motion.div
        style={{
          right: "0",
          top: top,
          transform: "translateY(-50%)",
        }}
        variants={{
          initial: {
            scale: 0,
            rotate: "-12.5deg",
            opacity: 0,
            right: "0",
            top: "50%",
            x: "0",
            y: "-50%",
          },
          whileHover: {
            scale: 1,
            rotate: "0deg",
            opacity: 1,
            right: "0",
            top: "50%",
            x: "0",
            y: "-50%",
          },
        }}
        transition={{ type: "spring" }}
        className="absolute z-50 h-24 w-32 rounded-lg md:h-[28.125rem] md:w-[31.25rem] bg-[#141414] flex items-center justify-center"
      >
        <img
          src={imgSrc}
          alt={`Image representing a link for ${heading}`}
          className="object-contain"
        />
      </motion.div>

      <div className="relative flex items-center text-xs text-gray-500 z-10 p-4">
        {linkText}
        <IconArrowUpRight className="size-4" />
      </div>
    </motion.a>
  );
};
