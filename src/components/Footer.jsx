import React from 'react';
import './Footer.css';  
import H3 from './H3';
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const fullLogo = new URL("../images/logo.jpg", import.meta.url).href
  return(
    <>
      <footer>
        <div className="flex-column">
          <div className="list-item hidden-mobile">
            <div className="footer-links">
              <H3>Quick Links</H3>
              <a href="#">HOME</a>
              <a href="#about-me">ABOUT</a>
              <a href="#weddings">WEDDINGS</a>
              <a href="#namings">NAMINGS</a>
              <a href="#funerals">FUNERALS</a>
              {/*<a href="#gallery">GALLERY</a>*/}
              <a href="#prices">PRICES</a>
              <a href="#contact-me">CONTACT ME</a>
            </div>
          </div>
          <div className="list-item">
            <img src={fullLogo} alt="Lilac Tree Logo" className="footer-logo" />
          </div>
          <div className="list-item">
            <div className="footer-links">
              <H3>Get In Touch</H3>
              <a href="tel:07545661028">07545661028</a>
              <a href="mailto:lois@lilactreeceremonies.co.uk">lois@lilactreeceremonies.co.uk</a>
              <a href="https://www.instagram.com/loislilactree/" className="inline"><FaInstagram /> Follow Me</a>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">© {new Date().getFullYear()} Lois Stead | Lilac Tree Celebrancy Services</div>
    </>
  )
}
