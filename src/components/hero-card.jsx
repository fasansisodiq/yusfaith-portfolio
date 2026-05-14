import { IconArrowLeft, IconPointFilled } from "@tabler/icons-react";
import { Button } from "../components/ui/button";
import { cn } from "@/lib/utils";

const colorVariants = {
  purple: {
    text: "text-purple-500",
    textMuted: "text-purple-500/70",
    bgSoft: "bg-purple-50/10",
    border: "border-purple-500/70",
    button: "bg-purple-500 hover:bg-purple-600",
  },
  orange: {
    text: "text-orange-500",
    textMuted: "text-orange-500/70",
    bgSoft: "bg-orange-50/10",
    border: "border-orange-500/70",
    button: "bg-orange-500 hover:bg-orange-600",
  },
  green: {
    text: "text-[#256515]",
    textMuted: "text-[#256515]/70",
    bgSoft: "bg-[#256515]/10",
    border: "border-[#256515]/70",
    button: "bg-[#256515] hover:bg-[#256720]",
  },
};

export const HeroCard = ({
  badge,
  title,
  highlight,
  description,
  image,
  tags = [],
  color = "purple",
}) => {
  // Get the selected color config, fall back to purple if invalid.
  const colors = colorVariants[color] || colorVariants.purple;

  const renderTitle = (title, highlight) => {
    const words = title.split(" ");

    let highlightedIndexes = [];

    if (highlight?.type === "last") {
      highlightedIndexes = words
        .map((_, index) => index)
        .slice(-highlight.count);
    }

    if (highlight?.type === "indexes") {
      highlightedIndexes = highlight.values;
    }

    return words.map((word, index) => (
      <span
        key={index}
        className={highlightedIndexes.includes(index) ? colors.text : ""}
      >
        {word}
        {index < words.length - 1 ? " " : ""}
      </span>
    ));
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-18">
      <div className="order-2 md:order-1 md:max-w-105 space-y-4 lg:space-y-8">
        <span
          className={cn(
            "w-fit flex items-center border text-xs font-medium tracking-wide uppercase p-2 rounded-full",
            colors.bgSoft,
            colors.border,
            colors.textMuted,
          )}
        >
          <IconPointFilled size={12} className={cn("mr-1", colors.text)} />
          {badge}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold">
          {renderTitle(title, highlight)}
        </h2>

        <p className="text-sm text-muted-foreground">{description}</p>

        <ul className="flex items-center flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <li
              key={idx}
              className="px-3 py-2 text-[11px] text-muted-foreground rounded-full bg-accent-foreground border border-white/10"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            className={cn(
              "h-12 text-white rounded-full px-6 transition-colors ease-in-out duration-300",
              colors.button,
            )}
          >
            View Case Study
          </Button>

          <Button
            variant="outline"
            className="h-12 bg-accent-foreground border border-white/10 text-white rounded-full px-6 transition-colors ease-in-out duration-300"
          >
            <IconArrowLeft />
            Back
          </Button>
        </div>
      </div>

      <div className="order-1 md:order-2 md:w-full rounded-md md:rounded-2xl overflow-hidden">
        <img loading="lazy" src={image} alt={title} className="w-full h-full" />
      </div>
    </div>
  );
};
