import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login } = useContext(LoginContext);

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      //login garaidine
      login(username)
      navigate("/admin")
    }
    else {
      setError("Invalid credentials!")
    }
  }
  return (
    <>
      <div className="w-1/2 mx-auto">
        <fieldset className="fieldset w-full  bg-base-200 border border-base-300  my-10 px-10 py-10 rounded-box">
          <legend className="fieldset-legend text-center text-2xl">Login</legend>

          <label className="fieldset-label">Email</label>
          <input type="email" value={username} className="input w-full" placeholder="Email" onChange={(e) => setUsername(e.target.value)} />

          <label className="fieldset-label">Password</label>
          <input type="password" className="input w-full" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

          <button className="btn btn-neutral mt-4" onClick={handleLogin}>Login</button>

          <div className="flex justify-between text-lg">
          </div>
          <span>Do not have an account?<Link to='/register' className='text-blue-600 ml-1'>Sign Up</Link></span>
          <Link to={'/forgetpassword'}>Forget Password</Link>
        </fieldset>
        {/* conditional rendering */}
        {
          error &&  <div role="alert" className="alert alert-error toast toast-top toast-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current " fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {/* <span>Error! Task failed successfully.</span>
           */}
          {error}
        </div>
        }
      </div>
    </>
  )
}

export default Login