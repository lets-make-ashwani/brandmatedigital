import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['Home', 'About', 'Services', 'Portfolio', 'Case Studies', 'Blog', 'Certificates', 'Contact']

  const getRoute = (link) => {
    if (link === 'Home') return '/'
    if (link === 'Case Studies') return '/case-studies'
    return `/${link.toLowerCase().replace(' ', '-')}`
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <Link to="/" className="nav-logo" id="nav-logo" onClick={() => setMobileOpen(false)}>
          <img src="/images/logo-white.png" alt="BrandMate Digital" className="nav-logo-img" />
        </Link>
        <div className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`} id="nav-links">
          {links.map((link) => (
            <NavLink 
              key={link} 
              to={getRoute(link)}
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </NavLink>
          ))}
          <Link 
            to="/contact" 
            className="btn btn-primary nav-cta" 
            id="nav-cta" 
            onClick={() => setMobileOpen(false)}
          >
            Request Proposal
          </Link>
        </div>
        <button
          className="nav-mobile-toggle"
          id="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
