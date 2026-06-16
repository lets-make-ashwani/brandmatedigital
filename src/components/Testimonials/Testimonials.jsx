import React from 'react'
import { Icons } from '../../utils/icons'
import './Testimonials.css'

function Testimonials() {
  const reviews = [
    {
      initials: 'RK',
      name: 'Rajesh Kumar',
      company: 'CEO, LuxeJewels',
      text: 'BrandMate Digital transformed our online presence completely. Our e-commerce revenue grew 340% in just 6 months. Their strategic approach and creative execution are world-class.',
      rating: 5,
      color: '#FFD700',
    },
    {
      initials: 'PS',
      name: 'Priya Sharma',
      company: 'Director, GrandResort Hotels',
      text: 'The team\'s understanding of luxury hospitality marketing is exceptional. They delivered a comprehensive digital strategy that significantly increased our bookings and brand visibility.',
      rating: 5,
      color: '#52D6C5',
    },
    {
      initials: 'AM',
      name: 'Arun Mehta',
      company: 'Founder, PropertyVista',
      text: 'Our lead generation went through the roof after partnering with BrandMate Digital. The quality of leads and the ROI on our campaigns exceeded all expectations.',
      rating: 5,
      color: '#2BB3FF',
    },
  ]

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <div className="section-badge">Client Feedback</div>
          <h2 className="section-title" id="testimonials-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real testimonials from real partners who've experienced real growth.</p>
        </div>
        <div className="testimonials-grid">
          {reviews.map((review, i) => (
            <div className="testimonial-card animate-on-scroll" key={i} id={`testimonial-card-${i}`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="testimonial-stars">
                {[...Array(review.rating)].map((_, j) => <span key={j}>{Icons.starFilled}</span>)}
              </div>
              <p className="testimonial-text">{review.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: `linear-gradient(135deg, ${review.color}, ${review.color}99)` }}>{review.initials}</div>
                <div className="testimonial-info">
                  <h4>{review.name}</h4>
                  <p>{review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
