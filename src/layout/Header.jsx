import React from 'react'
import { Link } from 'react-router-dom'
import Toggle from '../components/Toggle'

const Header = () => {
  return (
    <>
      <div className="w-full grid md:grid-cols-4 bg-slate-400">
        <div className="brand text-3xl font-bold text-center hover:bg-slate-300 py-2 cursor-pointer">
          Our Store
        </div>

        <div className="flex col-span-2 py-2">
          <input type="search" className='outline-4 outline-slate-300 py-1 px-3 rounded-lg w-full bg-slate-100 rounded-e-none' />
          <button className='bg-blue-300 px-3 py-2 outline-4 outline-slate-300 rounded-e-lg hover:bg-blue-400 active:bg-blue-400 cursor-pointer'>Search</button>
        </div>

        <div className='text-3xl py-2 flex justify-evenly items-center'>

          <Link to={'/login'}>
            <i className='bi bi-box-arrow-in-left'></i>
          </Link>

          <Link to={'/register'}>
            <i className='bi bi-person-plus'></i>
          </Link>

          <Link to={'/login'}>
            <i className='bi bi-cart'></i>
          </Link>

          <div className="dropdown dropdown-end dropdown-hover">
            <i tabIndex={0} role="button" className=" m-1 bi bi-box-arrow-in-down w-7 "> </i>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow">
            <li className='mx-auto'><Toggle/></li>
            <li className=''> <Link to='/aboutus' className='btn btn-md'> About Us </Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header