

function FontDesign({label, dot}) {
  return (
    <span className="font-extrabold text-gradient-to-r from-white to-slate-700 font-rubik-dirty">
      {label}
      {dot === "yes" && <span>.</span>} 
    </span>
  )
}

export default FontDesign
