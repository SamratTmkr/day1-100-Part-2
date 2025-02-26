import React from 'react'

const Register = () => {
  return (
<>
<div className="w-1/2 mx-auto">
<fieldset className="fieldset w-full  bg-base-200 border border-base-300  my-10 px-10 py-10 rounded-box">
  <legend className="fieldset-legend text-center text-2xl">Sign Up</legend>
  
  <label className="fieldset-label">First Name</label>
  <input type="text" className="input w-full" placeholder="First Name" />
  <label className="fieldset-label">Last Name</label>
  <input type="text" className="input w-full" placeholder="Last Name" />
  <label className="fieldset-label">Date of Birth</label>
  <input type="date" className="input w-full" placeholder="DOB" />
  <label className="fieldset-label">Gender</label>
 <div className="flex  justify-evenly w-full border border-slate-300 bg-white rounded-md text-xl py-1">
 <div className='flex items-center text-xl'>
  <input type="radio" className="radio me-2 w-4 h-4" id='m' value={'male'} /> <label htmlFor='m'>Male</label>
  </div>
  <div className='flex items-center'>
  <input type="radio" className="radio me-2 w-4 h-4" id='f' value={'female'}/> <label htmlFor='f'>Female</label>
  </div>
  <div className='flex items-center'>
  <input type="radio" className="radio me-2 w-4 h-4" id='o' value={'others'} /> <label htmlFor='o'>Other</label>
  </div>
 </div>

  <label className="fieldset-label">Email</label>
  <input type="email" className="input w-full" placeholder="Email" />
  
  <label className="fieldset-label">Password</label>
  <input type="password" className="input w-full" placeholder="Password" />
  
  <label className="fieldset-label">Address(City)</label>
  <select name="city" id="city" defaultValue={""} className="w-full input text-slate-500">
  <option value="" disabled selected>Select your city</option>
  <option value="kathmandu">Kathmandu</option>
  <option value="bhaktapur">Bhaktapur</option>
  <option value="lalitpur">Lalitpur</option>
  <option value="pokhara">Pokhara</option>
  <option value="biratnagar">Biratnagar</option>
  <option value="birgunj">Birgunj</option>
  <option value="butwal">Butwal</option>
  <option value="dharan">Dharan</option>
  <option value="hetauda">Hetauda</option>
  <option value="janakpur">Janakpur</option>
  <option value="nepalgunj">Nepalgunj</option>
  <option value="damak">Damak</option>
  <option value="bharatpur">Bharatpur</option>
  <option value="itahari">Itahari</option>
  <option value="bhimdattanagar">Bhimdattanagar</option>
</select>



  <button className="btn btn-neutral mt-4">Sign Up</button>
</fieldset>
</div>
</>
)
}

export default Register