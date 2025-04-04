function Project({ icon, tittle }) {
  return (
    <div className="flex w-full sm:h-20 lg:h-25 border-b-2 border-b-slate-300/40 items-center hover:bg-stone-700/60">
      <span className="text-white sm:text-2xl lg:text-3xl pr-2">{icon}</span>
      <span className="text-slate-300/30 border-l-2 border-l-slate-300/40 h-8 px-2"></span>
      <span>{tittle}</span>
    </div>
  );
}

export default Project;
