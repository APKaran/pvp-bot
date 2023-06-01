import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBanner from '../TopBanner/TopBanner'
import TopNav from '../TopNav/TopNav'


export default function LoginPage() {
  return (
    <>
        <TopBanner/>
        <TopNav/>
        <Outlet/>
    </>
  )
}
