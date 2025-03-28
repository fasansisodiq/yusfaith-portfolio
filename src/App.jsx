
import AboutMe from "./components/AboutMe"
import ContactMe from "./components/ContactMe"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Profile from "./components/Profile"
import ProjectList from "./components/ProjectList"
import { ScrollProvider } from "./hooks/CustomHook"
import {Element} from 'react-scroll';

function App() {
 
  return (
    
     <ScrollProvider>
       <div id="app" className="element w-screen h-full  bg-slate-950 bg-scroll  ">
      <div className="w-full h-full flex flex-col lg:gap-15 bg-slate-950 px-50">
        <Header/>
        <div className="flex flex-col justify-between lg:justify-evenly items-start  h-screen">
          <Profile/>
          <Footer />
        </div>
      
      <Element name='aboutMe'>
        <AboutMe  />
      </Element>
      <Element name='ContactMe'>
        <ContactMe />
      </Element>
      <Element name='projects'>
        <ProjectList />
      </Element>
      </div>
    </div>
     </ScrollProvider>
  
  )
}

export default App
