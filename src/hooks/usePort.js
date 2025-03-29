import { useContext } from "react"
import ActiveClassContext from "./ActiveClassProvider"

function usePort () {
   const context = useContext(ActiveClassContext)
   if(context === undefined) throw new Error("usePort was used outside ActiveClassProvider")
}
export default usePort