import React from 'react'
import photo from "../../assets/people/profile1.avif";


const UserTagged = () => {
  return (
    // user tagged posts list
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
  )
}

export default UserTagged