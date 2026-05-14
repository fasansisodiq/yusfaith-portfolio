//components
import Overview from "./overview/Overview";
import Challenge from "./challenge/Challenge";
import UseCard from "../../components/use-card/UseCard";

//database
import { traceData } from "../../db/database";
import LearnCard from "../../components/learn-card/LearnCard";
import WireFrame from "./wireframe/WireFrame";
import Learn from "./learn/Learn";
import Typography from "./typo/Typography";

const Tracceability = () => {
  console.log(traceData.images);
  return (
    <div>
      <Overview {...traceData.overview} />
      <Challenge {...traceData.challenge} />
      <UseCard {...traceData.aims} />
      <UseCard {...traceData.userInterface} />
      <UseCard {...traceData.userFlow} />
      <Typography />
      <WireFrame {...traceData.wireframe} />
      <Learn />
    </div>
  );
};

export default Tracceability;
