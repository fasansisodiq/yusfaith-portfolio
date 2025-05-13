"use client";

import { useTypography } from "../../hooks/TypographyContext";
import {
  LuHouse,
  LuAlignJustify,
  LuCircleArrowLeft,
  LuTruck,
  LuUser,
  LuBanknote,
  LuSettings,
} from "react-icons/lu";

export default function IconGrid() {
  const { icons } = useTypography();

  // Map icon names to Lucide components
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Transfers":
        return <LuHouse className="size-6 lg:size-8" />;
      case "Requests":
        return <LuAlignJustify className="size-6 lg:size-8" />;
      case "In Exit":
        return <LuCircleArrowLeft className="size-6 lg:size-8" />;
      case "Entry Permit":
        return <LuTruck className="size-6 lg:size-8" />;
      case "Users":
        return <LuUser className="size-6 lg:size-8" />;
      case "Payment":
        return <LuBanknote className="size-6 lg:size-8" />;
      case "Settings":
        return <LuSettings className="size-6 lg:size-8" />;
      default:
        return <div className="size-6 lg:size-8" />;
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 my-8">
      {icons.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-md text-black p-4 flex flex-col justify-between h-24"
        >
          <div className="mb-2 text-[#030080]">{getIcon(item.name)}</div>
          <span className="text-xs lg:text-md font-semibold tracking-wide">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}
