import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { BsPlusLg, BsGrid3X3, BsPersonRolodex } from "react-icons/bs";
import photo from "../assets/people/img7.jpg";
import save from "../assets/icons/save.png";
import UserPosts from "../components/utils/UserPosts";
import UserSaved from "../components/utils/UserSaved";
import UserTagged from "../components/utils/UserTagged";

const Profile = () => {
  const [activeNav, setActiveNav] = useState("posts");

  const handleActiveNav = (navItem) => {
    setActiveNav(navItem);
  };

  return (
    <div className="my-12 flex flex-col md:my-2 p-2 pb-0  xl:mt-5 w-[935px] mx-auto">
      {/* top - user dp and user-details section */}
      <div className="flex h-[206px] w-full justify-between mt-4">
        {/* user's dp */}
        <div className="flex-[1] flex items-center justify-center">
          <div className="flex h-[1light50px] w-[150px] justify-center items-center ">
            <img
              src={photo}
              alt=""
              className="aspect-square rounded-full object-cover bg-center"
            />
          </div>
        </div>
        {/* user details */}
        <div className="flex-[2]">
          <div className="flex flex-col w-full  px-4 gap-2">
            <div className="flex gap-3 py-1 px-2 items-center text-sm ">
              <span className="text-lg font-[400]">user_name</span>
              <div>
                <button className="border p-1 px-3 bg-slate-100 rounded-md font-[500]">
                  Edit Profile
                </button>
              </div>
              <div>
                <button className="border p-1 px-3 bg-slate-100 rounded-md font-[500]">
                  View Archieve
                </button>
              </div>
              <div>
                <button>
                  <FiSettings className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex ml-2 gap-5 w-2/3 font-light">
              <div>
                <span className="font-[500]">8 </span> posts
              </div>
              <div>
                <span className="font-[500]">20 </span>followers
              </div>

              <div>
                <span className="font-[500]">10 </span> following
              </div>
            </div>

            <div className="mb-10 text-sm">
              <div className="ml-2 font-[500]">Full Name</div>
              {/* user's bio */}
              <div className="ml-2 ">
                <p className="opacity-80">
                  Lorem ipsum dolor sit amet consectetur
                  <br />
                  Repudiandae vitae sed tempore facilis
                  <br />
                  nemo ea repellat soluta odit nulla
                  <br />
                  praesentium sequi odio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* user's highlight story section */}
      <div className=" flex items-center justify-start h-130px w-full p-2">
        <div className="pl-12 flex gap-6 items-center justify-start ">
          <div className=" flex gap-1 h-[128px] w-[115px] ">
            {/* single user-highlight story */}
            <div className="w-[125px] h-[128px] mr-4">
              <div className="flex flex-col h-[128px] w-[115px] items-center justify-center">
                <div className="h-[87px] w-[87px] rounded-full border items-center flex justify-center">
                  <img
                    src={photo}
                    alt=""
                    className="object-cover h-full w-full rounded-full  border-2 border-white"
                  />
                </div>
                <span className="text-sm">Name</span>
              </div>
            </div>

            <div className="w-[125px] h-[128px] mr-4">
              <div className="flex flex-col h-[128px] w-[115px] items-center justify-center">
                <div className="h-[87px] w-[87px] rounded-full border items-center flex justify-center">
                  <img
                    src={photo}
                    alt=""
                    className="object-cover h-full w-full rounded-full  border-2 border-white"
                  />
                </div>
                <span className="text-sm">Name</span>
              </div>
            </div>

            <div className="w-[125px] h-[128px] mr-4">
              <div className="flex flex-col h-[128px] w-[115px] items-center justify-center">
                <div className="h-[87px] w-[87px] rounded-full border items-center flex justify-center">
                  <img
                    src={photo}
                    alt=""
                    className="object-cover h-full w-full rounded-full  border-2 border-white"
                  />
                </div>
                <span className="text-sm">Name</span>
              </div>
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
        <div className="flex flex-col gap-2 py-1 ">
          {/* navigation of user posts */}
          <div className="flex gap-7 justify-center align-middle items-center  mt-0 text-sm border-t">
            <li
              className={`flex py-1  ${
                activeNav === "posts" ? "active-profile" : ""
              }`}
              onClick={() => handleActiveNav("posts")}
            >
              <button className="flex items-center gap-2 py-2 uppercase">
                <BsGrid3X3 /> Posts
              </button>
            </li>

            <li
              className={` flex py-1 ${
                activeNav === "saved" ? "active-profile" : ""
              }`}
              onClick={() => handleActiveNav("saved")}
            >
              <button className="flex items-center gap-2  uppercase py-2">
                <img src={save} alt="" className="h-4 w-4" /> saved
              </button>
            </li>

            <li
              className={` flex py-1 ${
                activeNav === "tagged" ? "active-profile" : ""
              }`}
              onClick={() => handleActiveNav("tagged")}
            >
              <button className="flex items-center gap-2 uppercase py-2">
                <BsPersonRolodex />
                Tagged
              </button>
            </li>
          </div>
          {/* user posts gallery */}
          {activeNav === "posts" && <UserPosts />}

          {/* user tagged gallery */}
          {activeNav === "tagged" && <UserTagged />}

          {/* user saved gallery */}
          {activeNav === "saved" && <UserSaved />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
