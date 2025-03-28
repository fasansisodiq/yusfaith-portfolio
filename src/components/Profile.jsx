import ProfilePics from "./ProfilePics"
import ProfileTxt from "./ProfileTxt"


function Profile() {
  return (
    <div className="flex w-full justify-between items-center lg:pt-15 ">
      <ProfileTxt/>
      <ProfilePics/>
    </div>
  )
}

export default Profile
