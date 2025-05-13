//images
import aimsImg from "../../assests/images/eBute-App-Homepage.png";
import ebuteDashboard_two from "../../assests/images/EbuteDashboard_Two.png";
import flowchart from "../../assests/images/Flowchart.png";
//components
import IntroSection from "./intro-section/IntroSection";
import Challenges from "./challenge/Challenges";
import UseCard from "../../components/use-card/UseCard";
import TypographyCard from "../../components/typo-card/TypographyCard";

const montserratData = {
  fontName: "MONTSERRAT",
  headerTitle: "TYPOGRAPHY, ICONOGRAPHY & COLORS",
  headerSubtitle: "MONTSERRAT",
  description:
    "Montserrat is a geometric sans-serif typeface designed by Argentine graphic designer Julieta Ulanovsky and released in 2011. It was inspired by posters, signs and painted windows from the first half of the twentieth century, seen in the historic Montserrat neighbourhood of Buenos Aires.",
  alphabet: {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789!@#$%^&*()",
  },
  weights: ["Regular", "Medium", "Semi Bold", "Bold"],
  icons: [
    { name: "Transfers", icon: "LuHouse" },
    { name: "Requests", icon: "align-justify" },
    { name: "In Exit", icon: "log-out" },
    { name: "Entry Permit", icon: "truck" },
    { name: "Users", icon: "users" },
    { name: "Payment", icon: "credit-card" },
    { name: "Settings", icon: "settings" },
  ],
  colors: [
    { hex: "#030080" },
    { hex: "#FFFFFF" },
    { hex: "#EB5017" },
    { hex: "#EEEEEE" },
  ],
};

const Ebute = () => {
  return (
    <div>
      <IntroSection />
      <Challenges />
      <UseCard
        title_one="Project Aims and Objectives"
        description="The aim of this project was to design a digital platform that streamlines operations at container terminals, addressing inefficiencies in yard management and improving productivity for all stakeholders."
        image={aimsImg}
        imageAlt="Ebute App Aims and Objectives"
      />
      <UseCard
        title_one="Users interface"
        title_two="for Administrators"
        image={ebuteDashboard_two}
      />
      <UseCard
        title_one="User Flow"
        description="Creating user flow for the application set out the paths users will follow in order to achieve their goals and visualize how the users is expected to move through the EBUTE App"
        image={flowchart}
      />
      <TypographyCard {...montserratData} />
    </div>
  );
};

export default Ebute;
