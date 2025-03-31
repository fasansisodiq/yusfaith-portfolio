import ProfilePics from "./ProfilePics";
import ProfileTxt from "./ProfileTxt";

function Profile() {
  return (
    <div className="flex w-full justify-between items-center  lg:pb-10">
      <ProfileTxt />
      <ProfilePics />
    </div>
  );
}

export default Profile;
