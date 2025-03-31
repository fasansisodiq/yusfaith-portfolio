import Navbar from "./components/page-navigation/Navbar";
import ProjectList from "./components/features/projects/ProjectList";
import { Element } from "react-scroll";
import QuotesContainer from "./components/our-clients/QuotesContainer";
import AboutMe from "./components/features/about-me/AboutMe";
import ContactMe from "./components/features/contact-me/ContactMe";
import Profile from "./components/profile/Profile";
import PageNavigation from "./components/page-navigation/PageNavigation";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showPageNav, setShowPageNav] = useState(false);
  function handleShowPageNav() {
    setShowPageNav(true);
  }

  const searchTarget = document.querySelectorAll(".target");
  function searchOnPage() {
    for (let i = 0; i < searchTarget.length; i++) {
      searchTarget[i].textContent
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
        ? searchTarget[i].classList.remove("hidden")
        : searchTarget[i].classList.add("hidden");
    }
  }

  // A little delay
  let typingTimer;
  let typeInterval = 300;
  function keyUp() {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(searchOnPage, typeInterval);
  }

  function handleClearSearch() {
    setSearchQuery("");
  }

  const onkeyPress = useCallback(
    (e) => {
      e.preventDefault();

      if (e.ctrlKey && e.key === "k") {
        setShowPageNav(true);
      }
    },
    [setShowPageNav]
  );

  useEffect(() => {
    document.addEventListener("keydown", onkeyPress);

    return () => {
      document.removeEventListener("keydown", onkeyPress);
    };
  }, [onkeyPress]);

  return (
    <div
      id="app"
      className=" element w-screen h-full  bg-slate-950 bg-scroll font-montserrat "
    >
      <div className="w-full h-full flex flex-col lg:gap-15  lg:px-50">
        <Navbar onShowPageNav={handleShowPageNav} />
        <div className="flex flex-col justify-between mt-20">
          <div className=" flex flex-col justify-center items-start  h-screen ">
            <Profile />
            {showPageNav && (
              <PageNavigation
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                keyUp={keyUp}
                onClearSeach={handleClearSearch}
              />
            )}
          </div>

          <div className={`${searchQuery && "target"}`}>
            <Element name="aboutMe">
              <AboutMe />
            </Element>
          </div>
          <div className={`${searchQuery && "target"}`}>
            <QuotesContainer />
          </div>
          <div className={`${searchQuery && "target"}`}>
            <Element name="ContactMe">
              <ContactMe />
            </Element>
          </div>
          <div className={`${searchQuery && "target"}`}>
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
