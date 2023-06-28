import React from 'react';

const InstagramStories = ({ stories }) => {
  return (
    <div className="flex items-center space-x-4">
      {stories.map((story) => (
        <div key={story.id} className="flex flex-col items-center">
          <img
            src={story.image}
            alt={story.username}
            className="w-14 h-14 rounded-full object-cover border-2 border-pink-500"
          />
          <span className="text-xs mt-1">{story.username}</span>
        </div>
      ))}
    </div>
  );
};

export default InstagramStories;