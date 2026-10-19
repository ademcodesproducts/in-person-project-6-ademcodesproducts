import { useState } from 'react'

function Navbar() {
  // State needed: whether the mobile menu is open.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = (event) => {
    event.preventDefault()
    document.querySelector(event.currentTarget.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }
  return <nav id="navbar"><div className="nav-brand"><span>Alex Johnson</span></div><ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
    {['home', 'about', 'skills', 'projects', 'contact'].map((section) => <li key={section}><a href={`#${section}`} className="nav-link" onClick={navigate}>{section}</a></li>)}
  </ul><button className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`} aria-label="Toggle navigation menu" aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen((open) => !open)}><span></span><span></span><span></span></button></nav>
}
export default Navbar
