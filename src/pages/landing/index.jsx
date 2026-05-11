// import React from "react";
import ContactMe from "../../components/features/contact-me/ContactMe";
// import Projects from "./projects/Projects";
import Hero from "./hero/Hero";
import AboutMe from "./about-me/AboutMe";
import TestimonialCard from "./our-clients/TestimonialCard";
// import FloatingNav from "../../components/ui/FloatingNav";
import { ProjectList } from "./projects";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <ProjectList />
      <AboutMe />
      <TestimonialCard />
      <ContactMe />
      {/* <FloatingNav /> */}
    </div>
  );
};

export default LandingPage;
