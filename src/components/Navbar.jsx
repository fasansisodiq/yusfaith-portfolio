
function Navbar() {
  return (
    <div id="slide" className="fixed top-0 h-fit  flex justify-center items-center gap-55  text-white pt-4 ">
      <span className="uppercase lg:text-5xl font-extrabold">yusfaith</span>
        <div className="slider-container w-50 h-10 lg:h-15 p-1 lg:w-200 flex flex-row justify-end items-center rounded-full border-2 border-slate-100  overflow-auto  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className=" capitalize text-sm lg:text-lg ">welcome to yusfaith !!! &nbsp;&nbsp;need our service? &nbsp;contact us </div>
        </div>  
    </div>
  )
}

export default Navbar
