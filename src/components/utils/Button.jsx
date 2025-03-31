import { Link } from "react-scroll";
function Button({ icon, label, btnClassName, onClick, to }) {
  return (
    <Link to={to} smooth={true} duration={500} spy={true} offset={50}>
      <button
        onClick={onClick}
        className={`flex justify-center items-center rounded-full  lg:h-13  p-1  font-semibold shadow-2xl bg-white text-stone-500 hover:bg-stone-300 hover:text-white focus:outline-none focus:ring-offset-2 focus:ring-stone-400 focus:ring-2 focus:bg-stone-500 focus:text-white active:text-white active:font-semibold active:bg-stone-500 ${btnClassName} ${
          icon === "" ? "gap-0" : "gap-2 lg:gap-4"
        }`}
      >
        <span>{icon}</span>
        <span className="capitalize self-center">{label}</span>
      </button>
    </Link>
  );
}

export default Button;
