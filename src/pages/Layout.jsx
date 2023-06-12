import React from "react";
import { Outlet } from "react-router-dom";
// import Nav from '../components/Nav'
import Sidebar from "../components/Sidebar";
import PostCard from "../components/utils/PostCard";
import Home from "./Home";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";

const Layout = () => {
  return (
    <div className=" flex flex-col">
      <Sidebar />
      <div className="my-[65px]"></div>
      <Outlet />
    </div>
  );
};

export default Layout;
