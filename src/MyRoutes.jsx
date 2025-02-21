import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './Profile'
import Header from '../src/layout/Header'
const MyRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        
        <Route path='/header' element={<Header/>}/>
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
)
}

export default MyRoutes