import React from 'react'
import { Icons } from '../../utils/icons'
import { useTypewriter } from '../../hooks/useTypewriter'
import './Hero.css'

function Hero() {
  const niches = ['Startups', 'Enterprises', 'Hotels', 'Real Estate', 'Healthcare', 'Education', 'E-Commerce']
  const typedText = useTypewriter(niches, 120, 60, 1800)

  return (
    <section className="hero" id="home">
      {/* Background effects */}
      <div className="hero-bg-element"></div>
      <div className="hero-bg-element"></div>
      <div className="hero-bg-element"></div>
      <div className="hero-grid-pattern"></div>
      <div className="hero-particles">
        {[...Array(8)].map((_, i) => <div key={i} className="particle"></div>)}
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge" id="hero-badge">
            <span className="badge-dot"></span>
            Trusted Growth Partner
          </div>

          <h1 className="hero-title" id="hero-title">
            Transform Your Business With{' '}
            <span className="highlight">Digital Excellence</span>
          </h1>

          <p className="hero-description" id="hero-description">
            We help ambitious <span className="typewriter-word">{typedText}<span className="typewriter-cursor">|</span></span> scale through performance marketing, lead generation, web development, and digital transformation.
          </p>

          <div className="hero-buttons" id="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              {Icons.send}
              Request Proposal
            </a>
            <a href="#contact" className="btn btn-secondary">
              {Icons.calendar}
              Book Free Consultation
            </a>
          </div>

          <div className="hero-trust" id="hero-trust">
            <div className="trust-item">
              <div className="trust-item-icon">{Icons.building}</div>
              <div>
                <div className="trust-item-value">100+</div>
                <div className="trust-item-label">Businesses Served</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-item-icon">{Icons.award}</div>
              <div>
                <div className="trust-item-value">95%</div>
                <div className="trust-item-label">Client Retention</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual" id="hero-visual">
          <div className="hero-image-wrapper">
            <img src="/images/illustrations/hero-illustration.png" alt="Digital Marketing Dashboard - BrandMate Digital" />
            <div className="hero-float-element el-1"></div>
            <div className="hero-float-element el-2"></div>
            <div className="hero-float-element el-3"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
