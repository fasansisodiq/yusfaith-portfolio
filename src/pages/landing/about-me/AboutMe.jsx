import glassTexture from "../../../assests/backgrounds/glassTexture.png";
import { ExperienceCounter } from "../../../components/ui/experience-counter";
import { SectionTitle } from "../../../components/ui/section-title";

const skills = [
  "UI Design",
  "UX Research",
  "Prototyping",
  "Figma",
  "Design Systems",
  "Interaction Design",
  "Mobile Design",
  "Web Design",
];

function AboutMe() {
  return (
    <section id="aboutMe" className="w-full h-fit flex flex-col gap-5 py-24">
      <SectionTitle title="About Me" subtitle="Background" className="mb-12" />

      <div className="flex flex-col lg:flex-row items-start justify-between gap-x-16 gap-y-6">
        <div className="lg:max-w-[43.525rem]">
          <p className="pb-5 text-sm text-white/70">
            I'm Abdul-Raheem Yuusuf, UI/UX designer with experience in designing
            user interfaces, creating prototypes, and conducting user research.
            I have a creative approach to problem-solving and loves
            collaborating with developers, and other designers.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="flex-grow w-33 inline-flex items-center justify-center bg-card-foreground border border-white/10 px-4 py-2 rounded-full text-white/70 text-center text-xs font-normal capitalize whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <ExperienceCounter
          wrapperClassName="w-full flex-col lg:flex-row gap-3"
          className="bg-card-foreground border border-white/10 p-6 rounded-2xl w-full lg:max-w-[9.659rem] whitespace-nowrap"
        />
      </div>
    </section>
  );
}

export default AboutMe;
