import { useTypography } from "../../hooks/TypographyContext";

export default function FontDescription() {
  const { description, alphabet } = useTypography();

  return (
    <div className="space-y-6">
      <p className="text-base lg:text-2xl leading-relaxed">{description}</p>

      <div className="space-y-2">
        <p className="text-sm lg:text-lg">{alphabet.uppercase}</p>
        <p className="text-sm lg:text-lg">{alphabet.lowercase}</p>
        <p className="text-sm lg:text-lg">{alphabet.numbers}</p>
      </div>
    </div>
  );
}
