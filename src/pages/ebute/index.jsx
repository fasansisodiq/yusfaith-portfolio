//components
// import IntroSection from "./intro-section/IntroSection";
import Challenges from "./challenge/Challenges";

//utilities
import { ebuteData } from "../../db/database";
import IntroCard from "../../components/intro-card/IntroCard";
import Aims from "./aims/Aims";
import UserInterface from "./user-interface/UserInterface";
import UserFlow from "./userflow/UserFlow";
import Learn from "./learn/Learn";
import Typography from "./typo/Typography";

const Ebute = () => {
  return (
    <div>
      <IntroCard {...ebuteData.intro} />
      <Challenges />
      <Aims />
      <UserInterface />
      <UserFlow />
      <Typography />
      <Learn />
    </div>
  );
};

export default Ebute;
