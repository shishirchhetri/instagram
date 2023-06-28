import React from "react";
import PostCard from "../components/utils/PostCard";
import Feed from '../components/Feed'
import Stories from "../components/Stories";
import Story from "../components/stories/Story";


function Home() {
  return (
    <div className="container flex items-center mx-auto">
      <div className="flex flex-col items-center mx-auto sm:mt-[70px]">
        <Story/>
        <Feed/>
      </div>
    </div>
  );
}

export default Home;
