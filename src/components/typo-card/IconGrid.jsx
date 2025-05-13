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
        return <LuHouse className="h-6 w-6" />;
      case "Requests":
        return <LuAlignJustify className="h-6 w-6" />;
      case "In Exit":
        return <LuCircleArrowLeft className="h-6 w-6" />;
      case "Entry Permit":
        return <LuTruck className="h-6 w-6" />;
      case "Users":
        return <LuUser className="h-6 w-6" />;
      case "Payment":
        return <LuBanknote className="h-6 w-6" />;
      case "Settings":
        return <LuSettings className="h-6 w-6" />;
      default:
        return <div className="h-6 w-6" />;
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 my-8">
      {icons.map((item, index) => (
        <div
          key={index}
          className="bg-white text-black rounded-md p-4 flex flex-col items-center justify-center h-24"
        >
          <div className="mb-2">{getIcon(item.name)}</div>
          <p className="text-xs text-center">{item.name}</p>
        </div>
      ))}
    </div>
  );
}
