import React from "react";
import { FiSettings } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";
import photo from "../assets/img2.jpg";

const Profile = () => {
  return (
    <div className=" flex flex-col p-2 mb-[44px] w-[935px] mx-auto">
      <div className="flex h-[206px] w-full justify-between ">
        {/* user's dp */}
        <div className="flex-[1] flex items-center justify-center">
        <div className="flex h-[150px] w-[150px] justify-center items-center">
          <img src={photo} alt="" className="h-full w-full rounded-full" />
        </div>
        </div>
        {/* user details */}
        <div className="flex-[2]">
        <div className="flex flex-col w-full  px-4 gap-2">
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
            {/* user's bio */}
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
      </div>

      {/* user's highlight story section */}
      <div className=" flex items-center justify-start h-130px w-full p-2">
        <div className="flex gap-6 items-center justify-start ">
          <div className="flex gap-1 h-[128px] w-[115px] ">
            <div className="flex flex-col h-[128px] w-[115px] items-center justify-center">
              <div className="h-[87px] w-[87px] rounded-full border items-center flex justify-center">
                <img
                  src={photo}
                  alt=""
                  className="object-cover h-full w-full rounded-full p-0.5 border-2 border-white"
                />
              </div>
              <span>Name</span>
            </div>

            {/* add new story section */}
            <div className="flex flex-col h-[128px] w-[115px] items-center justify-center">
              <div className="h-[87px] w-[87px] rounded-full border items-center flex justify-center">
                <BsPlusLg className="object-cover h-full w-full rounded-full p-0.5 border-2 border-white opacity-50" />
              </div>
              <span>New</span>
            </div>
          </div>
        </div>
      </div>

      {/* user's posts section */}
      <div>
        <div className="border flex flex-col gap-2 py-1">
          <div className="flex w-1/2 m-auto gap-8 justify-center align-middle items-center py-2">
            <div>Posts</div>
            <div>saved</div>
            <div>Tagged</div>
          </div>
          {/* users's post gallery */}
          <div className="w-[935px] grid grid-cols-3 grid-flow-row  m-auto ">
            <img
              src={photo}
              alt=""
              className="object-cover h-[309px] w-[309px]"
            />
            <img
              src={photo}
              alt=""
              className="object-cover h-[309px] w-[309px]"
            />
            <img
              src={photo}
              alt=""
              className="object-cover h-[309px] w-[309px]"
            />
            <img
              src={photo}
              alt=""
              className="object-cover h-[309px] w-[309px]"
            />
            <img
              src={photo}
              alt=""
              className="object-cover h-[309px] w-[309px]"
            />
            <img
              src={photo}
              alt=""
              className="object-cover h-[309px] w-[309px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
