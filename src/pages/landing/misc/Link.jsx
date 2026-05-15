import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { IconArrowUpRight } from "@tabler/icons-react";

export const Link = ({
  icon,
  sn,
  heading,
  imgSrc,
  subheading,
  linkText,
  href,
}) => {
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
        <span className="text-muted-foreground">{sn}</span>
        {IconComponent && (
          <div className="h-9 w-9 flex items-center justify-center border border-white/10 bg-card-foreground rounded-lg shrink-0">
            <IconComponent className="size-4" stroke={1.5} />
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
          <span className="relative z-10 mt-2 lg:mt-0 block text-sm text-white/70 transition-colors duration-500">
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
        className="absolute z-50 h-24 w-32 rounded-lg md:h-112.5 md:w-125 bg-[#141414] flex items-center justify-center"
      >
        <img
          src={imgSrc}
          alt={`Image representing a link for ${heading}`}
          className="object-contain"
        />
      </motion.div>

      <div className="relative flex items-center text-xs font-medium tracking-wider text-gray-500 z-10 p-4">
        {linkText}
        <IconArrowUpRight className="size-4" />
      </div>
    </motion.a>
  );
};
