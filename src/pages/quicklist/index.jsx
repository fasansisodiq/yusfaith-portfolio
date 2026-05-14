import IntroCard from "../../components/intro-card/IntroCard";
import { quicklistData } from "../../db/database";
import Challenges from "./challenge/Challenges";
import LearnCard from "../../components/learn-card/LearnCard";
import Overview from "./overview/Overview";
import Aims from "./aims/Aims";
import Learn from "./learn/Learn";
import Typography from "./typo/Typography";

const Quicklist = () => {
  return (
    <div>
      <Overview />
      <Challenges />
      <Aims />
      <Typography />
      <Learn />
    </div>
  );
};

export default Quicklist;
