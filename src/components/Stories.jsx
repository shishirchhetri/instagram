import React from 'react'
import Story from './utils/Story'
import { stories } from '../dummyData'

const Stories = () => {
  return (
    <div className=" flex container mx-auto  w-[750px] overflow-x-scroll ">
        {
            stories.map(story =>{
                return(
                    <Story username={story.name} image={story.img} key={story.id}/>
                )
            })
        }
    </div>
  )
}

export default Stories