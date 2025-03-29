

function FontDesign({label, dot}) {
  return (
    <span className="font-extrabold text-rubik-dirt rubik-dirty">
      {label}
      {dot === "yes" && <span className="size-1.5 "></span>}
    </span>
  )
}

export default FontDesign
