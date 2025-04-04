function CustomerProfile({ name, position }) {
  const fontSize = "text-sm sm:text-lg md:text-xl lg:text-2xl";
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 capitalize  ${fontSize}`}
    >
      <span className=" font-bold text-slate-100">{name}</span>
      <span className={` font-semibold text-white ${fontSize}`}>
        {position}
      </span>
    </div>
  );
}

export default CustomerProfile;
