import { SectionTitle } from "../ui/section-title";

const LearnCard = ({ title, subtitle, description, children }) => {
  return (
    <section className="pt-24 lg:pt-38">
      <SectionTitle
        title={title}
        subtitle={subtitle}
        text={description}
        className="[&>p]:max-w-170 mb-6"
      />

      <div>{children}</div>
    </section>
  );
};

export default LearnCard;
