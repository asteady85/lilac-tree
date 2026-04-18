import { useState } from "react"
import "../App.css"

export default function Header() {
  const logo = new URL("./../images/logo-small.png", import.meta.url).href
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="header-split">
      <nav className={menuOpen ? "nav-open" : ""}>
        <div className="mobile-header">
          <img src={logo} alt="Lilac Tree Logo" className="header-logo mobile-logo" />
          <button className="burger" onClick={() => setMenuOpen(m => !m)} aria-label="Toggle navigation">
            <span className="burger-bar" />
            <span className="burger-bar" />
            <span className="burger-bar" />
          </button>
        </div>
        <div className="nav-left nav-links">
          <a href="#">HOME</a>
          <a href="#about-me">ABOUT</a>
          <a href="#my-services">MY SERVICES</a>
          <a href="#weddings">WEDDINGS</a>
        </div>
        <img src={logo} alt="Lilac Tree Logo" className="header-logo center-logo desktop-logo" />
        <div className="nav-right nav-links">
          <a href="#namings">NAMINGS</a>
          <a href="#funerals">FUNERALS</a>
          {/*<a href="#gallery">GALLERY</a>*/}
          <a href="#prices">PRICES</a>
          <a href="#contact-me">CONTACT ME</a>
        </div>
        {menuOpen && (
          <div className="mobile-nav-overlay" onClick={() => setMenuOpen(false)}>
            <div className="mobile-nav-menu" onClick={e => e.stopPropagation()}>
              <img src={logo} alt="Lilac Tree Logo" className="header-logo mobile-logo" />
              <a href="#" onClick={() => setMenuOpen(false)}>HOME</a>
              <a href="#about-me" onClick={() => setMenuOpen(false)}>ABOUT</a>
              <a href="#my-services" onClick={() => setMenuOpen(false)}>MY SERVICES</a>
              <a href="#weddings" onClick={() => setMenuOpen(false)}>WEDDINGS</a>
              <a href="#namings" onClick={() => setMenuOpen(false)}>NAMINGS</a>
              <a href="#funerals" onClick={() => setMenuOpen(false)}>FUNERALS</a>
              {/*<a href="#gallery" onClick={() => setMenuOpen(false)}>GALLERY</a>*/}
              <a href="#prices" onClick={() => setMenuOpen(false)}>PRICES</a>
              <a href="#contact-me" onClick={() => setMenuOpen(false)}>CONTACT ME</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
