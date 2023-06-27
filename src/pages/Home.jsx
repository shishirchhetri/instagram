import React from "react";
import PostCard from "../components/utils/PostCard";
import Messages from "../components/Messages";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="flex items-center justify-start">
      <div className=" xl:flex-[1]">
        <Sidebar />
      </div>
      <div className="flex-[4]">
        <Messages/>
      </div>
    </div>
  );
}

export default Home;
