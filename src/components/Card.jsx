
function Card({num, txt}) {
  return (
    <div className="flex flex-col  gap-2 lg:text-4xl text-white bg-stone-300/90 lg:w-100 lg:h-40 capitalize shadow-2xl rounded-2xl lg:pl-5 justify-center hover:font-extrabold hover:bg-stone-500">
      <span>{num}</span>
      <span>{txt}</span>
    </div>
  )
}

export default Card
