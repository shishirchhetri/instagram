import React from "react";
import Profiler from "./utils/Profiler";
import { FiSettings } from "react-icons/fi";
import photo from '../assets/img2.jpg'

const Profile = () => {
  return (
    <div className="h-screen flex flex-col gap-2 bg-red-200 m-0 p-0">
      <div className="flex w-full justify-between ">
        <div className="flex w-1/2 justify-center items-center bg-green-200 p-2">
          
          <img src={photo} alt="" className="h-80 w-80 rounded-full"/>
        </div>


        <div className="flex flex-col w-full bg-green-300 px-4 gap-2">


          <div className="flex gap-3 py-1 items-center w-3/4">
            <div>User name</div>
            <div>
              <button className="border p-1 bg-slate-100 rounded-md">Edit Profile</button>
            </div>
            <div>
              <button className="border p-1 bg-slate-100 rounded-md">View Archieve</button>
            </div>
            <div>
              <button>
                <FiSettings className="item-comp"/>
              </button>
            </div>
          </div>


          <div className="flex ml-2 gap-5 w-2/3">
            <div>
              <span>8 </span> posts
            </div>
            <div>
              <span>20 </span>Followers
            </div>

            <div>
              <span>10 </span> following
            </div>
          </div>


          <div className="ml-2">
            Name
          </div>

          <div className="ml-2 w-2/3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veritatis dolores magni vitae sed tempore facilis nemo ea inventore esse. Cupiditate repellat soluta odit nulla praesentium sequi odio, fugiat totam.</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-center justify-start ml-48">
          <div className="flex flex-col items-center justify-center">
          <img src={photo} alt="" className="h-[100px] w-[100px] rounded-full"/>                <span>Name</span>
          </div>
          <div className="flex flex-col items-center justify-center">
          <img src={photo} alt="" className="h-[100px] w-[100px] rounded-full"/>                    <span>Name</span>
          </div>
          <div className="flex flex-col items-center justify-center">
          <img src={photo} alt="" className="h-[100px] w-[100px] rounded-full"/>            <span>Name</span>
          </div>
        </div>
      </div>
      <div>Phtotos</div>
    </div>
  );
};

export default Profile;
