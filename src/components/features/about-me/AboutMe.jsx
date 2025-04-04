import { usePortState } from "../../../hooks/PortfolioContext";
import Card from "../../utils/Card";

function AboutMe() {
  const { showPageNav } = usePortState();
  return (
    <div
      className={` ${
        showPageNav ? "h-screen" : "h-fit "
      } flex flex-col justify-center items-center gap-5 text-white sm:text-2xl md:text-3xl lg:text-4xl `}
    >
      <h1 className="self-start  font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
        About me
      </h1>
      <span className="pb-5">
        I'm Abdul-Raheem Yuusuf, UI/UX designer with experience in designing
        user interfaces, creating prototypes, and conducting user research. I
        have a creative approach to problem-solving and loves collaborating with
        developers, and other designers.
      </span>
      <div className="flex justify-between items-center w-full">
        <Card num={2} txt={"years experience"} />
        <Card num={4} txt={"projects experience"} />
        <Card num={"50+"} txt={"positive reviews"} />
      </div>
    </div>
  );
}

export default AboutMe;
