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
import Aims from "./aims/Aims";
import UserInterface from "./user-interface/UserInterface";
import UserFlow from "./flow/UserFlow";

const Tracceability = () => {
  return (
    <div>
      <Overview {...traceData.overview} />
      <Challenge />
      <Aims />
      <UserInterface />
      <UserFlow />
      <Typography />
      <WireFrame {...traceData.wireframe} />
      <Learn />
    </div>
  );
};

export default Tracceability;
