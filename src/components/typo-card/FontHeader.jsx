import { useTypography } from "../../hooks/TypographyContext";

export default function FontHeader({ title, subtitle }) {
  const { headerTitle, headerSubtitle, fontName } = useTypography();

  // Use props if provided, otherwise fall back to context values
  const displayTitle =
    title || headerTitle || "TYPOGRAPHY, ICONOGRAPHY & COLORS";
  const displaySubtitle = subtitle || headerSubtitle || fontName;

  return (
    <div className="space-y-4 lg:space-y-8">
      <h3 className="text-md lg:text-lg tracking-wider text-gray-300">
        {displayTitle}
      </h3>
      <h4 className="text-2xl lg:text-5xl font-semibold uppercase tracking-wide">
        {displaySubtitle}
      </h4>
    </div>
  );
}
