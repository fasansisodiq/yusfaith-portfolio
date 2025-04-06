import ProfilePics from "./ProfilePics";
import ProfileTxt from "./ProfileTxt";

function Profile({ showPageNav }) {
  return (
    <div
      className={`flex w-full  items-start h-fit ${
        !showPageNav ? " pb-5 lg:pt-0 lg:pb-20" : ""
      } `}
    >
      <div className="w-full flex justify-between items-center">
        <ProfileTxt />
        <ProfilePics />
      </div>
    </div>
  );
}

export default Profile;
