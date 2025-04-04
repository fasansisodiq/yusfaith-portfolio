import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
const PortfolioContext = createContext();
function PortStateProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showPageNav, setShowPageNav] = useState(false);
  function handleShowPageNav() {
    setShowPageNav(!showPageNav);
  }

  const searchTarget = document.querySelectorAll(".target");
  const searchOnPage = useCallback(
    function searchOnPage() {
      for (let i = 0; i < searchTarget.length; i++) {
        searchTarget[i].textContent
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
          ? searchTarget[i].classList.remove("hidden")
          : searchTarget[i].classList.add("hidden");
      }
    },
    [searchQuery, searchTarget]
  );

  // A little delay

  useEffect(
    function keyUp() {
      let typingTimer;
      let typeInterval = 300;
      clearTimeout(typingTimer);
      typingTimer = setTimeout(searchOnPage, typeInterval);
    },
    [searchOnPage]
  );

  function handleClearSearch() {
    setSearchQuery("");
  }
  const callbackRef = useRef(null);
  useLayoutEffect(() => {
    callbackRef.current = () => setShowPageNav(!showPageNav);
  });
  const handleKeyUp = useCallback((event) => {
    event.preventDefault();
    if (event.repeat) {
      return null;
    }

    if (event.key === "k" || (event.ctrlKey && event.key === "k")) {
      if (
        event.target instanceof HTMLTextAreaElement ||
        (event.target instanceof HTMLInputElement &&
          (!event.target.type ||
            event.target.type === "text" ||
            event.target.type === "email")) ||
        event.target.isContentEditable
      ) {
        return event.stopPropagation();
      }
      return callbackRef.current(event);
    } else if (event.key === "Escape" || event.key === "x") {
      return setShowPageNav(false), setSearchQuery("");
    } else return;
  }, []);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp]);
  return (
    <PortfolioContext.Provider
      value={{
        showPageNav,
        searchQuery,
        setShowPageNav,
        setSearchQuery,
        onShowPageNav: handleShowPageNav,
        handleClearSearch,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}
function usePortState() {
  const context = useContext(PortfolioContext);
  if (context === undefined)
    throw new Error("usePortState was used outside the PortStateProvider");

  return context;
}

export { PortStateProvider, usePortState };
