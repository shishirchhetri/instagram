import React from 'react'
import photo from "../../assets/people/img8.jpg";


const UserSaved = () => {
  return (
    // user saved gallery lists
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

export default UserSaved