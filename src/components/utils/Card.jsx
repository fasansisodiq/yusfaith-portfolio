function Card({ num, txt }) {
  return (
    <div className="flex flex-col gap-1  sm:gap-2 xl:gap-4 text-sm  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white bg-stone-300/60 h-20 w-30  sm:w-47 sm:h-35 md:w-54 md:h-45  lg:w-68 xl:w-84 lg:h-50 xl:h-60 p-2 sm:pl-3 lg:pl-5 capitalize shadow-2xl rounded-2xl  justify-center hover:font-semibold hover:shadow-4xl transition-all hover:bg-stone-500">
      <span>{num}</span>
      <span>{txt}</span>
    </div>
  );
}

export default Card;
