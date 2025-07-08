import React from "react";
import IntroCard from "../../components/intro-card/IntroCard";
import UseCard from "../../components/use-card/UseCard";
import TypographyCard from "../../components/typo-card/TypographyCard";
import { terminalData } from "../../db/database";
import Challenges from "./challenges/Challenges";
import LearnCard from "../../components/learn-card/LearnCard";

const TerminalManagement = () => {
  return (
    <div>
      <IntroCard {...terminalData.overview} />
      <Challenges />
      <UseCard {...terminalData.aims} />
      <UseCard {...terminalData.userInterface} />
      <UseCard {...terminalData.userFlow} />
      <TypographyCard {...terminalData.typography} />
      <LearnCard {...terminalData.learnings} />
    </div>
  );
};

export default TerminalManagement;
