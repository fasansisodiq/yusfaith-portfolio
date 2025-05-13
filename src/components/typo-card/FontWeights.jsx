import { useTypography } from "../../hooks/TypographyContext";

export default function FontWeights() {
  const { weights } = useTypography();

  return (
    <div className="flex flex-col space-y-6">
      <div className="grid grid-cols-4 gap-4">
        {weights.map((weight, index) => (
          <div key={index} className="text-center">
            <p className="text-sm mb-4">{weight}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4">
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
              <span
                className={`text-4xl lg:text-[16rem] bg-black ${fontWeight}`}
              >
                A
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
