import React from 'react'
import { Icons } from '../../utils/icons'
import './Process.css'

function Process() {
  const steps = [
    { num: 1, icon: Icons.microscope, title: 'Research', text: 'Deep market analysis & competitor research' },
    { num: 2, icon: Icons.map, title: 'Strategy', text: 'Custom growth roadmap & KPI definition' },
    { num: 3, icon: Icons.edit3, title: 'Content', text: 'Premium content creation & brand storytelling' },
    { num: 4, icon: Icons.megaphone, title: 'Marketing', text: 'Multi-channel campaign execution' },
    { num: 5, icon: Icons.lineChart, title: 'Optimization', text: 'Data-driven A/B testing & refinement' },
    { num: 6, icon: Icons.rocketLaunch, title: 'Growth', text: 'Scale winning strategies for maximum ROI' },
  ]

  return (
    <section className="process-section" id="process">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <div className="section-badge">Our Process</div>
          <h2 className="section-title" id="process-title">How We Drive Your Growth</h2>
          <p className="section-subtitle">A proven 6-step methodology that delivers consistent, measurable results.</p>
        </div>
        <div className="process-timeline">
          {steps.map((step, i) => (
            <div className="process-step animate-on-scroll" key={i} id={`process-step-${i}`} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="process-step-number">{step.num}</div>
              <div className="process-step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
