import IntroCard from "../../components/intro-card/IntroCard";
import UseCard from "../../components/use-card/UseCard";
import TypographyCard from "../../components/typo-card/TypographyCard";
import { quicklistData } from "../../db/database";
import Challenges from "./challenges/Challenges";
import LearnCard from "../../components/learn-card/LearnCard";

const HonorableIyepe = () => {
  return (
    <div>
      <IntroCard {...quicklistData.overview} />
      <Challenges />
      <UseCard {...quicklistData.aims} />
      <UseCard {...quicklistData.userInterface} />
      <UseCard {...quicklistData.userFlow} />
      <TypographyCard {...quicklistData.typography} />
      <LearnCard {...quicklistData.learnings} />
    </div>
  );
};

export default HonorableIyepe;
