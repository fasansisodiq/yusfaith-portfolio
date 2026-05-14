import { HeroCard } from "../../../components/hero-card";
import heroImg from "../../../assests/images/honiyepe.png";

const data = {
  badge: "Community Platform",
  title: "Honrable Iyepe Digital Hub",
  highlight: {
    type: "last",
    count: 2,
  },
  description:
    "A multi-functional community management platform designed to digitize and scale the diverse services offered by a prominent community leader and educator — bridging the physical office with a global audience.",
  tags: ["UX Design", "Admin Dashboard", "Mobile App", "EdTech"],
  image: "heroImg",
};

const Overview = () => {
  return (
    <section className="w-full py-24">
      <HeroCard
        badge={data.badge}
        title={data.title}
        highlight={data.highlight}
        description={data.description}
        tags={data.tags}
        image={heroImg}
        color="green"
      />
    </section>
  );
};

export default Overview;
