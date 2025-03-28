

function Button({icon, label, btnClassName, onClick}) {
 
  return (
    <button onClick={onClick} id={label} className={`flex justify-center items-center ${icon === ""? "gap-0": "gap-2 lg:gap-4"} bg-white rounded-full text-stone-500 lg:h-13  p-1  font-semibold ${btnClassName} shadow-2xl hover:bg-stone-400 hover:text-white`}>
      <span>{icon}</span>
      <span className="capitalize self-center">{label}</span>
    </button>
  )
}

export default Button
