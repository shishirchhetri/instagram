import React from "react";
import profile from "../assets/people/profile1.avif";
import SingleProfile from "./utils/SingleProfile";
import {suggestedUsers} from '../dummyData'


function SideContainer() {


  return (
    <div className="max-w-[375px] w-full mx-auto  p-2">

      {/* user profile and name */}
      <div className="-mt-4">
      <SingleProfile name='user_name' img={profile} secondName='full_name' button='switch'/>
      </div>

      {/* suggested users title */}
      <div className="flex justify-between items-center font-bold text-[grey] p-y-2">
      <h2 className="font-bold">Suggested for you</h2>
      <button className="border-none  font-bold text-sm">See All</button>
      </div>

      {/* suggested users container */}
      {
        suggestedUsers.map(user=>{
          return(
            <SingleProfile name={user.username} img={user.img} sm secondName={user.secondName} button={user.button} key={user.id} />
          )
        })
      }

    </div>
  );
}

export default SideContainer;
