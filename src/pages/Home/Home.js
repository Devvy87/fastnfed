import React from 'react'
import './Home.css'
import { Link } from'react-router-dom'
const Home = () => {
  return (
    <div className='home'>
<div className="container">
  <h1>Indian curry</h1>
  <p>Discover India with us!</p>
  <p>Create an account and  get a <br /> 40% discount  on all menu! </p>
  <Link to='/menu'>  <button>Order now!</button></Link>

</div>


    </div>
  )
}

export default Home