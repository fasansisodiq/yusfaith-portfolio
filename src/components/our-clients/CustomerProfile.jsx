function CustomerProfile({ name, position }) {
  const fontSize = "text-[0.7rem] sm:text-lg md:text-xl lg:text-xl";
  return (
    <div
      className={`flex flex-col justify-center items-center md:gap-2 capitalize  ${fontSize}`}
    >
      <span className=" font-bold text-slate-100">{name}</span>
      <span className={` font-semibold text-white  text-center ${fontSize}`}>
        {position}
      </span>
    </div>
  );
}

export default CustomerProfile;
