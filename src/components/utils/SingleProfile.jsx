import React from "react";

function SingleProfile({ name, img, secondName, button, sm}) {
  return (
    <div className="w-[375px] mx-auto p-2  flex justify-between items-center">
      <div className="flex items-center">
        {sm ? <img
          src={img}
          alt="user"
          className="h-[45px] w-[45px] rounded-full object-cover bg-center mr-4"
        /> : <img
          src={img}
          alt="user"
          className="h-[60px] w-[60px] rounded-full object-cover bg-center mr-4"
        />}
        <div className="flex flex-col text-sm ">
          <span className="font-bold lowercase">{name}</span>
          {secondName && <span className=" first-letter:capitalize">{secondName}</span>}
        </div>
      </div>

      {button && <button className="border-none text-sky-300 text-sm capitalize mr-2 font-bold">{button}</button>}
    </div>
  );
}

export default SingleProfile;
