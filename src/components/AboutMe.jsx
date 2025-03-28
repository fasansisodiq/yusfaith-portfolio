
import Card from './Card'
import {Element } from 'react-scroll';
function AboutMe() {

  return (
    
      <div  className= 'flex flex-col justify-center items-center gap-5 text-white lg:text-4xl h-screen'>
        <h1 className='self-start lg:py-10 '>About me</h1>
      <span className='pb-5'>I'm AbdulRaheem Yuusuf, UI/UX designer with experience in designing user interfaces, creating prototypes, and conducting user research. ihave a creative approach to problem-solving and loves colaborating with developers, and other designers.</span>
      <div className="flex justify-between items-center w-full">
        <Card num={2} txt={"years experience"}/>
      <Card num={4} txt={"project experience"}/>
      <Card num={'50+'} txt={"positive reviews"}/>
      </div>
    </div>
  
  )
}

export default AboutMe
