//components
// import IntroSection from "./intro-section/IntroSection";
import Challenges from "./challenge/Challenges";
import UseCard from "../../components/use-card/UseCard";
import TypographyCard from "../../components/typo-card/TypographyCard";
import LearnCard from "../../components/learn-card/LearnCard";
//utilities
import { ebuteData } from "../../db/database";
import IntroCard from "../../components/intro-card/IntroCard";

const Ebute = () => {
  return (
    <div>
      <IntroCard {...ebuteData.intro} />
      <Challenges {...ebuteData.challenges} />
      <UseCard {...ebuteData.aims} />
      <UseCard {...ebuteData.userInterface} />
      <UseCard {...ebuteData.userFlow} />
      <TypographyCard {...ebuteData.typography} />
      <LearnCard {...ebuteData.learnings} />
    </div>
  );
};

export default Ebute;
