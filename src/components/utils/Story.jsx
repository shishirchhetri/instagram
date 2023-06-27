import React from 'react';

const Story = ({ username, image }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-[3px] border-pink-500 rounded-full overflow-hidden mb-2">
        <img className="w-full h-full p-[2px] rounded-full object-cover" src={image}  alt="Story" />
      </div>
      <p className="text-sm text-gray-700 -mt-1">{username}</p>
    </div>
  );
};

export default Story;