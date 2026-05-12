import { SectionTitle } from "../../../components/ui/section-title";
import userflow from "../../../assests/images/userflow.png";

const UserFlow = () => {
  return (
    <section className="pt-24">
      <SectionTitle
        title="How Users Move Through EBUTE"
        subtitle="USER FLOW"
        text="Creating user flow for the application set out the paths users will follow in order to achieve their goals and visualize how the user is expected to move through the EBUTE App."
        className="mb-12 [&>p]:max-w-145"
      />
      <div className="w-full rounded-2xl p-6 bg-accent-foreground">
        <span className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-wider ml-2 md:ml-4 mb-4">
          Application Flow Diagram
        </span>
        <img loading="lazy" decoding="async" src={userflow} alt="User Flow" />
      </div>
    </section>
  );
};

export default UserFlow;
