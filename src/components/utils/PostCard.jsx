import React from 'react'
import profile from '../../assets/people/img7.jpg'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import save from '../../assets/icons/save.png'
import like from '../../assets/icons/like.png'
import comment from '../../assets/icons/comment.png'
import share from '../../assets/icons/send.png'
import smile from '../../assets/icons/smile.png'

const PostCard = ({ posts }) => {
  return (
    <div className="container mx-auto">
      {posts.map((post) => {
        return (
          <div className="max-w-lg mx-auto bg-white w-full rounded-lg p-4 py-0 mb-1" key={post.id}>

            {/* Post Header */}
            <div className="flex items-center justify-between pt-2 pb-1.5">
              <div className="flex items-center">
                <img
                  className="w-11 h-11 rounded-full mr-3 object-cover bg-center"
                  src={post.userImage}
                  alt="Profile"
                />
                <h4 className="font-semibold">{post.username}</h4>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                <BiDotsHorizontalRounded className="icon-comp action" />
              </button>
            </div>

            {/* Post Image */}
            <div className="w-full aspect-[1.3/1.8] flex items-center justify-center bg-black rounded-md ">
              <img
                className=" bg-center rounded-md "
                src={post.postImg}
                alt="Post"
              />
            </div>

            {/* Post Actions */}
            <div className="flex items-center justify-between py-2">
              <div className="flex space-x-4 items-center justify-center">
                <button className="text-gray-500 hover:text-gray-700">
                  <img src={like} className="icon-comp action" alt="" />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <img src={comment} className="icon-comp action" alt="" />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <img src={share} className="icon-comp action" alt="" />
                </button>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                <img src={save} className="icon-comp action" alt="" />
              </button>
            </div>

            {/* Post Likes */}
            <div className="pb-1">
              <p className="text-gray-700 text-sm">Liked by <span className="font-bold">Jane Doe</span> and <span className="font-bold">{post.likes + ' others'} </span></p>
            </div>

            {/* Post Caption */}
            <div className="pb-1/2 w-full">
              <p className="text-gray-700 ">
                <span className="font-semibold text-sm">{post.username}: </span>
                <span className="">{post.caption}</span>
              </p>
            </div>

            {/* Post Comments */}
            <div className="pb-1/2">
              <p className="text-gray-700">
                <span className="font-semibold text-sm">Jane Doe: </span>
                Awesome photo! 🌟
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-sm">Alex Smith: </span>
                Beautiful shot! 🔥
              </p>
            </div>

            {/* Add Comment */}
            <div className="flex items-center py-1 border-b">
              <input
                className="w-full bg-transparent rounded-md py-1 focus:outline-none placeholder:text-sm"
                type="text"
                name="comment"
                placeholder="Add a comment..."
              />
              <button className=""><img src={smile} alt="" className="h-3 md:h-4" /></button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PostCard
