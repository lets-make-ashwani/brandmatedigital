import React from 'react'
import { Link } from 'react-router-dom'
import { Icons } from '../../utils/icons'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="nav-logo">
              <img src="/images/logos/logo-white.png" alt="BrandMate Digital" className="nav-logo-img footer-logo-img" />
            </Link>
            <p>Your trusted growth partner. Helping ambitious businesses scale with intent, precision, and measurable outcomes.</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--teal-accent)', fontWeight: 700, margin: '12px 0 16px 0' }}>
              Let’s Grow Your Brand — Together
            </p>
            <div className="footer-social" id="footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-linkedin">{Icons.linkedin}</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-twitter">{Icons.twitter}</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-instagram">{Icons.instagram}</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-facebook">{Icons.facebook}</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-youtube">{Icons.youtube}</a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Digital Marketing</Link></li>
              <li><Link to="/services">SEO & Content</Link></li>
              <li><Link to="/services">Social Media</Link></li>
              <li><Link to="/services">Influencer Marketing</Link></li>
              <li><Link to="/services">Lead Generation</Link></li>
              <li><Link to="/services">Web & App Dev</Link></li>
            </ul>
          </div>

          {/* Specialized */}
          <div className="footer-column">
            <h4>Specialized</h4>
            <ul>
              <li><Link to="/services">Programmatic Ads</Link></li>
              <li><Link to="/services">UGC Shoot</Link></li>
              <li><Link to="/services">Cyber Security</Link></li>
              <li><Link to="/services">API Support</Link></li>
              <li><Link to="/services">Multi Lingual</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-column contact-col" style={{ gridColumn: 'span 2' }}>
            <h4>Contact Us</h4>
            <p style={{ color: 'var(--text-on-dark-muted)', marginBottom: '16px', fontSize: '0.95rem' }}>
              Ready to take your brand to the next level? Let’s build powerful digital strategies that drive real business growth.
            </p>
            
            <div className="contact-details-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '20px' }}>
              <div className="contact-details-left">
                <div className="footer-contact-item">
                  <div className="contact-icon">{Icons.mail}</div>
                  <p><a href="mailto:sales@brandmatedigital.com">sales@brandmatedigital.com</a></p>
                </div>
                <div className="footer-contact-item">
                  <div className="contact-icon">{Icons.phone}</div>
                  <p>
                    <a href="tel:7311108941">731 110 8941</a>, <a href="tel:7311108942">731 110 8942</a>
                  </p>
                </div>
                <div className="footer-contact-item">
                  <div className="contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/><path d="M2 12h20"/></svg>
                  </div>
                  <p><a href="https://brandmatedigital.com" target="_blank" rel="noopener noreferrer">brandmatedigital.com</a></p>
                </div>
              </div>

              <div className="contact-details-right">
                <div className="footer-contact-item" style={{ alignItems: 'flex-start' }}>
                  <div className="contact-icon" style={{ marginTop: '3px' }}>{Icons.mapPin}</div>
                  <div>
                    <strong style={{ color: 'var(--white)', fontSize: '0.85rem' }}>Kanpur UP (Head Office)</strong>
                    <p style={{ fontSize: '0.8rem', marginTop: '2px', color: 'var(--text-on-dark-muted)' }}>Kanpur, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom" id="footer-bottom">
          <p>© 2026 BrandMate Digital. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Service</Link>
            <Link to="/contact">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
