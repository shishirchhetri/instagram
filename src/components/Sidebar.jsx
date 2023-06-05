import React, { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMenu, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineExplore, MdOutlineAddBox } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
// import Message from "../message/Message";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import home from "../assets/icons/home.png";
import like from "../assets/icons/like.png";
import messenger from "../assets/icons/messenger.png";
import add from "../assets/icons/add.png";
import profile from "../assets/img2.jpg";
import PostCard from "./PostCard";
const Sidebar = () => {
  return (
    <div className="flex  w-1/6 h-screen ">
      <div className="p-1 flex flex-col justify-between h-full border ">
        <ul className="flex flex-col capitalize  gap-2  p-3 rounded-md">
          <div className="p-3 py-6">
            <img src={logo} alt="logo" />
          </div>
          <li>
            {/* <img src={home} className="icon" alt="" /> */}
            <AiOutlineHome className="icon-comp" title="Home" />
            Home
          </li>
          <li>
            <GoSearch className="icon-comp" title="Search" />
            Search
          </li>
          <li>
            <MdOutlineExplore className="icon-comp" title="Explore" />
            Explore
          </li>
          <li>
            {/* <img src={add} alt="" className="icon-comp" />  */}
            <MdOutlineAddBox className="icon-comp" title="Reels" />
            Reels
          </li>
          <li>
            <RiMessengerLine className="icon-comp" title="Messages" />
            Messages
          </li>
          <li>
            <AiOutlineHeart className="icon-comp" title="Notifications" />
            Notifications
          </li>
          <li>
            {/* <img src={add} alt="" className="icon" /> */}
            <MdOutlineAddBox className="icon-comp" title="Create" />
            Create
          </li>
          <li>
            <img
              src={profile}
              alt=""
              srcset=""
              className="icon-comp rounded-full"
              title="Profile"
            />
            Profile
          </li>
        </ul>

        <div className="flex flex-col capitalize  gap-2  p-3 rounded-md">
          <li>
            <AiOutlineMenu className="icon-comp" />
            <span>More</span>
          </li>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
