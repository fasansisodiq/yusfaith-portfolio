//pages
import RootLayout from "./layout/RootLayout";
import LandingPage from "./Pages/landing";

// React Router Setup
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Ebute from "./pages/ebute";
// import { usePortState } from "./hooks/PortfolioContext";

const privateRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="/ebute" element={<Ebute />} />
    </Route>
  )
);

function App() {
  // const { showPageNav, searchQuery } = usePortState();

  return (
    <>
      <RouterProvider router={privateRoutes} />
      {/* <div className="w-full h-full flex flex-col px-5 md:px-10 lg:px-20 xl:px-30">
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
      </div> */}
    </>
  );
}

export default App;
