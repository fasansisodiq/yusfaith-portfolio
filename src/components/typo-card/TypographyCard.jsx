"use client";

import { TypographyProvider } from "../../hooks/TypographyContext";
import ColorPalette from "./ColorPlalette";
import FontDescription from "./FontDescription";
import FontHeader from "./FontHeader";
import FontWeights from "./FontWeights";
import IconGrid from "./IconGrid";

export default function TypographyCard({
  fontName,
  description,
  headerTitle,
  headerSubtitle,
  alphabet,
  weights,
  icons,
  colors,
}) {
  return (
    <TypographyProvider
      value={{
        fontName,
        description,
        headerTitle,
        headerSubtitle,
        alphabet,
        weights,
        icons,
        colors,
      }}
    >
      <div className="bg-black text-white p-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <FontHeader />
          <hr className="border-gray-700 my-6" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <FontDescription />
            <FontWeights />
          </div>

          <hr className="border-gray-700 my-6" />

          <IconGrid />
          <ColorPalette />
        </div>
      </div>
    </TypographyProvider>
  );
}
