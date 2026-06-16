import React from 'react'
import './Portfolio.css'

function Portfolio() {
  const portfolioItems = [
    { 
      label: 'Curl Care Salon', 
      url: 'www.curlcaresalon.com',
      category: 'E-Commerce Portal',
      tech: 'React / Shopify',
      description: 'Premium beauty and hair care e-commerce store featuring dynamic catalog, seamless booking, and high-performance checkouts.',
      type: 'curlcare'
    },
    { 
      label: 'KyonKat', 
      url: 'www.kyonkat.com',
      category: 'Pet Boarding & Grooming Services',
      tech: 'Custom MERN App',
      description: 'Interactive booking application with live session status, client management dashboard, and automated scheduling.',
      type: 'kyonkat'
    },
    { 
      label: 'Mr n Mrs Pet', 
      url: 'www.mrnmrspet.com',
      category: 'Pet Adoption & Care Directory',
      tech: 'React / Node.js / MongoDB',
      description: 'Comprehensive adoption search engine with category filters, verification systems, and shelter listing capabilities.',
      type: 'mrnmrspet'
    },
    { 
      label: 'MedVantage', 
      url: 'www.medvantagehc.com',
      category: 'Healthcare & Medical Systems',
      tech: 'Next.js / CSS Modules',
      description: 'Enterprise healthcare site showcasing high-precision medical machinery setups, detailed technical brochures, and client portals.',
      type: 'medvantage'
    }
  ]

  const renderPreview = (type) => {
    switch (type) {
      case 'curlcare':
        return (
          <div className="preview-curlcare">
            <div className="pc-nav">
              <span className="pc-logo">CURL CARE</span>
              <div className="pc-nav-links">
                <span>Shop</span>
                <span>Salon</span>
                <span>Book</span>
              </div>
              <span className="pc-cart-icon">🛒</span>
            </div>
            <div className="pc-hero">
              <h4>Reveal Your Natural Curls</h4>
              <p>Premium Hair Care & Styling Solutions</p>
              <button className="pc-btn">Book Appointment</button>
            </div>
            <div className="pc-products">
              <div className="pc-product-card">
                <div className="pc-prod-img prod-1"></div>
                <div className="pc-prod-title">Hydrating Butter</div>
                <div className="pc-prod-price">$24.00</div>
              </div>
              <div className="pc-product-card">
                <div className="pc-prod-img prod-2"></div>
                <div className="pc-prod-title">Curl Defining Gel</div>
                <div className="pc-prod-price">$18.00</div>
              </div>
              <div className="pc-product-card">
                <div className="pc-prod-img prod-3"></div>
                <div className="pc-prod-title">Satin Bonnet</div>
                <div className="pc-prod-price">$15.00</div>
              </div>
            </div>
          </div>
        )
      case 'kyonkat':
        return (
          <div className="preview-kyonkat">
            <div className="pk-sidebar">
              <div className="pk-logo">🐾 KyonKat</div>
              <div className="pk-menu-item active">🏨 Boarding</div>
              <div className="pk-menu-item">✂️ Grooming</div>
              <div className="pk-menu-item">⚙️ Settings</div>
            </div>
            <div className="pk-content">
              <div className="pk-header">
                <h5>Boarding Tracker</h5>
                <span className="pk-status-dot">● Live</span>
              </div>
              <div className="pk-stats">
                <div className="pk-stat-box">
                  <div className="pk-stat-val">12</div>
                  <div className="pk-stat-lbl">Pets Active</div>
                </div>
                <div className="pk-stat-box">
                  <div className="pk-stat-val">4</div>
                  <div className="pk-stat-lbl">Rooms Left</div>
                </div>
              </div>
              <div className="pk-pet-list">
                <div className="pk-pet-row">
                  <span className="pk-pet-avatar">🐶</span>
                  <div className="pk-pet-info">
                    <div className="pk-pet-name">Max (Retriever)</div>
                    <div className="pk-pet-bar"><div className="pk-fill" style={{ width: '80%' }}></div></div>
                  </div>
                  <span className="pk-pet-badge checkin">Room A1</span>
                </div>
                <div className="pk-pet-row">
                  <span className="pk-pet-avatar">🐱</span>
                  <div className="pk-pet-info">
                    <div className="pk-pet-name">Luna (Siamese)</div>
                    <div className="pk-pet-bar"><div className="pk-fill" style={{ width: '45%' }}></div></div>
                  </div>
                  <span className="pk-pet-badge grooming">Grooming</span>
                </div>
              </div>
            </div>
          </div>
        )
      case 'mrnmrspet':
        return (
          <div className="preview-mrnmrspet">
            <div className="pm-header">
              <span className="pm-logo">🐾 Mr & Mrs Pet</span>
              <div className="pm-search">Search 3000+ verified pets...</div>
            </div>
            <div className="pm-filters">
              <span className="pm-filter active">Dogs 🐕</span>
              <span className="pm-filter">Cats 🐈</span>
              <span className="pm-filter">Birds 🦜</span>
            </div>
            <div className="pm-grid">
              <div className="pm-card">
                <div className="pm-pet-pic pic-1">🐕</div>
                <div className="pm-card-body">
                  <h6>Buddy</h6>
                  <p>Beagle • 2 Months</p>
                  <span className="pm-verified">✓ Verified</span>
                </div>
              </div>
              <div className="pm-card">
                <div className="pm-pet-pic pic-2">🐈</div>
                <div className="pm-card-body">
                  <h6>Bella</h6>
                  <p>Siamese • 3 Months</p>
                  <span className="pm-verified">✓ Verified</span>
                </div>
              </div>
            </div>
          </div>
        )
      case 'medvantage':
        return (
          <div className="preview-medvantage">
            <div className="mv-header">
              <span className="mv-logo">🏥 MedVantage Systems</span>
              <span className="mv-sys-status">Diagnostic Monitor V9</span>
            </div>
            <div className="mv-dashboard">
              <div className="mv-screen">
                <div className="mv-screen-title">ECG Realtime Waveform</div>
                <div className="mv-wave-container">
                  <svg className="mv-wave-svg" viewBox="0 0 300 60">
                    <path 
                      className="mv-wave-path" 
                      d="M0 30 L30 30 L40 10 L50 50 L60 30 L90 30 L100 10 L110 50 L120 30 L150 30 L160 10 L170 50 L180 30 L210 30 L220 10 L230 50 L240 30 L270 30 L280 10 L290 50 L300 30"
                      fill="none" 
                      stroke="#14b8a6" 
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </div>
              <div className="mv-metrics">
                <div className="mv-metric-item">
                  <span className="mv-m-lbl">SpO2</span>
                  <span className="mv-m-val green">98%</span>
                </div>
                <div className="mv-metric-item">
                  <span className="mv-m-lbl">Pulse</span>
                  <span className="mv-m-val animate-pulse">72</span>
                </div>
                <div className="mv-metric-item">
                  <span className="mv-m-lbl">Temp</span>
                  <span className="mv-m-val">36.7°</span>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-header animate-on-scroll" style={{ marginBottom: '40px' }}>
          <div className="section-badge">Our Portfolio</div>
          <h2 className="section-title" id="portfolio-title">Websites Design Portfolio</h2>
          <p className="section-subtitle">Premium websites crafted for impact and conversion.</p>
        </div>
        <div className="portfolio-grid-new">
          {portfolioItems.map((item, i) => (
            <div className="browser-mockup-card animate-on-scroll" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address">{item.url}</div>
              </div>
              <div className="browser-body">
                {renderPreview(item.type)}
                <div className="browser-overlay">
                  <div className="overlay-content">
                    <span className="overlay-tag">{item.category}</span>
                    <h3>{item.label}</h3>
                    <p>{item.description}</p>
                    <span className="tech-badge">{item.tech}</span>
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

export default Portfolio
