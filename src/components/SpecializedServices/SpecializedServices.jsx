import React from 'react'
import { Icons } from '../../utils/icons'
import './SpecializedServices.css'

function SpecializedServices() {
  const items = [
    {
      icon: Icons.rocket,
      title: 'Digital Marketing',
      text: 'Drive measurable growth through data-driven strategies.'
    },
    {
      icon: Icons.lineChart,
      title: 'SEO, Social Media, PPC & Performance Marketing',
      text: 'Increase brand visibility, search ranking, and boost return on ad spend (ROI).'
    },
    {
      icon: Icons.star,
      title: 'Influencer Marketing',
      text: 'Connect your brand with the right voices. Strategic collaborations that build trust, engagement, and authentic brand awareness.'
    },
    {
      icon: Icons.crosshair,
      title: 'Lead Generation',
      text: 'Target the right audience with precision. High-converting funnels and ad campaigns that deliver quality leads — not just numbers.'
    },
    {
      icon: Icons.shield,
      title: 'Cyber Security',
      text: 'Protect your digital assets with advanced security solutions, risk monitoring, and proactive threat prevention.'
    },
    {
      icon: Icons.monitor,
      title: 'Web & App Development',
      text: 'Custom websites and mobile apps built for performance, scalability, and seamless user experience across all devices.'
    },
  ]

  return (
    <section className="specialized-section" id="specialized">
      <div className="glow-1"></div>
      <div className="glow-2"></div>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <div className="section-badge dark">Specialized Solutions</div>
          <h2 className="section-title" id="specialized-title">Industry-Leading Expertise</h2>
          <p className="section-subtitle">Deep specialization in the services that matter most for your growth.</p>
        </div>
        <div className="specialized-grid">
          {items.map((item, i) => (
            <div className="specialized-card animate-on-scroll" key={i} id={`specialized-card-${i}`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="specialized-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpecializedServices
