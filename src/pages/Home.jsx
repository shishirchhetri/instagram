import React from "react";
import Feed from "../components/Feed";
import StoryContainer from "../components/StoryContainer";
import SideContainer from "../components/SideContainer";

function Home() {
  return (
    <div className="flex mt-4 mx-auto gap-5 max-w-[100vw] overflow-hidden items-center justify-center">
      <div className="max-w-[640px] w-full flex flex-col items-center mx-auto mt-[62px] md:mt-0  ">
        <StoryContainer />
        <div className=" flex mx-auto mt-[10px]">
          <Feed />
        </div>
      </div>
      <div className="hidden xl:flex p-4">
      <SideContainer />
      </div>
    </div>
  );
}

export default Home;
