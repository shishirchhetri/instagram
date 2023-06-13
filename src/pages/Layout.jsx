import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";

const Layout = () => {
  return (
    <div className=" flex flex-col">
      {/* <Sidebar /> */}
      <div className="my-[65px]">
        <Profile/>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
