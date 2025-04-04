import ProfilePics from "./ProfilePics";
import ProfileTxt from "./ProfileTxt";

function Profile({ showPageNav }) {
  return (
    <div
      className={`flex w-full justify-between items-start sm:items-center pb-10  sm:pb-20  ${
        showPageNav
          ? " h-fit pb-0 sm:h-screen md:h-screen lg:h-screen xl:h-screen"
          : "h-fit pt-10 sm:pt-10 md:pt-5 lg:pt-7"
      } `}
    >
      <ProfileTxt />
      <ProfilePics />
    </div>
  );
}

export default Profile;
