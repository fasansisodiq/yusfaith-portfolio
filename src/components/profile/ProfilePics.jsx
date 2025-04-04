function ProfilePics() {
  return (
    <div className=" sm:size-2/3 md:fit lg:w-fit lg:h-fit flex justify-center items-center gap-4 sm:gap-5 lg:gap-8 ">
      <img
        src="/sodiq3.png"
        alt="profile picture"
        className=" size-5/6  sm-h-40 md:h-60 md:w-fit  lg:w-fit lg:h-90 xl:w-fit xl:h-100  rounded-tl-[8.5rem] rounded-br-[16rem] rounded-tr-3xl opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out shadow-2xl shadow-slate-900/50"
      />
    </div>
  );
}

export default ProfilePics;
// bg-[url(sodiq3.png)]
