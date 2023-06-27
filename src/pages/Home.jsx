import React from "react";
import PostCard from "../components/utils/PostCard";
import Feed from '../components/Feed'
import Stories from "../components/Stories";


function Home() {
  return (
    <div className="container flex items-center">
      <div className="flex flex-col items-center mx-auto sm:mt-[55px]">
        <Stories/>
        <Feed/>
      </div>
    </div>
  );
}

export default Home;
