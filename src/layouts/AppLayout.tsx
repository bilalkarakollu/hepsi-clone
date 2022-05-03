import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {

    console.log('app')
  return (
    <>
        <h1>Navbar</h1>
        <Outlet/>
    </>
  )
}

export default AppLayout;
