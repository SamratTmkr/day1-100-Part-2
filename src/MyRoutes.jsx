import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from './layout/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './Profile'
import Hi from './pages/Hi'
import Toggle from './components/Toggle'
import Register from './pages/Register'
const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile/:username' element={<Profile />} />
          <Route path='/hello' element={<Hi />} />
          <Route path='/toggle' element={<Toggle />} />
          <Route path='/register' element={<Register />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes