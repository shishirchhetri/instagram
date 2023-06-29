import React from 'react';
import Stories from './utils/Stories';
import { stories } from '../dummyData';

const StoryContainer = () => {
  return (
    <div className="w-full overflow-x-scroll p-2  scrollable rounded-md">
      <Stories stories={stories} />
    </div>
  );
};

export default StoryContainer;
