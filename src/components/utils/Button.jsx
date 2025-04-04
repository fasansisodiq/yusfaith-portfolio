import { Link } from "react-scroll";
function Button({ icon, label, btnClassName, onClick, to }) {
  return (
    <Link to={to} smooth={true} duration={500} spy={true} offset={50}>
      <button
        onClick={onClick}
        className={`text-[0.6rem] sm:text-[0.8rem] lg:text-[1rem] xl:text-[1rem] flex justify-center items-center rounded-full ${
          label === "submit" ? "px-4" : "px-3"
        } sm:h-8  lg:h-10 py-1 w-fit   font-semibold shadow-2xl bg-white text-stone-500 hover:bg-stone-300 hover:text-white focus:outline-none focus:ring-offset-2 focus:ring-stone-400 focus:ring-2 focus:bg-stone-500 focus:text-white active:text-white active:font-semibold active:bg-stone-500 ${btnClassName} ${
          icon === "" ? "gap-0" : "gap-1 "
        }`}
      >
        <span className={`self-center`}>{icon}</span>
        <span className="capitalize self-center ">{label}</span>
      </button>
    </Link>
  );
}

export default Button;
