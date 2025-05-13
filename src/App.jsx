<<<<<<< Updated upstream
import Navbar from "./components/page-navigation/Navbar";
import ProjectList from "./components/features/projects/ProjectList";
import { Element } from "react-scroll";
import QuotesContainer from "./components/our-clients/QuotesContainer";
import AboutMe from "./components/features/about-me/AboutMe";
import ContactMe from "./components/features/contact-me/ContactMe";
import Profile from "./components/profile/Profile";
import PageNavigation from "./components/page-navigation/PageNavigation";
import { usePortState } from "./hooks/PortfolioContext";
=======
import RootLayout from "./layout/RootLayout";
import LandingPage from "./Pages/landing";
import Ebute from "./pages/ebute";

// React Router Setup
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// import { usePortState } from "./hooks/PortfolioContext";

const privateRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="/ebute" element={<Ebute />} />
    </Route>
  )
);
>>>>>>> Stashed changes

function App() {
  const { showPageNav, searchQuery } = usePortState();

  return (
    <div
      id="app"
      className=" element w-screen h-full  bg-black bg-scroll font-montserrat "
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
