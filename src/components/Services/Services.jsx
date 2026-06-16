import React from 'react'
import { Icons } from '../../utils/icons'
import './Services.css'

function Services() {
  const services = [
    { icon: Icons.search, title: 'Market Research & Consumer Insights', text: 'Analyze market dynamics, competitor landscapes, and consumer habits to guide strategies.' },
    { icon: Icons.star, title: 'Influencer Marketing', text: 'Connect your brand with the right voices for trust, engagement, and authentic brand awareness.' },
    { icon: Icons.smartphone, title: 'Social Media Marketing', text: 'Establish organic presence, run paid campaigns, and build highly engaged digital communities.' },
    { icon: Icons.cog, title: 'Programmatic Solutions', text: 'Automated bidding and ad placements targeting high-intent users with absolute efficiency.' },
    { icon: Icons.rocket, title: 'Digital Marketing', text: 'Comprehensive digital strategies combining multiple acquisition channels to drive core business growth.' },
    { icon: Icons.target, title: 'Marketing Strategy Consulting', text: 'High-level advisory to build scalable digital foundations, brand positioning, and clear ROI direction.' },
    { icon: Icons.lineChart, title: 'Digital Media Planning & Buying', text: 'Maximize ROI by targeting correct platforms, budgeting effectively, and negotiating prime ad placements.' },
    { icon: Icons.users, title: 'Multi Lingual Marketing', text: 'Reach diverse markets and demographics by localizing content across multiple languages.' },
    { icon: Icons.plug, title: 'API Support', text: 'Develop custom integrations and connect platforms seamlessly for smooth data and operations flow.' },
    { icon: Icons.crosshair, title: 'Lead Generation', text: 'Build high-converting funnels and precision ad campaigns delivering quality leads — not just empty numbers.' },
    { icon: Icons.settings, title: 'Marketing Automation', text: 'Automate customer journeys, nurture leads, and sync platforms to save resources.' },
    { icon: Icons.penTool, title: 'Video Creation & Marketing', text: 'End-to-end production of engaging videos, UGC shoots, and reels optimized for platform performance.' },
    { icon: Icons.fileText, title: 'Content & SEO Strategy', text: 'Build search authority and domain rating with premium content strategy and optimization.' },
    { icon: Icons.monitor, title: 'Web & App Development', text: 'Custom websites, portals, and mobile apps built for premium performance, speed, and responsiveness.' },
    { icon: Icons.shield, title: 'Cyber Security', text: 'Protect your digital assets, portals, and customer data with advanced security solutions.' },
  ]

  // Double the services array to allow seamless continuous scrolling
  const doubledServices = [...services, ...services]

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <div className="section-badge">Our Services</div>
          <h2 className="section-title" id="services-title">Comprehensive Digital Solutions</h2>
          <p className="section-subtitle">From strategy to execution — everything you need to dominate your market.</p>
        </div>
      </div>

      <div className="services-marquee-wrapper animate-on-scroll">
        <div className="services-marquee-track">
          {doubledServices.map((s, i) => (
            <div className="service-card" key={i} id={`service-card-${i}`}>
              <div className="service-card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="learn-more">
                Learn More
                {Icons.arrowRight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
