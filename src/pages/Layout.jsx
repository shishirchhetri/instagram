import React from 'react'
import { Outlet } from 'react-router-dom'
// import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import PostCard from '../components/PostCard'

const Layout = () => {
  return (
    <div className=' flex '>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Layout;