import React from "react";
import profile from "../../assets/img2.jpg";
import { AiOutlineMenu, AiOutlineHeart } from "react-icons/ai";
import like from '../../assets/icons/like.png'
import comment from '../../assets/icons/comment.png'
import send from '../../assets/icons/send.png'
import save from '../../assets/icons/save.png'
import smile from '../../assets/icons/smile.png'

const PostCard = () => {
  return (
    <div className="w-64">
      <div className="flex flex-col gap-2 p-3 pb-0 border-b border-green-950">
        <div className="flex gap-2 " >
          <img
            src={profile}
            className="icon-comp rounded-full"
            alt=""
            srcset=""
          />
          <div>
            Lalalalisa_m <span></span> <span>3 h</span>
          </div>
        </div>
        <div className="h-64 w-full">
          <img src={profile} alt="post content image" className="post h-full w-full "/>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-4">
            <div><img src={like} className="post-icon" alt="" srcset="" /></div>
            <div><img src={comment} alt="" srcset="" className="post-icon" /></div>
            <div><img src={send} alt="" className="post-icon" /></div>
          </div>
          <div><img src={save} alt="" className="post-icon" /></div>
        </div>
        <div>
          <div>liked by </div>
          <div className="flex gap-2">
            name <span>caption</span>
          </div>
          <div>view all comments</div>
          <div className="flex justify-between items-center gap-4">
            <input type="text" placeholder="Add a comment..." />
            <span><img src={smile} className="post-icon-sm" alt="" srcset="" /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
