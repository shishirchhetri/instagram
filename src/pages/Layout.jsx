import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const Layout = () => {
  return (
    <div className='p-4 flex-col h-full'>
        <Nav/>
        <Outlet/>
    </div>
  )
}

export default Layout;