import { useTypography } from "../../hooks/TypographyContext";

export default function ColorPalette() {
  const { colors } = useTypography();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
      {colors.map((color, index) => (
        <div
          key={index}
          className="h-16 rounded-md flex items-center justify-center"
          style={{ backgroundColor: color.hex }}
        >
          <p
            className={`font-mono text-lg ${
              color.hex === "#FFFFFF" ? "text-black" : "text-white"
            }`}
          >
            {color.hex}
          </p>
        </div>
      ))}
    </div>
  );
}
