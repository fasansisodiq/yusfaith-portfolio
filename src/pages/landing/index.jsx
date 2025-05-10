import React from "react";
import ContactMe from "../../components/features/contact-me/ContactMe";
import Projects from "./projects/Projects";
import Hero from "./hero/Hero";
import SearchBox from "../../components/seachbar/SearchBox";
import AboutMe from "./about-me/AboutMe";
import TestimonialCard from "./our-clients/TestimonialCard";

const LandingPage = () => {
  return (
    <div className="text-white">
      <Hero />
      <SearchBox />
      <Projects />
      <AboutMe />
      <TestimonialCard />
      <ContactMe />
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
