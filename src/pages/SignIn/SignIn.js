import React, {useState} from 'react'
import './SignIn.css'
import { useDispatch } from 'react-redux'
import {signIn} from '../../redux/slices/userSlice'

const SignIn = () => {
const [name, setName] = useState('')
const [surName, setSurname] = useState('')
const [email, setEmail] = useState('')

const dispatch = useDispatch()

const signin = (e) => {
  e.preventDefault()
  dispatch(signIn({name, surName, email}))
  console.log(name, email)
}

  return (
    <div className="center">
        <div className="signin">
            <h1>Sign in</h1>
            <form onSubmit={signin} name='signin_form'>
              <input type="text" 
              value={name}
              required
              placeholder='Enter name'
              onChange={(e) => setName(e.target.value)}
              />
                <input type="text" 
              value={surName}
              required
              placeholder='Enter surname'
              onChange={(e) => setSurname(e.target.value)}
              />
              <input type="email" 
              value={email}
              required
              placeholder='Enter email'
              onChange={(e) => setEmail(e.target.value)}/>

<button type='submit'>Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default SignIn