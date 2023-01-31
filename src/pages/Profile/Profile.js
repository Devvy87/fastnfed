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
          <p><strong>Your personal code:</strong> {generatePromocode()}</p>
          <br />
          <p className='discount'><strong>Discount 40% on food and drinks from the main menu in a "FastnFed"!</strong></p>

            <button  onClick={handleSignOut}>Sign Out</button>
          </div>
        </div>
    )
}

export default Profile