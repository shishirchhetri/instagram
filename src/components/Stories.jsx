import React from 'react'
import Story from './utils/Story'
import { stories } from '../dummyData'

const Stories = () => {
  return (
    <div className="container mx-auto flex-[4]">
      <div className="flex space-x-4 items-center justify-left w-full overflow-hidden my-4 p-2 border px-0 max-w-[600px] rounded-xl mx-auto ">
        {
            stories.map(story =>{
                return(
                    <Story username={story.name} image={story.img} key={story.id}/>
                )
            })
        }
        </div>
    </div>
  )
}

export default Stories