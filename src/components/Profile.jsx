import React from "react";
import Profiler from "./utils/Profiler";
import { FiSettings } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";
import photo from "../assets/img2.jpg";

const Profile = () => {
  return (
    <div className=" flex flex-col gap-2 bg-red-200 p-2 w-3/4 m-auto max-w-[900px]">
      <div className="flex w-full justify-between ">
        <div className="flex w-1/2 justify-center items-center bg-green-200 p-2">
          <img src={photo} alt="" className="h-48 w-48 rounded-full" />
        </div>

        <div className="flex flex-col w-full bg-green-300 px-4 gap-2">
          <div className="flex gap-3 py-1 px-2 items-center ">
            <div>User name</div>
            <div>
              <button className="border p-1 bg-slate-100 rounded-md font-[500]">
                Edit Profile
              </button>
            </div>
            <div>
              <button className="border p-1 bg-slate-100 rounded-md font-[500]">
                View Archieve
              </button>
            </div>
            <div>
              <button>
                <FiSettings className="item-comp" />
              </button>
            </div>
          </div>

          <div className="flex ml-2 gap-5 w-2/3">
            <div>
              <span className="font-[500]">8 </span> posts
            </div>
            <div>
              <span className="font-[500]">20 </span>Followers
            </div>

            <div>
              <span className="font-[500]">10 </span> following
            </div>
          </div>

          <div className="mb-10">
            <div className="ml-2 font-[500] ">Name</div>

            <div className="ml-2 ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae veritatis dolores magni vitae sed tempore facilis
                nemo ea inventore esse. Cupiditate repellat soluta odit nulla
                praesentium sequi odio, fugiat totam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-6 items-center justify-start ml-3 my-5">
          <div className="flex flex-col items-center justify-center">
            <img
              src={photo}
              alt=""
              className="h-[100px] w-[100px] rounded-full"
            />{" "}
            <span>Name</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={photo}
              alt=""
              className="h-[100px] w-[100px] rounded-full"
            />{" "}
            <span>Name</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={photo}
              alt=""
              className="h-[100px] w-[100px] rounded-full"
            />{" "}
            <span>Name</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-white rounded-full h-[100px] w-[100px] ">
              <BsPlusLg className=" h-16 w-16 rounded-full opacity-50" />
            </div>
            <span>New</span>
          </div>
        </div>
      </div>
      <div>
        <div className="border flex flex-col gap-2 py-1">
          <div className="flex w-1/2 m-auto gap-8 justify-center align-middle items-center py-2">
            <div>Posts</div>
            <div>saved</div>
            <div>Tagged</div>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-2 py-1">
            <img src={photo} alt="" className=" h-64 w-64" />
            <img src={photo} alt="" className="h-64 w-64" />
            <img src={photo} alt="" className="h-64 w-64" />
            <img src={photo} alt="" className="h-64 w-64" />
            <img src={photo} alt="" className="h-64 w-64" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
