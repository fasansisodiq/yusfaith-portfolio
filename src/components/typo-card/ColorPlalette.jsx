import { useTypography } from "../../hooks/TypographyContext";

export default function ColorPalette() {
  const { colors } = useTypography();

  const colorMap = {
    "#FFFFFF": "text-black",
    "#EEEEEE": "text-black",
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
      {colors.map((color, index) => {
        const textColor = colorMap[color.hex] || "text-gray";
        return (
          <div
            key={index}
            className="h-16 rounded-md flex items-center justify-center"
            style={{ backgroundColor: color.hex }}
          >
            <span
              className={`font-mono text-lg font-semibold ${
                textColor ? textColor : "text-white"
              }`}
            >
              {color.hex}
            </span>
          </div>
        );
      })}
    </div>
  );
}
