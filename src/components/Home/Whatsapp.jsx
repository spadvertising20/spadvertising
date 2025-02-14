import React from 'react'
import whatsapp from '../../assets/Navbar/watsapp.png';
import './Whatsapp.css'

export default function Whatsapp() {
  return (
    <div className='whatsapp'>
      <a aria-label="Chat on WhatsApp" href="https://wa.me/918085354646">
        <img src={whatsapp} alt="" />
      </a>
    </div>
  )
}
