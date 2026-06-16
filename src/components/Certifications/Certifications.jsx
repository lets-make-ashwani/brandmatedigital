import React, { useState } from 'react'
import { Icons } from '../../utils/icons'
import './Certifications.css'

function Certifications() {
  const [activeCert, setActiveCert] = useState(null)

  const certs = [
    {
      id: 'iso-9001',
      title: 'ISO 9001:2015 Certified',
      subtitle: 'Quality Management System',
      issuer: 'QRA Certification',
      certNo: '230422083427QRA',
      scope: 'Digital Marketing & Software Development Company',
      details: 'Quality management certification validating our operations, service standard procedures, and customer satisfaction frameworks.'
    },
    {
      id: 'udyam',
      title: 'Udyam Registration',
      subtitle: 'Ministry of MSME, Govt. of India',
      issuer: 'Government of India',
      certNo: 'UDYAM-UP-43-0248430',
      scope: 'Services & IT Development',
      details: 'Official enterprise registration under the Ministry of Micro, Small and Medium Enterprises, Government of India.'
    },
    {
      id: 'gst',
      title: 'GST Registration',
      subtitle: 'Department of Revenue, Govt. of India',
      issuer: 'Government of India',
      certNo: '09CPXPS3316D1ZX',
      scope: 'Tax Compliance & Legal Entity',
      details: 'Official goods and services tax registration confirming legal status and operational compliance under Indian tax laws.'
    },
    {
      id: 'iso-27001',
      title: 'ISO 27001:2022 Certified',
      subtitle: 'Information Security Management',
      issuer: 'QRA Certification',
      certNo: '230422083528QRA',
      scope: 'Marketing, Web/App Dev & Cyber Security',
      details: 'International standard for managing information security risks, ensuring enterprise-grade client data protection.'
    },
    {
      id: 'great-companies',
      title: 'Top Agency of the Year',
      subtitle: 'Great Companies Awards 2025',
      issuer: 'Global Development Consulting',
      certNo: 'GC-2025-DMA-92',
      scope: 'Outstanding Digital Excellence',
      details: 'Recognized as one of the Top Digital Marketing Agencies of the Year for outstanding contribution and business outcomes.'
    },
    {
      id: 'semrush-growth',
      title: 'Growth Marketing Certified',
      subtitle: 'Semrush Academy Specialization',
      issuer: 'Semrush Academy',
      certNo: 'SR-GM-99120',
      scope: 'Vikalp Srivastava (Founder & CEO)',
      details: 'Advanced certification validating skills in organic growth, acquisition strategies, conversion rate optimization, and brand metrics.'
    },
    {
      id: 'semrush-security',
      title: 'Cyber Security Certified',
      subtitle: 'Semrush Academy Assessment',
      issuer: 'Semrush Academy',
      certNo: 'SR-CS-88124',
      scope: 'Vikalp Srivastava (Founder & CEO)',
      details: 'Validated security credentials covering secure web architectures, compliance standards, and digital asset protection.'
    },
    {
      id: 'sap-auth',
      title: 'Authorized SAP Partner',
      subtitle: 'SAP Aligned Digital Services Provider',
      issuer: 'SAP',
      certNo: 'SAP-ASD-2026-01',
      scope: 'IT & Enterprise Transformation',
      details: 'Official authorization to deliver digital enablement, consulting, and system optimization within the SAP enterprise ecosystem.'
    }
  ]

  return (
    <section className="certifications-section" id="certifications">
      <div className="container">
        <div className="section-header animate-on-scroll" style={{ marginBottom: '40px' }}>
          <div className="section-badge">Trust & Compliance</div>
          <h2 className="section-title" id="certifications-title">Certifications & Accreditations</h2>
          <p className="section-subtitle">Official registrations and industry certifications validating our security and service standards.</p>
        </div>
        
        <div className="certifications-grid-new">
          {certs.map((cert) => (
            <div 
              className={`cert-document-card ${cert.id}`} 
              key={cert.id}
              onClick={() => setActiveCert(cert)}
            >
              <div className="cert-issuer-badge">{cert.issuer}</div>
              <h3>{cert.title}</h3>
              <div className="cert-subtitle">{cert.subtitle}</div>
              <div className="cert-scope-text">{cert.scope}</div>
              <div className="cert-card-footer">
                <span className="cert-no">{cert.certNo}</span>
                <button className="cert-view-btn">
                  Verify {Icons.arrowRight}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeCert && (
          <div className="cert-modal-overlay" onClick={() => setActiveCert(null)}>
            <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="cert-modal-close" onClick={() => setActiveCert(null)}>×</button>
              <div className="cert-modal-header">
                <h2>{activeCert.title}</h2>
                <div style={{ color: 'var(--bright-blue)', fontWeight: 600, fontSize: '0.95rem', marginTop: '6px' }}>
                  {activeCert.subtitle}
                </div>
              </div>
              <div className="cert-modal-body">
                <div className="modal-meta-row">
                  <div className="modal-meta-label">Accredited By:</div>
                  <div className="modal-meta-val" style={{ fontWeight: 700 }}>{activeCert.issuer}</div>
                </div>
                <div className="modal-meta-row">
                  <div className="modal-meta-label">Registration No:</div>
                  <div className="modal-meta-val code">{activeCert.certNo}</div>
                </div>
                <div className="modal-meta-row">
                  <div className="modal-meta-label">Scope of Audit:</div>
                  <div className="modal-meta-val">{activeCert.scope}</div>
                </div>
                <div className="modal-meta-row" style={{ border: 'none', paddingBottom: 0 }}>
                  <div className="modal-meta-label">Status:</div>
                  <div className="modal-meta-val" style={{ color: 'var(--teal-accent)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    ● Active & Verified
                  </div>
                </div>
                <div className="modal-description">
                  {activeCert.details}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certifications
