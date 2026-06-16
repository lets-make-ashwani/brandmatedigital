import React from 'react'
import { Icons } from '../../utils/icons'
import './About.css'

function About() {
  const aboutCards = [
    { icon: Icons.target, title: 'Digital Excellence', text: 'Founded with a vision to transform businesses through innovative and result-driven digital strategies, BrandMate Digital has evolved into a trusted growth partner for brands seeking impactful digital solutions.' },
    { icon: Icons.zap, title: 'Creativity & Data', text: 'Our team of experienced professionals blends creativity with data-driven insights to craft marketing campaigns that don’t just capture attention — they deliver measurable business outcomes.' },
    { icon: Icons.users, title: 'Long-Term Partnerships', text: 'We focus on building long-term partnerships by deeply understanding each client’s unique challenges and goals, enabling us to design customized strategies that drive sustainable growth and real market impact.' },
  ]

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-card animate-on-scroll" id="about-image">
            <img src="/images/illustrations/about-illustration.png" alt="About BrandMate Digital" />
            <div className="about-image-overlay">
              <h4>Digital Transformation</h4>
              <p>Driven by creativity, defined by results</p>
            </div>
          </div>
          <div className="about-content animate-on-scroll">
            <div className="section-badge">Who We Are</div>
            <h2 className="section-title" id="about-title">
              Transform Your Business with <span className="gradient" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Digital Excellence</span>
            </h2>
            <p className="section-subtitle">
              We focus on building long-term partnerships by deeply understanding each client's unique challenges and goals, designing customized strategies that drive sustainable growth.
            </p>
            <div className="about-cards">
              {aboutCards.map((card, i) => (
                <div className="about-card" key={i} id={`about-card-${i}`}>
                  <h4>
                    <span className="card-icon">{card.icon}</span>
                    {card.title}
                  </h4>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
