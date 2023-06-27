import React from "react";
import PostCard from "../components/utils/PostCard";
import Feed from '../components/Feed'
import Stories from "../components/Stories";


function Home() {
  return (
    <div className="">
      <div>
        <Stories/>
        <Feed/>
      </div>
    </div>
  );
}

export default Home;
