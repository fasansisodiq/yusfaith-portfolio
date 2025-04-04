import Navbar from "./components/page-navigation/Navbar";
import ProjectList from "./components/features/projects/ProjectList";
import { Element } from "react-scroll";
import QuotesContainer from "./components/our-clients/QuotesContainer";
import AboutMe from "./components/features/about-me/AboutMe";
import ContactMe from "./components/features/contact-me/ContactMe";
import Profile from "./components/profile/Profile";
import PageNavigation from "./components/page-navigation/PageNavigation";
import { usePortState } from "./hooks/PortfolioContext";

function App() {
  const { showPageNav, searchQuery } = usePortState();

  return (
    <div
      id="app"
      className=" element w-screen h-full  bg-slate-950 bg-scroll font-montserrat "
    >
      <div className="w-full h-full flex flex-col px-5 md:px-10 lg:px-20 xl:px-30">
        <Navbar />
        <div className="flex flex-col  mt-20">
          <div className=" flex flex-col justify-center items-center  h--fit ">
            <Profile />
            {showPageNav && <PageNavigation />}
          </div>

          <div className={`${searchQuery && "target"} `}>
            <Element name="aboutMe">
              <AboutMe />
            </Element>
          </div>
          <div className={`${searchQuery && "target"} `}>
            <QuotesContainer />
          </div>
          <div className={`${searchQuery && "target"} `}>
            <Element name="ContactMe">
              <ContactMe />
            </Element>
          </div>
          <div className={`${searchQuery && "target"} `}>
            <Element name="projects">
              <ProjectList />
            </Element>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
