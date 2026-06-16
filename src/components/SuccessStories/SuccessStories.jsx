import React from 'react'
import './SuccessStories.css'

function SuccessStories() {
  const stories = [
    { industry: 'Jewellery', handle: '@poojajewellersrajkot', title: 'Pooja Jewellers Rajkot E-Commerce Growth', reach: '340%', leads: '2,400+', roi: '520%', color: '#FFD700', icon: 'jewellery' },
    { industry: 'Luxury Hotel', handle: '@rosewoodhotelkanpur', title: 'Rosewood Hotel Kanpur Digital Presence', reach: '280%', leads: '1,800+', roi: '410%', color: '#E8A87C', icon: 'hotel' },
    { industry: 'Real Estate', handle: '@vidhan.group', title: 'Vidhan Group Real Estate Sales Funnel', reach: '420%', leads: '3,200+', roi: '680%', color: '#2BB3FF', icon: 'estate' },
    { industry: 'Real Estate', handle: '@real__estate_kerala', title: 'Real Estate Kerala Targeted Campaigns', reach: '390%', leads: '2,100%', roi: '510%', color: '#52D6C5', icon: 'estate' },
    { industry: 'Healthcare Equipment', handle: '@medvantagehc', title: 'MedVantage HC Brand Visibility & Leads', reach: '310%', leads: '1,500%', roi: '390%', color: '#A78BFA', icon: 'healthcare' },
    { industry: 'Tour & Travels', handle: '@bhatakna', title: 'Bhatakna Tour & Travels Booking Scalability', reach: '380%', leads: '4,000%', roi: '550%', color: '#F97316', icon: 'travel' },
    { industry: 'Education Brand', handle: '@srmulucknow_official', title: 'SRM University Student Acquisitions', reach: '260%', leads: '5,500%', roi: '470%', color: '#EC4899', icon: 'education' },
  ]

  const industryIcons = {
    'jewellery': <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 3h12l4 6-10 13L2 9l4-6z"/><path d="M11 3l1 6h6"/><path d="M7 9l5 13 5-13"/><path d="M2 9h20"/></svg>,
    'hotel': <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2z"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>,
    'estate': <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9v.01"/><path d="M9 12v.01"/><path d="M9 15v.01"/><path d="M9 18v.01"/></svg>,
    'healthcare': <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    'education': <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 6 3 6 3s3 0 6-3v-5"/></svg>,
    'travel': <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>,
  }

  return (
    <section className="success-section" id="case-studies">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <div className="section-badge">Success Stories</div>
          <h2 className="section-title" id="success-title">Proven Results Across Industries</h2>
          <p className="section-subtitle">Real metrics, actual growth, and validated ROI from our partnership portfolio.</p>
        </div>
        <div className="success-grid">
          {stories.map((story, i) => (
            <div className="success-card animate-on-scroll" key={i} id={`success-card-${i}`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="success-card-image" style={{ background: `linear-gradient(135deg, ${story.color}18, ${story.color}35)` }}>
                <div className="success-header-labels" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span className="success-industry">{story.industry}</span>
                  <span className="success-handle" style={{ fontSize: '0.8rem', opacity: 0.8, color: 'var(--text-secondary)' }}>{story.handle}</span>
                </div>
                <div className="success-card-icon-wrapper" style={{ color: story.color }}>
                  {industryIcons[story.icon]}
                </div>
              </div>
              <div className="success-card-body">
                <h3>{story.title}</h3>
                <div className="success-metrics">
                  <div className="success-metric">
                    <div className="success-metric-value">{story.reach}</div>
                    <div className="success-metric-label">Reach Growth</div>
                  </div>
                  <div className="success-metric">
                    <div className="success-metric-value">{story.leads}</div>
                    <div className="success-metric-label">Leads Generated</div>
                  </div>
                  <div className="success-metric">
                    <div className="success-metric-value">{story.roi}</div>
                    <div className="success-metric-label">ROI Improvement</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
