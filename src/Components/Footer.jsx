import React from 'react'
import facebook from '../images/ico-facebook.png'
import tickTock from '../images/ico-tiktok.png'
import instagram from '../images/ico-instagram.png'
import whatsapp from '../images/ico-whatsapp.png'
// import doctor from "../images/doctor.jpg"

const Footer = () => {
  return (
    <footer > 
          <a href='https://www.facebook.com/'><img  src={facebook} alt="facebook" /></a>
          <a href='https://www.reddit.com'><img  src={tickTock} alt="reddit" /></a>
          <a href='https://www.instagram.com'><img  src={instagram} alt="instagram" /></a>
          <a href='https://twitter.com/home?lang=es'><img  src={whatsapp} alt="twitter" /></a>
    </footer>
  )
}

export default Footer