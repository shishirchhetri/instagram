import React from "react";
import profile from "../../assets/img2.jpg";


//for single user-like link in message page
const Message = () => {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <img
          src={profile}
          className="icon-msg rounded-full"
          
        />
        <div>
          <span>Lalalalisa_m</span>
          <div className="opacity-60 text-sm">
            Hello brother <span>.2h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
