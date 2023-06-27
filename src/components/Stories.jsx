import React from 'react'
import Story from './utils/Story'
import { stories } from '../dummyData'

const Stories = () => {
  return (
    <div className="container mx-auto  w-[750px]">
      <div className="flex ">
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