import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from './layout/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './Profile'
import Hi from './pages/Hi'
const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile/:username' element={<Profile />} />
          <Route path='/hello' element={<Hi />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes