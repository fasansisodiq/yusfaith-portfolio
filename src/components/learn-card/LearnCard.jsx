import { SectionTitle } from "../ui/section-title";
import { cn } from "../../lib/utils";

const LearnCard = ({ title, subtitle, description, children, className }) => {
  return (
    <div>
      <SectionTitle
        title={title}
        subtitle={subtitle}
        text={description}
        className={cn("[&>p]:max-w-170 mb-6", className)}
      />

      <div>{children}</div>
    </div>
  );
};

export default LearnCard;
