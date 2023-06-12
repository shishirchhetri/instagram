import React from "react";
import { LuSearch } from "react-icons/lu";
import logo from "../assets/logo.png";
import { AiOutlineHeart } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";


const Topbar = () => {
  return (
      <div className="flex bg-white w-screen justify-between border-b items-center px-2">
        <div className="px-2 py-[16px]  w-auto">
          <img src={logo} alt="logo" className="" />
        </div>

        <div className="flex gap-1 justify-around items-center mr-4">
          {/* <div className="flex items-center gap-2 p-1 py-[6px] bg-[#EFEFEF] rounded-md max-w-[250px]">
            <LuSearch className="mx-2 h-5 w-5 opacity-40" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-full placeholder:text-bold placeholder:opacity-100"
            />
          </div> */}
        

      <div className="relative  ">
      <AiOutlineHeart className="icon-comp" title="Notifications" />
      <span className=" flex absolute bg-red-500 p-1 rounded-full h-[10px] w-[10px] items-center justify-center -top-[0px] right-[2px] text-white text-[10px]"></span>
      </div>

      <div className="relative">
      <RiMessengerLine className="icon-comp" title="Messages" />
      <span className=" flex absolute bg-red-500 p-1 rounded-full h-[18px] w-[18px] items-center justify-center -top-1 left-4 text-white text-[10px]">1</span>
      </div>
        </div>
      </div>
  );
};

export default Topbar;
