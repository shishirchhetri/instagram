import React from 'react';

const Stories = ({ stories }) => {
  return (
    <div className="flex items-center gap-2 w-full">
      {stories.map((story) => (
        <div key={story.id} className="flex flex-col items-center justify-center cursor-pointer">
          <div className='w-16 h-16  mr-2'>
          <img
            src={story.image}
            alt={story.username}
            className=" w-16 h-16 rounded-full object-cover p-0.5 border-2 border-pink-500"
          />
          </div>
          <span className="text-xs mt-1 text-[#928c8c]">{story.username}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;