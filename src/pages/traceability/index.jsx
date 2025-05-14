//components
import Overview from "./overview/Overview";
import Challenge from "./challenge/Challenge";
import UseCard from "../../components/use-card/UseCard";
import TypographyCard from "../../components/typo-card/TypographyCard";

//database
import { traceData } from "../../db/database";
import LearnCard from "../../components/learn-card/LearnCard";
import WireFrame from "./wireframe/WireFrame";

const Tracceability = () => {
  console.log(traceData.images);
  return (
    <div>
      <Overview {...traceData.overview} />
      <Challenge {...traceData.challenge} />
      <UseCard {...traceData.aims} />
      <UseCard {...traceData.userInterface} />
      <UseCard {...traceData.userFlow} />
      <TypographyCard {...traceData.typography} />
      <WireFrame {...traceData.wireframe} />
      <LearnCard {...traceData.learnings} />
    </div>
  );
};

export default Tracceability;
