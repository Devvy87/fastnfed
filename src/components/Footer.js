import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <p>&copy; Fast-n-Fed.com  2023</p>
            <InstagramIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
        </div>
    </div>
  )
}

export default Footer