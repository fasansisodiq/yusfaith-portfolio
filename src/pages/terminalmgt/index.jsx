import React from "react";
import IntroCard from "../../components/intro-card/IntroCard";
import UseCard from "../../components/use-card/UseCard";
import TypographyCard from "../../components/typo-card/TypographyCard";
import { terminalData } from "../../db/database";
import Challenges from "./challenges/Challenges";
import Overview from "./overview/Overview";
import Learn from "./learn/Learn";

const TerminalManagement = () => {
  return (
    <div>
      <Overview {...terminalData.overview} />
      <Challenges />
      <UseCard {...terminalData.aims} />
      <UseCard {...terminalData.userInterface} />
      <UseCard {...terminalData.userFlow} />
      <TypographyCard {...terminalData.typography} />
      <Learn />
    </div>
  );
};

export default TerminalManagement;
