import React, { Children, useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore, MdOutlineAddBox } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import logo from "../assets/logo.png";
import profile from "../assets/img2.jpg";
import { NavLink } from "react-router-dom";
import Topbar from "./Topbar";
import Bottombar from "./Bottombar";
//md:w-full md:inline max-w-[73px] flex h-screen transition-all xl:w-full border-r xl:max-w-[245px]
const Sidebar = () => {
  return (
      
      <div>
        <div className="hidden md:flex flex-col justify-between h-screen wfull border-r max-w-[73px]  xl:max-w-[245px] ">

<ul className="flex flex-col capitalize  gap-2 p-[11px] px-[12px] rounded-md w-[245px] mt-1 ">
    <div className="p-3 py-[26px]  w-full">
      <div className="hidden xl:inline">
        <img src={logo} alt="logo" />
      </div>
      <BsInstagram className="h-6 w-6 inline xl:hidden"/>
    </div>
    <li className="li-lg">
      <AiOutlineHome className="icon-comp" title="Home" />
      <span className="hidden xl:inline">Home</span>
    </li>
    <li className="li-lg">
      <GoSearch className="icon-comp" title="Search" />
      <span className="hidden xl:inline">Search</span>
    </li>
    <li className="li-lg">
      <MdOutlineExplore className="icon-comp" title="Explore" />
      <span className="hidden xl:inline">Explore</span>
    </li>
    <li className="li-lg">
      <MdOutlineAddBox className="icon-comp" title="Reels" />
      <span className="hidden xl:inline">Reels</span>
    </li>
    <li className="li-lg">
      <div className="relative">
      <RiMessengerLine className="icon-comp" title="Messages" />
      <span className=" flex absolute bg-red-500 p-1 rounded-full h-[18px] w-[18px] items-center justify-center -top-1 left-4 text-white text-[10px]">1</span>
      </div>
      <span className="hidden xl:inline">Messages</span>
    </li>
    <li className="li-lg">
      <div className="relative">
      <AiOutlineHeart className="icon-comp" title="Notifications" />
      <span className=" flex absolute bg-red-500 p-1 rounded-full h-[18px] w-[18px] items-center justify-center -top-1 left-4 text-white text-[10px]">1</span>
      </div>
      <span className="hidden xl:inline">Notifications</span>
    </li>
    <li className="li-lg">
      <MdOutlineAddBox className="icon-comp" title="Create" />
      <span className="hidden xl:inline">Create</span>
    </li>
    <li className="li-lg">
      <img
        src={profile}
        className="icon-comp rounded-full"
        title="Profile"
      />
      <span className="hidden xl:inline">Profile</span>
    </li>
  </ul>

  <div className="flex flex-col capitalize  gap-2  p-3 rounded-md mb-2">
    <li className="li-lg">
      <AiOutlineMenu className="icon-comp" />
      <span className="hidden xl:inline">More</span>
    </li>
  </div>
</div>
<div className="z-10 fixed md:hidden flex flex-col justify-between h-screen">
  <Topbar/>
  <Bottombar/>
</div>
      </div>


  );
};

export default Sidebar;
