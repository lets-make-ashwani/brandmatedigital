import React from 'react'
import { Icons } from '../../utils/icons'
import './FinalCTA.css'

function FinalCTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="glow-1"></div>
      <div className="glow-2"></div>
      <div className="container">
        <div className="cta-content animate-on-scroll">
          <div className="section-badge dark" style={{ justifyContent: 'center' }}>Let's Grow Together</div>
          <h2 className="section-title" id="cta-title">Ready To Scale Your Business?</h2>
          <p className="section-subtitle">Let's build a digital growth engine for your business. Partner with us and experience the transformation.</p>
          <div className="cta-buttons" id="cta-buttons">
            <a href="#contact" className="btn btn-primary">
              {Icons.phone}
              Schedule Strategy Call
            </a>
            <a href="#contact" className="btn btn-secondary">
              {Icons.send}
              Request Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
