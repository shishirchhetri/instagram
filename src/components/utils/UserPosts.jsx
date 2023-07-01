import React from "react";
import photo from "../../assets/people/img7.jpg";


const UserPosts = () => {
  return (
    // user posts gallery
    <div className=" grid-flow-row  m-auto ">
      <div
        className="grid grid-cols-3 
      w-full gap-[2px]"
      >
        <img src={photo} alt="" className="object-cover aspect-square" />
        <img src={photo} alt="" className="object-cover aspect-square" />
        <img src={photo} alt="" className="object-cover aspect-square" />
        <img src={photo} alt="" className="object-cover aspect-square" />
        <img src={photo} alt="" className="object-cover aspect-square" />
        <img src={photo} alt="" className="object-cover aspect-square" />
      </div>
    </div>
  );
};

export default UserPosts;
