import React from 'react'
import profile from '../assets/img2.jpg'

const PostCard = () => {
  return (
    <div className='w-full'>
        <div className='bg-red-300 w-full'>
        <div className='flex'>
            <img src={profile} className='icon-comp rounded-full' alt="" srcset="" />
            <div>Lalalalisa_m <span></span> <span>3 h</span></div>
        </div>
        <div>
            <img src="" alt="" />
        </div>

        <div>
            <div>
                <div>like</div>
                <div>comment</div>
                <div>share</div>
            </div>
            <div>save</div>
        </div>
        <div>
            <div>liked by </div>
            <div>name <span>caption</span></div>
            <div>
                view all comments
            </div>
            <div>
                <input type="text" placeholder='Add a comment...' />
                <span>emoji</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default PostCard