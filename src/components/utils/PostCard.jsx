import React from 'react'
import profile from '../../assets/people/img5.jpg'
import { AiOutlineHeart } from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {TbSend} from 'react-icons/tb'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import save from '../../assets/icons/save.png'
import like from '../../assets/icons/like.png'
import comment from '../../assets/icons/comment.png'
import share from '../../assets/icons/send.png'


const PostCard = () => {
  return (
    <div>
      <div className="container mx-auto">
      <div className="max-w-lg mx-auto bg-white border rounded-lg shadow-md ">
        {/* Post Header */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-3 bg-cover bg-center"
              src={profile}
              alt="Profile"
            />
            <h4 className="font-semibold">John Doe</h4>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <BiDotsHorizontalRounded className='icon-comp'/>
          </button>
        </div>

        {/* Post Image */}
        <div className='h-[600px]'>
        <img
          className="w-full h-full"
          src={profile}
          alt="Post"
        />
        </div>

        {/* Post Actions */}
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex space-x-4 items-center justify-center">
            <button className="text-gray-500 hover:text-gray-700">
            <img src={like} className='icon-comp' alt="" />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
            <img src={comment} className='icon-comp' alt="" />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
            <img src={share} className='icon-comp' alt="" />
            </button>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <img src={save} className='icon-comp' alt="" />
          </button>
        </div>

        {/* Post Likes */}
        <div className="px-4 pb-2">
          <p className="text-gray-700 font-semibold">Liked by <span className="text-blue-500">Jane Doe</span> and <span className="text-blue-500">12 others</span></p>
        </div>

        {/* Post Caption */}
        <div className="px-4 pb-2">
          <p className="text-gray-700">
            <span className="font-semibold">John Doe: </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus fermentum tellus, id lacinia neque posuere in.
          </p>
        </div>

        {/* Post Comments */}
        <div className="px-4 pb-2">
          <p className="text-gray-700">
            <span className="font-semibold">Jane Doe: </span>
            Awesome photo! 🌟
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Alex Smith: </span>
            Beautiful shot! 🔥
          </p>
        </div>

        {/* Add Comment */}
        <div className="flex items-center px-4 py-2 border-t">
          <input
            className="w-full bg-gray-100 rounded-md px-3 py-2 focus:outline-none"
            type="text"
            placeholder="Add a comment..."
          />
          <button className="text-blue-500 font-semibold">Post</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PostCard