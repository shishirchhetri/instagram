import React from "react";
import profile from "../../assets/img2.jpg";


const Profile = ({size='24',name}) => {
  return (
    <div>
        <img src={profile}  className={`h-${size} w-${size} rounded-full `} />
        <span className="hidden xl:inline">{name}</span>
    </div>
  );
};

export default Profile;
