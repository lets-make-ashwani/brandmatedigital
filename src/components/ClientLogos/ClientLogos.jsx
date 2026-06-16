import React from 'react'
import './ClientLogos.css'

const BRAND_LOGOS = {
  instagram: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 24 24" width="44" height="44">
        <defs>
          <linearGradient id="insta-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f99f1b"/>
            <stop offset="30%" stopColor="#e23056"/>
            <stop offset="70%" stopColor="#a229a4"/>
            <stop offset="100%" stopColor="#4f5bd5"/>
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="5" fill="url(#insta-grad)"/>
        <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="#fff" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="3" fill="none" stroke="#fff" strokeWidth="1.5"/>
        <circle cx="17" cy="7" r="0.75" fill="#fff"/>
      </svg>
    </div>
  ),
  swiggy: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 100 100" width="44" height="44">
        <rect width="100" height="100" rx="20" fill="#FC6011"/>
        <path d="M66.3 33c-3.5-3.5-9.1-3.5-12.6 0L37.1 49.7c-1.1 1.1-1.1 2.8 0 3.9 1.1 1.1 2.8 1.1 3.9 0l16.6-16.6c1.3-1.3 3.5-1.3 4.8 0 1.3 1.3 1.3 3.5 0 4.8L45.9 58.3c-3.5 3.5-3.5 9.1 0 12.6 3.5 3.5 9.1 3.5 12.6 0l16.6-16.6c1.1-1.1 1.1-2.8 0-3.9-1.1-1.1-2.8-1.1-3.9 0L54.6 67.1c-1.3 1.3-3.5 1.3-4.8 0-1.3-1.3-1.3-3.5 0-4.8l16.6-16.6c3.5-3.5 3.5-9.1 0-12.7z" fill="#FFF"/>
      </svg>
    </div>
  ),
  zee5: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 100 100" width="44" height="44">
        <rect width="100" height="100" rx="20" fill="#000"/>
        <circle cx="50" cy="50" r="30" fill="none" stroke="url(#zee-cgrad)" strokeWidth="3.5"/>
        <text x="50" y="56" fill="#FFF" fontFamily="sans-serif" fontWeight="900" fontSize="14" textAnchor="middle">ZEE5</text>
        <defs>
          <linearGradient id="zee-cgrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e30613"/>
            <stop offset="25%" stopColor="#f39200"/>
            <stop offset="50%" stopColor="#96c11f"/>
            <stop offset="75%" stopColor="#009fe3"/>
            <stop offset="100%" stopColor="#9b2282"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  ),
  telegram: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 100 100" width="44" height="44">
        <rect width="100" height="100" rx="20" fill="#FFF" stroke="#eee" strokeWidth="1"/>
        <circle cx="50" cy="50" r="32" fill="#229ED9"/>
        <path d="M35 50 L63 36 L59 58 L49 51 L44 55 L45 47 L60 33 C61 32 60 32 59 33 L37 47 L27 44" fill="#FFF"/>
      </svg>
    </div>
  ),
  youtube: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 100 100" width="44" height="44">
        <rect width="100" height="100" rx="20" fill="#FFF" stroke="#eee" strokeWidth="1"/>
        <rect x="22" y="32" width="56" height="36" rx="9" fill="#FF0000"/>
        <polygon points="45,41 62,50 45,59" fill="#FFF"/>
      </svg>
    </div>
  ),
  facebook: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 100 100" width="44" height="44">
        <rect width="100" height="100" rx="20" fill="#1877F2"/>
        <path d="M65 50H54v38H39V50h-7V37h7v-8c0-7 4-11 10-11 3 0 6 .2 6 .2v7h-3c-3 0-4 2-4 4v8h7l-1 13z" fill="#FFF"/>
      </svg>
    </div>
  ),
  bookmyshow: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 180 50" width="130" height="36">
        <rect width="180" height="50" rx="10" fill="#EC5E7C"/>
        <text x="15" y="32" fill="#FFF" fontFamily="sans-serif" fontWeight="900" fontSize="20">book</text>
        <g transform="translate(68, 10) rotate(-8)">
          <rect x="0" y="0" width="36" height="26" rx="4" fill="#FFF"/>
          <text x="18" y="19" fill="#EC5E7C" fontFamily="sans-serif" fontWeight="900" fontSize="14" textAnchor="middle">my</text>
        </g>
        <text x="112" y="32" fill="#FFF" fontFamily="sans-serif" fontWeight="900" fontSize="20">show</text>
      </svg>
    </div>
  ),
  linkedin: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 100 100" width="44" height="44">
        <rect width="100" height="100" rx="20" fill="#0A66C2"/>
        <rect x="25" y="40" width="10" height="33" fill="#FFF"/>
        <circle cx="30" cy="27" r="6" fill="#FFF"/>
        <path d="M48 40h9v5c2-3 5-6 10-6 11 0 13 7 13 16v18H68V55c0-4-.1-9-3-9-3 0-4 2-4 6v21H48V40z" fill="#FFF"/>
      </svg>
    </div>
  ),
  jiohotstar: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 120 120" width="44" height="44">
        <defs>
          <linearGradient id="jh-cgrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0f1d"/>
            <stop offset="100%" stopColor="#073b4c"/>
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="20" fill="url(#jh-cgrad)"/>
        <g transform="translate(60, 48) scale(0.9)">
          <path d="M0 -24 L5 -7 L22 -7 L9 3 L13 20 L0 10 L-13 20 L-9 3 L-22 -7 L-5 -7 Z" fill="#FFF"/>
          <circle cx="0" cy="0" r="12" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.6"/>
        </g>
        <text x="60" y="102" fill="#FFF" fontFamily="sans-serif" fontWeight="900" fontSize="10" textAnchor="middle" letterSpacing="0.2">JioHotstar</text>
      </svg>
    </div>
  ),
  dailyhunt: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 120 120" width="55" height="44">
        <rect width="120" height="120" rx="20" fill="#FFF" stroke="#eee" strokeWidth="1"/>
        <circle cx="48" cy="40" r="9" fill="#96c11f"/>
        <circle cx="72" cy="40" r="9" fill="#e30613"/>
        <circle cx="48" cy="62" r="9" fill="#009fe3"/>
        <circle cx="72" cy="62" r="9" fill="#f39200"/>
        <text x="60" y="98" fill="#555" fontFamily="sans-serif" fontWeight="bold" fontSize="13" textAnchor="middle">dailyhunt</text>
      </svg>
    </div>
  ),
  sonyliv: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 100 100" width="44" height="44">
        <rect width="100" height="100" rx="20" fill="#000"/>
        <text x="50" y="40" fill="#FFF" fontFamily="sans-serif" fontWeight="bold" fontSize="13" textAnchor="middle" letterSpacing="0.5">SONY</text>
        <text x="50" y="72" fill="url(#liv-cgrad)" fontFamily="sans-serif" fontWeight="900" fontSize="22" textAnchor="middle">liv</text>
        <defs>
          <linearGradient id="liv-cgrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffb300"/>
            <stop offset="100%" stopColor="#ff3d00"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  ),
  googleplay: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 100 100" width="44" height="44">
        <rect width="100" height="100" rx="20" fill="#FFF" stroke="#eee" strokeWidth="1"/>
        <g transform="translate(18, 12) scale(0.9)">
          <path d="M15 15 L15 85 L52 50 Z" fill="#00b0ff"/>
          <path d="M15 15 L52 50 L75 37 Z" fill="#00e676"/>
          <path d="M75 37 L52 50 L75 63 Z" fill="#ffeb3b"/>
          <path d="M15 85 L52 50 L75 63 Z" fill="#ff3d00"/>
        </g>
      </svg>
    </div>
  ),
  blinkit: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 120 120" width="55" height="44">
        <rect width="120" height="120" rx="20" fill="#F7C325"/>
        <text x="60" y="68" fill="#000" fontFamily="sans-serif" fontWeight="900" fontSize="20" textAnchor="middle">blinkit</text>
      </svg>
    </div>
  ),
  wynk: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 100 100" width="44" height="44">
        <rect width="100" height="100" rx="20" fill="#E11A38"/>
        <circle cx="50" cy="50" r="24" fill="none" stroke="#FFF" strokeWidth="3.5"/>
        <circle cx="50" cy="50" r="16" fill="none" stroke="#FFF" strokeWidth="3" opacity="0.6"/>
        <circle cx="50" cy="50" r="8" fill="#FFF"/>
      </svg>
    </div>
  ),
  voot: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 100 100" width="44" height="44">
        <rect width="100" height="100" rx="20" fill="#00B4B4"/>
        <g transform="translate(50, 50)">
          <path d="M-12 -4 C-12 -16, -4 -20, 0 -20 C4 -20, 12 -16, 12 -4 C12 8, 0 20, 0 20 C0 20, -12 8, -12 -4 Z" fill="#FFF"/>
          <path d="M-22 8 C-28 0, -24 -8, -18 -12 C-12 -16, -4 -10, -4 -10 C-4 -10, -8 8, -12 14 C-16 20, -17 16, -22 8 Z" fill="#FFF" opacity="0.8"/>
          <path d="M22 8 C28 0, 24 -8, 18 -12 C12 -16, 4 -10, 4 -10 C4 -10, 8 8, 12 14 C16 20, 17 16, 22 8 Z" fill="#FFF" opacity="0.8"/>
        </g>
      </svg>
    </div>
  ),
  vootselect: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 180 50" width="130" height="36">
        <rect width="180" height="50" rx="10" fill="#FFF" stroke="#eee" strokeWidth="1"/>
        <text x="55" y="34" fill="#4A148C" fontFamily="sans-serif" fontWeight="900" fontSize="24">voot</text>
        <text x="135" y="32" fill="#00C853" fontFamily="sans-serif" fontWeight="900" fontSize="13" letterSpacing="0.5">SELECT</text>
      </svg>
    </div>
  ),
  zomato: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 120 120" width="55" height="44">
        <rect width="120" height="120" rx="20" fill="#E23744"/>
        <text x="60" y="68" fill="#FFF" fontFamily="sans-serif" fontWeight="900" fontSize="20" textAnchor="middle">zomato</text>
      </svg>
    </div>
  ),
  resso: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 120 120" width="55" height="44">
        <rect width="120" height="120" rx="20" fill="#000"/>
        <path d="M35 45 C35 35, 45 35, 60 45 C75 55, 85 55, 85 45" fill="none" stroke="#FF007F" strokeWidth="6" strokeLinecap="round"/>
        <path d="M35 75 C35 65, 45 65, 60 75 C75 85, 85 85, 85 75" fill="none" stroke="#FF007F" strokeWidth="6" strokeLinecap="round"/>
      </svg>
    </div>
  ),
  x: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 100 100" width="44" height="44">
        <rect width="100" height="100" rx="20" fill="#000"/>
        <path d="M30 30 L47 52 L30 75 H37 L50 56 L62 75 H75 L57 48 L73 30 H66 L54 45 L43 30 H30 Z M40 35 H45 L65 70 H60 L40 35 Z" fill="#FFF"/>
      </svg>
    </div>
  ),
  snapchat: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 100 100" width="44" height="44">
        <rect width="100" height="100" rx="20" fill="#FFFC00"/>
        <path d="M50 30 C42 30, 35 36, 35 45 C35 50, 38 54, 38 56 C35 57, 31 59, 31 62 C31 64, 35 65, 38 64 C40 66, 45 67, 50 67 C55 67, 60 66, 62 64 C65 65, 69 64, 69 62 C69 59, 65 57, 62 56 C62 54, 65 50, 65 45 C65 36, 58 30, 50 30 Z" fill="#FFF" stroke="#000" strokeWidth="2.5" strokeLinejoin="round"/>
      </svg>
    </div>
  ),
  paytm: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 180 50" width="130" height="36">
        <rect width="180" height="50" rx="10" fill="#FFF" stroke="#eee" strokeWidth="1"/>
        <text x="90" y="34" fontFamily="sans-serif" fontWeight="900" fontSize="30" textAnchor="middle">
          <tspan fill="#002E7E">pay</tspan>
          <tspan fill="#00B9F5">tm</tspan>
        </text>
      </svg>
    </div>
  ),
  spotify: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 100 100" width="44" height="44">
        <rect width="100" height="100" rx="20" fill="#000"/>
        <circle cx="50" cy="50" r="28" fill="#1DB954"/>
        <path d="M36 41 C42 37, 58 37, 64 41" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round"/>
        <path d="M38 50 C44 47, 56 47, 62 50" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M40 59 C45 56, 55 56, 60 59" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  ),
  disneyhotstar: (
    <div className="brand-logo-card">
      <svg viewBox="0 0 200 50" width="140" height="36">
        <rect width="200" height="50" rx="10" fill="#0C111A"/>
        <g transform="translate(25, 25) scale(0.65)">
          <path d="M0 -22 L5 -7 L22 -7 L9 3 L13 20 L0 10 L-13 20 L-9 3 L-22 -7 L-5 -7 Z" fill="#FFD700"/>
        </g>
        <text x="115" y="32" fill="#FFF" fontFamily="sans-serif" fontWeight="bold" fontSize="14" textAnchor="middle">Disney+ hotstar</text>
      </svg>
    </div>
  )
}

