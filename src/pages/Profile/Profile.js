import React from 'react'
import {signOut} from '../../redux/slices/userSlice'
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector(state => state.user)
    console.log(user.email,user.surname, user.name)

const generatePromocode = (word) => {
  word = (Math.random() + 1).toString(36).substring(7);
  return word
}

    const dispatch = useDispatch()

    const handleSignOut = () => {
      dispatch(signOut())
    }
  
    return (
        <div className='center'>
          <div className='profile'>
            <h1>Profile: {user.name}</h1>
            <p>
            <strong>Name: </strong>{user.name}
          </p>
          <p>
            <strong>Surname: </strong>{user.surName}
          </p>
          <p>
            <strong>Email: </strong>
            {`${user.email}`}
          </p>
          <p>Your personal code: {generatePromocode()}</p>
            <span onClick={handleSignOut}>Sign Out</span>
          </div>
        </div>
    )
}

export default Profile