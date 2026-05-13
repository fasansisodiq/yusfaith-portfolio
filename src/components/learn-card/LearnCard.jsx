import { SectionTitle } from "../ui/section-title";

const LearnCard = ({ title, subtitle, description, children }) => {
  return (
    <div>
      <SectionTitle
        title={title}
        subtitle={subtitle}
        text={description}
        className="[&>p]:max-w-170 mb-6"
      />

      <div>{children}</div>
    </div>
  );
};

export default LearnCard;
