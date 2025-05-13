import { twMerge } from "tailwind-merge";

const Button = ({
  right_icon,
  left_icon,
  label,
  className,
  btnclassName,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        "group relative w-fit h-fit rounded-3xl bg-[var(--btn-primary)] transition-all ease-in-out duration-300",
        className
      )}
    >
      <button
        className={twMerge(
          "relative bottom-[1px] flex items-center text-base font-medium capitalize px-4 py-2 rounded-3xl bg-[var(--btn-primary)] text-[var(--btn-secondary)] shadow-[inset_0_-5px_10px_0_rgba(0,0,0,0.7)]",
          btnclassName
        )}
      >
        {left_icon && <span className="mr-2">{left_icon}</span>}
        {label}
        {right_icon && <span className="ml-2">{right_icon}</span>}
      </button>
    </div>
  );
};

export default Button;
