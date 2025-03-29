
import AboutMe from "./components/AboutMe"
import ContactMe from "./components/ContactMe"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import ProjectList from "./components/ProjectList"
import {Element} from 'react-scroll';
import QuotesContainer from "./components/QuotesContainer"

function App() {
  return (
    
  
       <div id="app" className="element w-screen h-full  bg-slate-950 bg-scroll  ">
      <div className="w-full h-full flex flex-col lg:gap-15 bg-slate-950 px-50">
        <Navbar/>
        <div className="flex flex-col justify-between lg:justify-evenly items-start  h-screen">
          <Profile/>
          <Footer />
        </div>
      
      <Element name='aboutMe'>
        <AboutMe  />
      </Element>
      <QuotesContainer/>
      <Element name='ContactMe'>
        <ContactMe />
      </Element>
      <Element name='projects'>
        <ProjectList />
      </Element>
        
      </div>
    </div>
  
  
  )
}

export default App
