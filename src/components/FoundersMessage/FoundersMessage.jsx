import React from 'react'
import './FoundersMessage.css'

function FoundersMessage() {
  return (
    <section className="founder-message-section" id="founders-message">
      <div className="container">
        <div className="founder-grid">
          <div className="founder-content animate-on-scroll">
            <div className="section-badge dark">Founder's Message</div>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Scaling With Intent & Clarity</h2>
            <div className="founder-quote-large">
              “At BrandMate Digital, growth is engineered - not assumed.”
            </div>
            <p className="founder-text">
              At BrandMate Digital, we believe growth is not about noise - it's about clarity, strategy, and execution. In today's rapidly evolving digital ecosystem, brands don't fail due to lack of effort; they fail due to lack of direction. BrandMate Digital was built with a clear purpose: to help businesses scale with intent, precision, and measurable outcomes.
            </p>
            <p className="founder-text">
              We work closely with startups, founders, and growing enterprises to build strong digital foundations, create high-impact content, and drive sustainable growth through data backed marketing strategies. Our approach is rooted in understanding the business first — the market, the audience, and the long-term vision — and then designing solutions that deliver real ROI.
            </p>
            <p className="founder-text">
              Beyond marketing, we focus on brand positioning, content scalability, and performance-driven execution, enabling our clients to compete, grow, and lead in their respective industries. As we continue to expand our capabilities across digital marketing, web development, content production, podcasts, and UGC-driven growth, our commitment remains unchanged: to be a trusted growth partner, not just a service provider.
            </p>
            <div className="founder-profile">
              <div className="founder-info">
                <h4>Vikalp Srivastava</h4>
                <p>Founder & CEO, BrandMate Digital</p>
              </div>
            </div>
          </div>
          <div className="founder-visual animate-on-scroll">
            <div className="founder-visual-card">
              <img src="/images/team/ceo-image.jpg" alt="Vikalp Srivastava - Founder & CEO" />
              <div className="founder-badge-quote">
                "Growth is engineered - not assumed."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoundersMessage
