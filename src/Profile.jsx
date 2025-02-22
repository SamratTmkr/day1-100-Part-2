import React from 'react'
import {useParams} from 'react-router-dom'



const Profile = () => {
  const params = useParams()
  //returns obj with variable
  const username = params.username
  return (
    <div>
        Welcome, {username}
    </div>
  )
}

export default Profile