import React from 'react'
import './TechStack.css'

function TechStack() {
  const techs = [
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="#61DAFB"><circle cx="12" cy="12" r="2.2"/><path d="M12 21.5c-1.3 0-4.3-.7-6.1-4.2C4.1 13.8 4 10 4.7 7.4c.7-2.5 2.2-3.9 3.3-3.9s2.6 1.4 3.3 3.9c.7-2.5 2.2-3.9 3.3-3.9s2.6 1.4 3.3 3.9c.7 2.6.6 6.4-1.2 9.9-1.8 3.5-4.8 4.2-6.1 4.2z" fill="none" stroke="#61DAFB" strokeWidth="1"/><ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="#61DAFB" strokeWidth="1"/><ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)"/></svg>, name: 'React' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 19.5h20L12 2zm0 4l7 13H5l7-13z"/></svg>, name: 'Next.js' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="#68A063"><path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.275-.072-.318.493-.174.593-.213 1.112-.513.056-.03.129-.019.185.015l1.873 1.114c.068.037.166.037.234 0l7.308-4.22c.072-.04.116-.12.116-.204V7.99c0-.088-.044-.168-.116-.208l-7.308-4.216c-.068-.04-.162-.04-.234 0L4.577 7.782c-.072.04-.12.124-.12.208v8.422c0 .084.048.164.12.204l2.004 1.16c1.088.544 1.756-.096 1.756-.736V8.788c0-.12.096-.216.216-.216h.948c.116 0 .216.096.216.216v8.252c0 1.444-.784 2.272-2.152 2.272-.42 0-.752 0-1.676-.456l-1.916-1.104A1.553 1.553 0 013.2 16.412V7.99c0-.564.3-1.088.788-1.372L11.3 2.398a1.635 1.635 0 011.4 0l7.308 4.22c.488.284.792.808.792 1.372v8.422c0 .564-.304 1.088-.792 1.372l-7.308 4.22c-.224.12-.488.18-.7.18z"/></svg>, name: 'Node.js' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="#21759B"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 1c4.962 0 9 4.038 9 9s-4.038 9-9 9-9-4.038-9-9 4.038-9 9-9z"/><path d="M3.5 12l3.5 8.5L10 12l2 8 4.5-10 1.5 2h3"/></svg>, name: 'WordPress' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="#96BF48"><path d="M15.337 3.568c-.084-.084-.168-.084-.252-.084-.084 0-.168.084-.168.168v.588c0 .252-.168.42-.42.42h-1.092c-.252 0-.42.168-.42.42v.924c0 .252.168.42.42.42h1.092c.252 0 .42.168.42.42v7.812c0 .252.168.42.42.42h.924c.252 0 .42-.168.42-.42V6.424c0-.252.168-.42.42-.42h1.092c.252 0 .42-.168.42-.42v-.924c0-.252-.168-.42-.42-.42h-1.092c-.252 0-.42-.168-.42-.42v-.588c0-.084-.084-.168-.168-.168-.084 0-.168 0-.252.084L15.337 3.568z"/></svg>, name: 'Shopify' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 12h8M12 8v8" stroke="#EA4335" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" fill="none" stroke="#FBBC05" strokeWidth="1.5"/></svg>, name: 'Google Ads' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z"/></svg>, name: 'Meta Ads' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>, name: 'CRM Systems' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>, name: 'Analytics' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M12 17v4M8 21h8"/><path d="M7 8l3 3-3 3"/><line x1="13" y1="14" x2="17" y2="14"/></svg>, name: 'Automation' },
  ]

  return (
    <section className="tech-section" id="technology">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <div className="section-badge">Technology Stack</div>
          <h2 className="section-title" id="tech-title">Powered by Modern Technology</h2>
          <p className="section-subtitle">We leverage industry-leading tools and platforms to deliver excellence.</p>
        </div>
        <div className="tech-grid">
          {techs.map((tech, i) => (
            <div className="tech-item animate-on-scroll" key={i} id={`tech-item-${i}`} style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="tech-item-icon">{tech.icon}</div>
              <h4>{tech.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
