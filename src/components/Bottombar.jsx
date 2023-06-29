import {useState} from "react";
import {MdOutlineAddBox, MdAddBox } from "react-icons/md";
import profile from "../assets/people/img1.jpg";
import { BiSearch } from "react-icons/bi";
import home from "../assets/icons/home.png";
import homeActive from "../assets/icons/homeActive.png";
import reels from "../assets/icons/video.png";
import reelsActive from "../assets/icons/videoFill.png";
import { Link } from "react-router-dom";

const Bottombar = () => {
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
      img: <img src={home} className="h-6 w-6 " />,
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
      path: "/reels",
      name: "Reels",
      activeImg: <img src={reelsActive} className="h-6 w-6 hover:scale-110" />,
      img: <img src={reels} className="h-6 w-6" />,
      title: "reels",
    },
    {
      id: 4,
      path: "/create",
      name: "Create",
      activeIcon: <MdAddBox className="icon-comp" />,
      icon: <MdOutlineAddBox className="icon-comp" />,
      title: "create",
    },
    {
      id: 5,
      path: "/profile",
      name: "Profile",
      img: <img src={profile} className="h-6 w-6 rounded-full hover:scale-110" />,
      title: "profile",
    },
  ]

  return (
    <ul className="flex capitalize bg-white  px-[12px] rounded-md w-full mt-1 items-center justify-evenly border-t">
      {menuItems.map((item) => (
            <Link to={item.path} key={item.id}>
              <li
                className={`li-lg ${activeNav === item.title ? "active" : ""}`}
                onClick={() => handleActiveNav(item.title)}
              >
                {activeNav === item.title
                  ? item.activeIcon || item.activeImg
                  : item.icon || item.img}
                <span className="hidden xl:inline">{item.name}</span>
              </li>
            </Link>
          ))}
    </ul>
  );
};

export default Bottombar;
