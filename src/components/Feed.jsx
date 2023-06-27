import React from "react";
import Post from "./utils/PostCard";
import Story from "./utils/Story";
import profile from "../assets/people/img1.jpg";

const Feed = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-3">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
