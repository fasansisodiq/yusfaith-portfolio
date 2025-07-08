//images
import EbuteDashboard from "../assests/images/EbuteDashboard.png";
import aimsImg from "../assests/images/eBute-App-Homepage.png";
import ebuteDashboard_two from "../assests/images/EbuteDashboard_Two.png";
import flowchart from "../assests/images/Flowchart.png";
import traceImg from "../assests/images/TraceImg.png";
import traceHome from "../assests/images/Traceability_homepage.png";
import traceDash from "../assests/images/Traceability_dashboard.png";
import img1 from "../assests/wireframe/Home-screen.png";
import img2 from "../assests/wireframe/Payment-details.png";
import img3 from "../assests/wireframe/payment-success-screen.png";
import img4 from "../assests/wireframe/Transfer-other-banks.png";
import img5 from "../assests/wireframe/Transfer-zebrra-wallet.png";
import terminalIntro from "../assests/terminalmgt/terminal_intro.png";
import terminalAims from "../assests/terminalmgt/terminal_aims.png";
import terminalUser from "../assests/terminalmgt/terminal_user.png";
//icons
import { FaQuoteLeft } from "react-icons/fa6";

//////////////////////////////////////////////////////////////////////
////// This section contains the data for the Ebute project page//////
//////////////////////////////////////////////////////////////////////
export const ebuteData = {
  intro: {
    title: "Ebute",
    description: "Optimizing Container Terminal Operations",
    image: EbuteDashboard,
    imageAlt: "Ebute App",
  },
  challenges: {
    title: "The Challenge",
    description:
      "Container terminals often face the following operational challenges:",
    challenges: [
      {
        title: "Inefficient Use of Space",
        description:
          "Limited container space is often mismanaged due to lack of real-time tracking.",
      },
      {
        title: "Manual Yard Operations",
        description:
          "Dependence on manual processes leads to delays, inaccuracies, and increased operational costs.",
      },
      {
        title: "Fragmented Communication",
        description:
          "Customers, terminal management, and administrative teams struggle with misaligned or delayed updates, hampering overall productivity.",
      },
    ],
    conclusion:
      "These issues motivated the development of EBUTE, a centralized digital platform designed to improve container space utilization, optimize yard operations, and enhance communication between stakeholders.",
  },
  aims: {
    title_one: "Project Aims and Objectives",
    description:
      "The aim of this project was to design a digital platform that streamlines operations at container terminals, addressing inefficiencies in yard management and improving productivity for all stakeholders.",
    image: aimsImg,
    imageAlt: "Ebute App Aims and Objectives",
  },
  userInterface: {
    title_one: "Users Interface",
    title_two: "for Administrators",
    image: ebuteDashboard_two,
  },
  userFlow: {
    title_one: "User Flow",
    description:
      "Creating user flow for the application set out the paths users will follow in order to achieve their goals and visualize how the user is expected to move through the EBUTE App.",
    image: flowchart,
  },
  typography: {
    fontName: "Montserrat",
    description:
      "Montserrat is a geometric sans-serif typeface designed by Argentine graphic designer Julieta Ulanovsky and released in 2011. It was inspired by posters, signs, and painted windows from the first half of the twentieth century, seen in the historic Montserrat neighbourhood of Buenos Aires.",
    fontFamily: "Montserrat, sans-serif",
    colors: [
      { hex: "#030080" },
      { hex: "#FFFFFF" },
      { hex: "#EB5017" },
      { hex: "#EEEEEE" },
    ],
  },
  learnings: {
    title: "Achievements and Learnings",
    description: `
      <p>
        This project marked the very first task I undertook upon joining Ebute Truck Management App.
        Looking back at the design now, I’m filled with gratitude for how far I’ve come and proud of
        the work, despite its imperfections.
      </p>

      <p>
        One of the most valuable lessons I gained from this experience was the importance of time management.
      </p>

      <p>
        That experience taught me a lot about planning, prioritizing, and managing expectations—
        skills that have been crucial in every project since.
      </p>
    `,
  },
};
//////////////////////////////////////////////////////////////////////////////
////// This section contains the data for the Traceability project page//////
/////////////////////////////////////////////////////////////////////////////
export const traceData = {
  overview: {
    title: "Project Overview",
    description:
      "The Traceability App is designed to help businesses, especially within the agricultural and food industries, monitor and track products across the supply chain—from production to delivery. It ensures transparency, accountability, and efficiency by providing real-time data and digital records.",
    image: traceImg,
    imageAlt: "Traceability App",
  },
  challenge: {
    title: "The Challenge",
    description:
      "Traditional traceability methods are paper-based or fragmented, making it difficult to trace the origin or journey of a product. This often leads to:",
    challenges: [
      {
        title: "Inaccurate or lost data",
        description:
          "This is an answer to a frequently asked question. A couple more words to specify the subject further, provide more details and make sure the user understands everything.",
      },
      {
        title: "Poor visibilty in supply chain",
        description:
          "Fragmented tracking tools lead to lack of insight. This limits transparency and makes it harder for businesses to detects bottlenecks, monitor product status or respond quickly to disruptions",
      },
      {
        title: "Increased chances of product recalls",
        description:
          "Without reliable traceability, identifying and isolating defective and contaminated products becomes time-consuming. This delay can escalate risks and increase recall costs.",
      },
      {
        title: "Regulatory non-compliance",
        description:
          " Many industries require detailed traceability to meet safety and quality regulations. Inadequate systems can result in voilation, fines and reputational damage due to failure to meet legal standards.",
      },
    ],
  },
  aims: {
    title_one: "Project aims and objectives",
    description:
      "The aim of this project was to design a digital platform that streamlines operations at container terminals, addressing inefficiencies in yard management and improving productivity for all stakeholders.",
    image: traceHome,
  },
  userInterface: {
    title_one: "Users Interface",
    title_two: "for Administrators",
    image: traceDash,
  },
  userFlow: {
    title_one: "User flow",
    description:
      "Creating user flow for the application set out the paths users will follow in order to achieve their goals and visualize how the users is expected to move through the EBUTE App",
    image: flowchart,
  },
  typography: {
    fontName: "Urbanist",
    description:
      "Urbanist is a modern, geometric sans-serif typeface designed with clarity and versatility in mind.",
    fontFamily: "Urbanist, sans-serif",
    colors: [
      { hex: "#030080" },
      { hex: "#EB5017" },
      { hex: "#FFFFFF" },
      { hex: "#EEEEEE" },
    ],
  },
  wireframe: {
    title: "Wireframes",
    images: [img1, img2, img3, img4, img5],
  },

  learnings: {
    title: "Achievements and Learnings",
    description: `
     <p>This project marked the very first task I undertook upon joining Ebute truck management App. Looking back at the design now, I’m filled with gratitude for how far I’ve come and proud of the work, despite its imperfections.</p>

    <p>One of the most valuable lessons I gained from this experience was the importance of time management.</p>

    <p>That experience taught me a lot about planning, prioritizing, and managing expectations, Skills that have been crucial in every project since.</p>
    `,
  },
};

