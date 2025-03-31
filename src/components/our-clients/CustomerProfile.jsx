
function CustomerProfile({name, position}) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 capitalize">
      <span className="lg:text-2xl font-bold text-slate-100">{name}</span>
      <span className="lg:text-xl font-semibold text-white">{position}</span>
    </div>
  )
}

export default CustomerProfile
