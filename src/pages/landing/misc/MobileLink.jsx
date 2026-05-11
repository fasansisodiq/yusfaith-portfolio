import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { IconArrowUpRight } from "@tabler/icons-react";

export const MobileLink = ({
  icon: IconComponent,
  sn,
  heading,
  imgSrc,
  subheading,
  linkText,
  href,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageHeight, setImageHeight] = useState(0);
  const cardRef = useRef(null);

  // Detect if image is loaded and set height for smooth animation
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.naturalHeight) {
      setImageHeight(imgRef.current.naturalHeight);
    }
  }, [imgSrc]);

  // Handle touch for mobile
  const handleCardTap = () => {
    setIsExpanded(!isExpanded);
    // Auto-collapse after 3 seconds if expanded
    if (!isExpanded) {
      setTimeout(() => setIsExpanded(false), 3000);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="mb-4 last:mb-0"
    >
      <motion.div
        onClick={handleCardTap}
        className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden active:scale-[0.98] transition-transform duration-200 "
        whileTap={{ scale: 0.98 }}
      >
        {/* Main Content */}
        <div className="p-5">
          {/* Header Section */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              {/* <span className="text-sm font-mono text-gray-500 bg-white/5 px-2 py-1 rounded-md">
                {sn}
              </span> */}
              {IconComponent && (
                <div className="h-10 w-10 flex items-center justify-center border border-white/10 bg-card-foreground rounded-xl">
                  <IconComponent className="size-5 text-gray-300" />
                </div>
              )}
            </div>

            {/* Expand/Collapse Indicator */}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-gray-500 bg-white/5 p-2 rounded-full"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-100 mb-2 leading-tight">
            {heading}
          </h3>

          {/* Subheading */}
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            {subheading}
          </p>

          {/* CTA */}
          <motion.div
            className="relative flex items-center justify-between pt-3 border-t border-white/10"
            animate={{ opacity: isExpanded ? 0.7 : 1 }}
          >
            <div className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <span className="font-mono">{sn}</span> {"•"}
              <span>{linkText}</span>
              <IconArrowUpRight className="size-4" />
            </div>
            <span className="text-xs text-gray-600">Tap for preview</span>
          </motion.div>
        </div>

        {/* Expandable Image Section */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isExpanded ? "auto" : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="relative">
            <img
              ref={imgRef}
              src={imgSrc}
              alt={heading}
              className="w-full h-auto object-cover"
              onLoad={(e) => setImageHeight(e.target.naturalHeight)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* Full size hint */}
            <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-md rounded-full px-3 py-1 text-xs text-white">
              View project
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
