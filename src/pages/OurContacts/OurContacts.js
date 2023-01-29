import React from 'react'
import './OurContacts.css'
const OurContacts = () => {
  return (
    <div className='contacts'>
  <div className="left"></div>
  <div className="right">
    <h1>Contact Us</h1>
    <form id='contact-form'>
     <label htmlFor="name">Full Name</label>
     <input name='name' placeholder='Enter Full Name' type='text' />
     <label htmlFor="email">Email</label>
     <input name='email' placeholder='Enter email' type='email' />
     <label htmlFor="message">Your message</label>
     <textarea name='message' placeholder='Enter your message' type='text' />
     <button type='submit'>Send message</button>

    </form>
  </div>



    </div>
  )
}

export default OurContacts