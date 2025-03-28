

function FontDesign({label, dot}) {
  return (
    <span className="font-extrabold">
      {label}
      {dot === "yes" && <span className="size-1.5 "></span>}
    </span>
  )
}

export default FontDesign
