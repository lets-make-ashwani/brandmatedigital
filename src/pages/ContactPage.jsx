import React, { useState } from 'react'
import { Icons } from '../utils/icons'
import './ContactPage.css'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Digital Marketing',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)

  const faqs = [
    {
      q: 'How quickly can we launch a marketing campaign?',
      a: 'We typically align on strategy and launch campaigns within 7 to 10 business days after completing the client onboarding audit.'
    },
    {
      q: 'What visual assets and platforms do you specialize in?',
      a: 'We specialize in multi-channel strategies including Google Ads, Meta (Instagram/Facebook) Ads, Programmatic buys, Influencer collaborations, custom MERN/NextJS web development, and high-converting performance copy.'
    },
    {
      q: 'Do you offer customized analytics dashboards?',
      a: 'Yes, every client partner receives access to a custom real-time analytics dashboard mapping conversion rates, ad spend efficiency, and clear ROI outcomes.'
    },
    {
      q: 'How does onboarding work?',
      a: 'We start with a free growth strategy session, audit your current funnels, propose a scope of work, and setup tracking systems before going live.'
    }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate API call
    setSubmitted(true)
  }

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx)
  }

  return (
    <div className="contact-page">
      <header className="contact-hero">
        <div className="container">
          <span className="section-badge dark">Get In Touch</span>
          <h1>Let's Build Your <span className="highlight">Growth Engine</span></h1>
          <p className="contact-hero-subtitle">
            Ready to scale your business with intent and clarity? Tell us about your goals and our strategy team will outline a custom roadmap.
          </p>
        </div>
      </header>

      <section className="contact-section-layout">
        <div className="container">
          <div className="contact-grid-wrapper">
            {/* Lead capture form */}
            <div className="contact-form-container">
              {submitted ? (
                <div className="form-success-state">
                  <div className="success-icon">✓</div>
                  <h2>Proposal Request Received!</h2>
                  <p>Thank you for reaching out. A growth strategist from our executive team will review your details and schedule our introductory call within 24 hours.</p>
                  <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Submit Another Inquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-lead-form">
                  <h3>Request Proposal</h3>
                  <p className="form-sub">Fill out this quick questionnaire and receive a free digital growth strategy blueprint.</p>
                  
                  <div className="form-row-two">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="e.g. Vikalp Srivastava" 
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Work Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        placeholder="e.g. name@company.com" 
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row-two">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required 
                        placeholder="e.g. +91 731 110 8941" 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company Name</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        required 
                        placeholder="e.g. BrandMate Digital" 
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Target Channel / Service</label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option>Digital Marketing</option>
                      <option>SEO & Performance Ads</option>
                      <option>Influencer Marketing</option>
                      <option>Web & App Development</option>
                      <option>Cyber Security</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Brief Project Details & Goals</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      required
                      placeholder="Tell us about your target market, budget, and growth metrics..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    {Icons.send}
                    Submit Proposal Request
                  </button>
                </form>
              )}
            </div>

            {/* Contact details cards */}
            <div className="contact-details-panel">
              <div className="info-block">
                <h3>Contact Coordinates</h3>
                <div className="info-item">
                  <div className="info-icon">{Icons.mail}</div>
                  <div>
                    <h4>Inquiries</h4>
                    <p><a href="mailto:sales@brandmatedigital.com">sales@brandmatedigital.com</a></p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">{Icons.phone}</div>
                  <div>
                    <h4>Consultation Lines</h4>
                    <p><a href="tel:7311108941">731 110 8941</a>, <a href="tel:7311108942">731 110 8942</a></p>
                  </div>
                </div>
              </div>

              <div className="info-block">
                <h3>Regional Offices</h3>
                <div className="offices-grid">
                  <div className="office-card">
                    <strong>Kanpur (HQ)</strong>
                    <p>Uttar Pradesh, India</p>
                  </div>
                  <div className="office-card">
                    <strong>Gurgaon Office</strong>
                    <p>Sector 60, Gurgaon, HR</p>
                  </div>
                  <div className="office-card">
                    <strong>Bengaluru Office</strong>
                    <p>Whitefield, Bengaluru, KA</p>
                  </div>
                  <div className="office-card">
                    <strong>Mumbai Office</strong>
                    <p>BKC, Mumbai, MH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Panel */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header animate-on-scroll visible">
            <span className="section-badge">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-wrapper">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`faq-item ${activeFaq === i ? 'active' : ''}`}
                onClick={() => toggleFaq(i)}
              >
                <div className="faq-question">
                  <h4>{faq.q}</h4>
                  <span className="faq-toggle">{activeFaq === i ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
