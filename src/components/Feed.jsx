import React from "react";
import Post from "./utils/PostCard";
import { posts } from "../dummyData";

const Feed = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-3">
        <Post posts={posts}/>
      </div>
    </div>
  );
};
export default Feed;
