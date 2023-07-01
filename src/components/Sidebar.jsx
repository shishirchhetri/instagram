import React, { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { IoMdMenu, IoIosMenu } from "react-icons/io";
import logo from "../assets/logo.png";
import Topbar from "./Topbar";
import Bottombar from "./Bottombar";
import { Link } from "react-router-dom";

//sidebar icons
import { BiSearch } from "react-icons/bi";
import reels from "../assets/icons/video.png";
import reelsActive from "../assets/icons/videoFill.png";
import home from "../assets/icons/home.png";
import homeActive from "../assets/icons/homeActive.png";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdOutlineAddBox,
  MdAddBox,
  MdExplore,
} from "react-icons/md";
import { RiMessengerLine, RiMessengerFill } from "react-icons/ri";
import profile from "../assets/img2.jpg";

const Sidebar = () => {
  const [activeNav, setActiveNav] = useState("home");

  const handleActiveNav = (navItem) => {
    setActiveNav(navItem);
  };
  const menuItems = [
    {
      id: 1,
      path: "/",
      name: "Home",
      activeImg: <img src={homeActive} className="h-6 w-6 hover:scale-110" />,
      img: <img src={home} className="h-6 w-6 hover:scale-110" />,
      title: "home",
    },
    {
      id: 2,
      path: "/search",
      name: "Search",
      activeIcon: <BiSearch className="icon-comp" />,
      icon: <BiSearch className="icon-comp" />,
      title: "search",
    },
    {
      id: 3,
      path: "/explore",
      name: "Explore",
      activeIcon: <MdExplore className="icon-comp" />,
      icon: <MdOutlineExplore className="icon-comp" />,
      title: "explore",
    },
    {
      id: 4,
      path: "/reels",
      name: "Reels",
      activeImg: <img src={reelsActive} className="h-6 w-6 hover:scale-110 " />,
      img: <img src={reels} className="h-6 w-6 hover:scale-110" />,
      title: "reels",
    },
    {
      id: 5,
      path: "/messages",
      name: "Messages",
      activeIcon: <RiMessengerFill className="icon-comp" />,
      icon: <RiMessengerLine className="icon-comp" />,
      title: "messages",
    },
    {
      id: 6,
      path: "/notifications",
      name: "Notifications",
      activeIcon: <AiFillHeart className="icon-comp" />,
      icon: <AiOutlineHeart className="icon-comp" />,
      title: "notifications",
    },
    {
      id: 7,
      path: "/create",
      name: "Create",
      activeIcon: <MdAddBox className="icon-comp" />,
      icon: <MdOutlineAddBox className="icon-comp" />,
      title: "create",
    },
    {
      id: 8,
      path: "/profile",
      name: "Profile",
      activeImg: (
        <img src={profile} className="h-8 w-8 rounded-full hover:scale-110 border-2 border-black" />
      ),
      img: (
        <img src={profile} className="h-8 w-8 rounded-full hover:scale-110  " />
      ),
      title: "profile",
    },
  ];
  return (
    <div className="xl:w-[340px] sticky top-0 left-0 z-10">
      <div className="hidden md:flex flex-col justify-between h-screen w-full border-r max-w-[73px]  xl:max-w-[340px] sticky top-0 left-0 ">
        <div className="flex flex-col capitalize  gap-2 p-[11px] px-[12px] rounded-md w-full max-w-[73px]  xl:max-w-full mt-1 ">
          {/* logo */}
          <div className="p-3 py-[26px] -mt-2 mb-4 w-full">
            <Link to="/" className="link " onClick={() => handleActiveNav("home")}>
              <div className="hidden xl:inline">
                <img src={logo} alt="logo"  />
              </div>
              <BsInstagram className="h-6 w-6 inline xl:hidden hover:scale-110" />
            </Link>
          </div>

          {/* menu list items */}
          {menuItems.map((item) => (
            <Link to={item.path} key={item.id}>
              <li
                className={`li-lg ${activeNav === item.title ? "active" : ""}`}
                onClick={() => handleActiveNav(item.title)}
              >
                {activeNav === item.title
                  ? item.activeIcon || item.activeImg || item.img
                  : item.icon || item.img}
                <span className="hidden xl:inline">{item.name}</span>
              </li>
            </Link>
          ))}
        </div>

        {/* bottom hamburger menu */}
        <div className="flex flex-col capitalize  gap-2  p-3 rounded-md mb-2 ">
          <li
            className={`li-lg flex ${activeNav === "menu" ? "active" : ""}`}
            onClick={() => handleActiveNav("menu")}
          >
            {activeNav === "menu" ? (
              <IoMdMenu className="icon-comp" />
            ) : (
              <IoIosMenu className="icon-comp" />
            )}

            <span className="hidden xl:inline">More</span>
          </li>
        </div>
      </div>
      {/* responsive menu changes in small screen */}
      <div className="fixed top-0 left-0 right-0 md:hidden">
        <Topbar />
      </div>
      <div className="fixed bottom-0 left-0 right-0 md:hidden">
        <Bottombar />
      </div>

      {/* <div className="z-10 fixed md:hidden flex flex-col justify-between h-screen">
        <Topbar />
        <Bottombar />
      </div> */}
    </div>
  );
};

export default Sidebar;
