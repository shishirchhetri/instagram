import React from 'react';
import InstagramStories from './InstagramStories';

const stories = [
  {
    id: 1,
    image: 'story1.jpg',
    username: 'user1',
  },
  {
    id: 2,
    image: 'story2.jpg',
    username: 'user2',
  },
  {
    id: 2,
    image: 'story2.jpg',
    username: 'user2',
  },
  {
    id: 2,
    image: 'story2.jpg',
    username: 'user2',
  },
  {
    id: 2,
    image: 'story2.jpg',
    username: 'user2',
  },
  {
    id: 2,
    image: 'story2.jpg',
    username: 'user2',
  },
  {
    id: 2,
    image: 'story2.jpg',
    username: 'user2',
  },

  {
    id: 2,
    image: 'story2.jpg',
    username: 'user2',
  },
  {
    id: 2,
    image: 'story2.jpg',
    username: 'user2',
  },
  {
    id: 2,
    image: 'story2.jpg',
    username: 'user2',
  },
  {
    id: 2,
    image: 'story2.jpg',
    username: 'user2',
  },
  {
    id: 2,
    image: 'story2.jpg',
    username: 'user2',
  },

  {
    id: 2,
    image: 'story2.jpg',
    username: 'user2',
  },
  {
    id: 2,
    image: 'story2.jpg',
    username: 'user2',
  },
  {
    id: 2,
    image: 'story2.jpg',
    username: 'user2',
  },
  {
    id: 2,
    image: 'story2.jpg',
    username: 'user2',
  },
  {
    id: 2,
    image: 'story2.jpg',
    username: 'user2',
  },
  {
    id: 2,
    image: 'story2.jpg',
    username: 'user2',
  },
  // Add more stories as needed
];

const Story = () => {
  return (
    <div className="container mx-auto max-w-[650px] overflow-x-scroll">
      {/* Other components */}
      <InstagramStories stories={stories} />
      {/* Other components */}
    </div>
  );
};

export default Story;
