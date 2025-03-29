import { createContext, useCallback, useReducer, useState } from "react";


const ActiveClassContext = createContext(null)
const initialState = {
    active: false
}
function reducer(state,action) {
switch (action.type) {
    case "button/active":
        return {
            ...state,
            active : true
        }

    default:
        throw new Error("unknown action")
}
}
export function ActiveClassProvider ({children}) {
    const [{active},dispatch] = useReducer(reducer, initialState)
    const[isActive, setIsActive] = useState(false)
  const onIsActive = useCallback(function handleIsActive(){
   setIsActive(true)
  },[]) 
  
    return <ActiveClassContext.Provider value={{isActive,onIsActive}}>{children}</ActiveClassContext.Provider>
}

export default ActiveClassContext
 