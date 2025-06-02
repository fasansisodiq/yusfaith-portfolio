// import React from "react";
import ContactMe from "../../components/features/contact-me/ContactMe";
// import Projects from "./projects/Projects";
import Hero from "./hero/Hero";
import SearchBox from "../../components/seachbar/SearchBox";
import AboutMe from "./about-me/AboutMe";
import TestimonialCard from "./our-clients/TestimonialCard";
import FloatingNav from "../../components/ui/FloatingNav";
import { ProjectList } from "./projects";

const LandingPage = () => {
  return (
    <div className="text-white">
      <Hero />
      <SearchBox />
      {/* <Projects /> */}
      <ProjectList />
      <AboutMe />
      <TestimonialCard />
      <ContactMe />
      <FloatingNav />
      {/* <Profile /> */}
      {/* {showPageNav && <PageNavigation />} */}

      {/* <div className={`${searchQuery && "target"} `}> */}

      {/* </div> */}
      {/* <div className={`${searchQuery && "target"} `}> */}
      {/* </div> */}
      {/* <div className={`${searchQuery && "target"} `}> */}

      {/* </div> */}
      {/* <div className={`${searchQuery && "target"} `}> */}

      {/* </div> */}
    </div>
  );
};

export default LandingPage;