//////////////////////////////////////////////////////////////////////////
////// This section contains the data for the Terminal project page//////
////////////////////////////////////////////////////////////////////////
export const terminalData = {
  overview: {
    title: "Project Overview",
    description:
      "The project aimed to replace fragmented workflows with an integrated platform that supports departments such as finance, inventory, sales, HR, and operations.",
    image: terminalIntro,
    imageAlt: "Terminal Management App",
  },
  challenge: {
    title: "The Challenge",
    description: "Here are 4 common challenges affecting ERP systems:",
    challanges: [
      {
        icon: FaQuoteLeft,
        quote: "User Resistance to Change",
      },
      {
        icon: FaQuoteLeft,
        quote: "High Implementation Costs",
      },
      {
        icon: FaQuoteLeft,
        quote: "Data Migration Issues",
      },
      {
        icon: FaQuoteLeft,
        quote: "Customization and Integration Difficulties",
      },
    ],
  },
  aims: {
    title_one: "Project aims and objectives",
    description:
      "To design and implement a centralized ERP system that enhances efficiency, accuracy, and collaboration across all departments within Starlink Global Ideal Limited.",
    image: terminalAims,
  },
  userInterface: {
    title_one: "Users Interface",
    title_two: "for Administrators",
    image: terminalUser,
  },
  userFlow: {
    title_one: "User flow",
    description:
      "Creating user flow for the application set out the paths users will follow in order to achieve their goals and visualize how the users is expected to move through the EBUTE App",
    image: flowchart,
  },
  typography: {
    fontName: "Inter",
    description:
      "Inter is a modern, geometric sans-serif typeface designed with clarity and versatility in mind.",
    fontFamily: "Inter, sans-serif",
    colors: [
      { hex: "#030080" },
      { hex: "#FFFFFF" },
      { hex: "#EB5017" },
      { hex: "#EEEEEE" },
    ],
  },
  learnings: {
    title: "Achievements and Learnings",
    description: `
     <p>This project marked the very first task I undertook upon joining Ebute truck management App. Looking back at the design now, I’m filled with gratitude for how far I’ve come and proud of the work, despite its imperfections.</p>

    <p>One of the most valuable lessons I gained from this experience was the importance of time management.</p>

    <p>That experience taught me a lot about planning, prioritizing, and managing expectations, Skills that have been crucial in every project since.</p>
    `,
  },
};
