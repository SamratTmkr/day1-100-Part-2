import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
<>
<div className="w-1/2 mx-auto">
<fieldset className="fieldset w-full  bg-base-200 border border-base-300  my-10 px-10 py-10 rounded-box">
  <legend className="fieldset-legend text-center text-2xl">Login</legend>
  
  <label className="fieldset-label">Email</label>
  <input type="email" className="input w-full" placeholder="Email" />
  
  <label className="fieldset-label">Password</label>
  <input type="password" className="input w-full" placeholder="Password" />
  
  <button className="btn btn-neutral mt-4">Login</button>

  <div className="flex justify-between text-lg">
  </div>
    <span>Do not have an account?<Link to='/register'>Sign Up</Link></span>
    <Link to={'/forgetpassword'}>Forget Password</Link>
</fieldset>
</div>
</>
)
}

export default Login