import React from "react";
import PostCard from "./utils/PostCard";
import { posts } from "../dummyData";

const Feed = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-3">
        <PostCard posts={posts}/>
      </div>
    </div>
  );
};
export default Feed;
