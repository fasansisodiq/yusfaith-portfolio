import { createContext, useContext, useReducer, useRef } from "react";


const ScrollContext = createContext()
const scrollInitial = {
    scroll: null
}
function scrollReducer(state,action) {
switch (action.type) {
    case "scrollTOView":
        return {
            ...state,
            scroll : action.payload
        }

    default:
        throw new Error("unknown action")
}
}
function ScrollProvider ({children}) {
    
    const myRef = useRef(null)
    const [{scroll},dispatch] = useReducer(scrollReducer, scrollInitial)
  function handleScroll(){
     myRef.current.scrollIntoView({behavior: "smooth"})
  }
  
    return (<ScrollContext.Provider value={{scroll,myRef,onScroll :handleScroll,  scrollTo}}>{children}</ScrollContext.Provider>)
}

function useScroll () {
   const context = useContext(ScrollContext)
   if(context === undefined) throw new Error("useScroll was used outside ScrollContext")
}
export {ScrollProvider, useScroll}
 