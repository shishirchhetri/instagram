import React from "react";
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineExplore, MdOutlineAddBox } from "react-icons/md";
import profile from "../assets/img2.jpg";
import { LuSearch } from "react-icons/lu";
import reels from '../assets/video.png'
import home from '../assets/icons/home.png'


const Bottombar = () => {
  return (
    <ul className="flex capitalize bg-white  px-[12px] rounded-md w-full mt-1 items-center justify-evenly border-t">
      <li className="li-sm">
        <img src={home} className="icon-comp" />
      </li>
      <li className="li-sm">
      <LuSearch className="icon-comp" title="Search" />
    </li>
      
      <li className="li-sm">
        <img src={reels} alt="" className="icon-comp"/>
      </li>

      <li className="li-sm">
        <MdOutlineAddBox className="icon-comp" title="Create" />
      </li>

      
      <li className="li-sm">
        <img
          src={profile}
          alt=""
          srcSet=""
          className="icon-comp rounded-full"
          title="Profile"
        />
      </li>
    </ul>
  );
};

export default Bottombar;
