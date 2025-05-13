import { useTypography } from "../../hooks/TypographyContext";

export default function FontWeights() {
  const { weights } = useTypography();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {weights.map((weight, index) => {
        const fontWeight =
          weight === "Regular"
            ? "font-normal"
            : weight === "Medium"
            ? "font-medium"
            : weight === "Semi Bold"
            ? "font-semibold"
            : "font-bold";

        return (
          <div key={index} className="flex justify-center">
            <p
              className={`flex flex-col text-4xl md:text-8xl lg:text-[16rem] text-center  ${fontWeight}`}
            >
              <span className="text-sm mb-4">{weight}</span>
              <span className="bg-black">A</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