function ClientLogos() {
  const row1 = ['instagram', 'swiggy', 'zee5', 'telegram', 'youtube', 'facebook', 'bookmyshow', 'linkedin']
  const row2 = ['jiohotstar', 'dailyhunt', 'sonyliv', 'googleplay', 'blinkit', 'wynk', 'voot']
  const row3 = ['vootselect', 'zomato', 'resso', 'x', 'snapchat', 'paytm', 'spotify', 'disneyhotstar']

  return (
    <section className="logos-section" id="client-logos" style={{ background: 'var(--bg-light)', padding: '80px 0' }}>
      <div className="container">
        <div className="section-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-badge">Our Partners</div>
          <h2 className="section-title" id="logos-title" style={{ fontSize: '2rem' }}>Brands That Trust Us</h2>
        </div>
      </div>
      
      <div className="marquee-wrapper">
        <div className="marquee-track-left">
          {[...row1, ...row1, ...row1, ...row1].map((brand, i) => (
            <div className="marquee-client-item" key={`r1-${i}`}>
              {BRAND_LOGOS[brand]}
            </div>
          ))}
        </div>
        
        <div className="marquee-track-right">
          {[...row2, ...row2, ...row2, ...row2].map((brand, i) => (
            <div className="marquee-client-item" key={`r2-${i}`}>
              {BRAND_LOGOS[brand]}
            </div>
          ))}
        </div>
        
        <div className="marquee-track-left" style={{ marginTop: '20px' }}>
          {[...row3, ...row3, ...row3, ...row3].map((brand, i) => (
            <div className="marquee-client-item" key={`r3-${i}`}>
              {BRAND_LOGOS[brand]}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientLogos

