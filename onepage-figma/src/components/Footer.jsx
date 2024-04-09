import React from 'react'
import './Footer.css'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook , faLinkedin , faTwitter , faYoutube , faInstagram } from "@fortawesome/free-brands-svg-icons"
function Footer() {
  return (
    <div className='footer'> 
    <div className='footer-top'>
        <div>
            <p>@2023 Yourcompany</p>
        </div>
        <div className='footer-mid'>
            <h1 style={{color: "#37447E"}}>Landing</h1>
        </div>
        <div>
        <button className=" text-white py-2 px-24 btn-nav  ">
        Purchase Now
        </button>
        </div>
    </div>
    <div className='footer-bottom'>
    <ul className='btm-menu'>
        <li><a href=""></a>Home</li>
        <li><a href=""></a>About</li>
        <li><a href=""></a>Contact</li>
    </ul>
    <ul className='social'>
    <FontAwesomeIcon icon={faFacebook} className='icons' />
    <FontAwesomeIcon icon={faLinkedin} className='icons'/>
    <FontAwesomeIcon icon={faTwitter} className='icons'/>
    <FontAwesomeIcon icon={faYoutube} className='icons'/>
    <FontAwesomeIcon icon={faInstagram} className='icons'/>
    </ul>
    </div>
    </div>
   
  )
}

export default Footer