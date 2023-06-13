import React, { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlineExplore, MdOutlineAddBox,MdAddBox, MdExplore } from "react-icons/md";
import { RiMessengerLine, RiMessengerFill } from "react-icons/ri";
import {  IoMdMenu, IoIosMenu} from 'react-icons/io'
import logo from "../assets/logo.png";
import profile from "../assets/img2.jpg";
import Topbar from "./Topbar";
import Bottombar from "./Bottombar";
import reels from "../assets/video.png";
import reelsActive from "../assets/videoFill.png";
import home from "../assets/home.png";
import homeFill from '../assets/homeActive.png'


const Sidebar = () => {
const [activenav, setActivenav] = useState('home');

const handleActiveNav = (navItem)=>{
  setActivenav(navItem);
}

  return (
    <div>
      <div className="hidden md:flex flex-col justify-between h-screen wfull border-r max-w-[73px]  xl:max-w-[245px] ">
        <ul className="flex flex-col capitalize  gap-2 p-[11px] px-[12px] rounded-md w-full max-w-[73px]  xl:max-w-[245px] mt-1 ">
          <div className="p-3 py-[26px]  w-full">
            <div className="hidden xl:inline">
              <img src={logo} alt="logo" />
            </div>
            <BsInstagram className="h-6 w-6 inline xl:hidden" />
          </div>
          <li className={`li-lg ${activenav ==='home' ? 'active' : ''}`} onClick={()=> handleActiveNav('home')}>
            {
              activenav === 'home' ? <img src={homeFill} className="icon-comp" /> : <img src={home} className="icon-comp" />
            }
            <span className="hidden xl:inline" >Home</span>
          </li>

          <li className={`li-lg ${activenav ==='search' ? 'active' : ''}`} onClick={()=> handleActiveNav('search')}>
            { 
              activenav === 'search' ? <IoSearchSharp className="icon-comp" title="Search" /> : <IoSearchSharp className="icon-comp" title="Search" />
            }
            <span className="hidden xl:inline">Search</span>
          </li>
          <li className={`li-lg ${activenav ==='explore' ? 'active' : ''}`} onClick={()=> handleActiveNav('explore')}>
            {activenav==='explore' ?<MdExplore className="icon-comp" title="Explore" />: <MdOutlineExplore className="icon-comp" title="Explore" />}
            <span className="hidden xl:inline">Explore</span>
          </li>
          <li className={`li-lg flex justify-center ${activenav ==='reels' ? 'active' : ''}`} onClick={()=> handleActiveNav('reels')}>
            {
              activenav==='reels' ? <img src={reelsActive} alt="" className="icon-comp" /> : <img src={reels} alt="" className="icon-comp" />

            }
            <span className="hidden xl:inline">Reels</span>
          </li>
          <li className={`li-lg ${activenav ==='messages' ? 'active' : ''}`} onClick={()=> handleActiveNav('messages')}>
            <div className="relative">
              {
                activenav === 'messages' ? <RiMessengerFill className="icon-comp" title="Messages" />:<RiMessengerLine className="icon-comp" title="Messages" />
              }
              <span className=" flex absolute bg-red-500 p-1 rounded-full h-[18px] w-[18px] items-center justify-center -top-1 left-4 text-white text-[10px]">
                1
              </span>
            </div>
            <span className="hidden xl:inline">Messages</span>
          </li>
          <li className={`li-lg ${activenav ==='notifications' ? 'active' : ''}`} onClick={()=> handleActiveNav('notifications')}>
            <div className="relative">
              {
                activenav === 'notifications' ? <AiFillHeart className="icon-comp" title="Notifications" /> : <AiOutlineHeart className="icon-comp" title="Notifications" />
              }
              <span className=" flex absolute bg-red-500 p-1 rounded-full h-[18px] w-[18px] items-center justify-center -top-1 left-4 text-white text-[10px]">
                1
              </span>
            </div>
            <span className="hidden xl:inline">Notifications</span>
          </li>
          <li className={`li-lg ${activenav ==='create' ? 'active' : ''}`} onClick={()=> handleActiveNav('create')}>
            {
              activenav === 'create' ? <MdAddBox className="icon-comp" title="Create" /> : <MdOutlineAddBox className="icon-comp" title="Create" />
            }
            <span className="hidden xl:inline">Create</span>
          </li>
          <li className={`li-lg ${activenav ==='profile' ? 'active' : ''}`} onClick={()=> handleActiveNav('profile')}>
            <img
              src={profile}
              className="icon-comp rounded-full"
              title="Profile"
            />
            <span className="hidden xl:inline">Profile</span>
          </li>
        </ul>

        <div className="flex flex-col capitalize  gap-2  p-3 rounded-md mb-2">
          <li className={`li-lg ${activenav ==='menu' ? 'active' : ''}`} onClick={()=> handleActiveNav('menu')}>
            {
              activenav === 'menu' ? <IoMdMenu className="icon-comp" />: <IoIosMenu className="icon-comp" />
            }

            
            <span className="hidden xl:inline">More</span>
          </li>
        </div>
      </div>


      <div className="z-10 fixed md:hidden flex flex-col justify-between h-screen">
        <Topbar />
        <Bottombar />
      </div>
    </div>
  );
};

export default Sidebar;
