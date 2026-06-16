import React from 'react'
import { Icons } from '../../utils/icons'
import './WhyChooseUs.css'

const getPartnerLogo = (name) => {
  switch (name) {
    case 'Instagram':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor"/>
          </svg>
          <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Instagram</span>
        </div>
      )
    case 'Swiggy':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg viewBox="0 0 100 100" width="20" height="20" fill="currentColor">
            <path d="M66.3 33c-3.5-3.5-9.1-3.5-12.6 0L37.1 49.7c-1.1 1.1-1.1 2.8 0 3.9 1.1 1.1 2.8 1.1 3.9 0l16.6-16.6c1.3-1.3 3.5-1.3 4.8 0 1.3 1.3 1.3 3.5 0 4.8L45.9 58.3c-3.5 3.5-3.5 9.1 0 12.6 3.5 3.5 9.1 3.5 12.6 0l16.6-16.6c1.1-1.1 1.1-2.8 0-3.9-1.1-1.1-2.8-1.1-3.9 0L54.6 67.1c-1.3 1.3-3.5 1.3-4.8 0-1.3-1.3-1.3-3.5 0-4.8l16.6-16.6c3.5-3.5 3.5-9.1 0-12.7z"/>
          </svg>
          <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Swiggy</span>
        </div>
      )
    case 'ZEE5':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg viewBox="0 0 100 100" width="22" height="22">
            <circle cx="50" cy="50" r="32" fill="none" stroke="url(#zee-cgrad-w)" strokeWidth="4.5"/>
            <text x="50" y="56" fill="#FFF" fontFamily="sans-serif" fontWeight="900" fontSize="13" textAnchor="middle">ZEE5</text>
            <defs>
              <linearGradient id="zee-cgrad-w" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e30613"/>
                <stop offset="25%" stopColor="#f39200"/>
                <stop offset="50%" stopColor="#96c11f"/>
                <stop offset="75%" stopColor="#009fe3"/>
                <stop offset="100%" stopColor="#9b2282"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      )
    case 'Telegram':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg viewBox="0 0 100 100" width="20" height="20" fill="currentColor">
            <path d="M35 50 L63 36 L59 58 L49 51 L44 55 L45 47 L60 33 C61 32 60 32 59 33 L37 47 L27 44"/>
          </svg>
          <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Telegram</span>
        </div>
      )
    case 'YouTube':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
          </svg>
          <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>YouTube</span>
        </div>
      )
    case 'Facebook':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg viewBox="0 0 100 100" width="20" height="20" fill="currentColor">
            <path d="M65 50H54v38H39V50h-7V37h7v-8c0-7 4-11 10-11 3 0 6 .2 6 .2v7h-3c-3 0-4 2-4 4v8h7l-1 13z"/>
          </svg>
          <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Facebook</span>
        </div>
      )
    case 'BookMyShow':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>book</span>
          <div style={{ background: '#fff', color: '#ec5e7f', padding: '1px 4px', borderRadius: '3px', transform: 'rotate(-5deg)', fontWeight: 'bold', fontSize: '0.75rem' }}>my</div>
          <span style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>show</span>
        </div>
      )
    case 'LinkedIn':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg viewBox="0 0 100 100" width="18" height="18" fill="currentColor">
            <rect x="15" y="35" width="12" height="40"/>
            <circle cx="21" cy="20" r="7"/>
            <path d="M42 35h10v6c3-4 7-7 13-7 13 0 15 8 15 18v23H68V52c0-5-.1-10-3-10-3 0-4 2-4 6v25H48V35z"/>
          </svg>
          <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>LinkedIn</span>
        </div>
      )
    case 'JioHotstar':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.784 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"/>
          </svg>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>JioHotstar</span>
        </div>
      )
    case 'Dailyhunt':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 6px)', gap: '2px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#96c11f' }}></div>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#e30613' }}></div>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#009fe3' }}></div>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f39200' }}></div>
          </div>
          <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#555' }}>dailyhunt</span>
        </div>
      )
    case 'SonyLIV':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1' }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '1px' }}>SONY</span>
          <span style={{ fontSize: '1rem', fontWeight: '900', background: 'linear-gradient(to right, #ffb300, #ff3d00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>liv</span>
        </div>
      )
    case 'Google Play':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg viewBox="0 0 100 100" width="16" height="16">
            <path d="M15 15 L15 85 L52 50 Z" fill="#00b0ff"/>
            <path d="M15 15 L52 50 L75 37 Z" fill="#00e676"/>
            <path d="M75 37 L52 50 L75 63 Z" fill="#ffeb3b"/>
            <path d="M15 85 L52 50 L75 63 Z" fill="#ff3d00"/>
          </svg>
          <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#333' }}>Google Play</span>
        </div>
      )
    case 'Blinkit':
      return <span style={{ fontSize: '0.95rem', fontWeight: '900', color: '#000' }}>blinkit</span>
    case 'Gaana':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ background: '#fff', color: '#e72c30', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#e72c30', fontSize: '9px', fontWeight: '900' }}>g</span>
          </div>
          <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Gaana</span>
        </div>
      )
    case 'Wynk Music':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg viewBox="0 0 100 100" width="18" height="18" fill="currentColor">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="6"/>
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="5" opacity="0.6"/>
            <circle cx="50" cy="50" r="10" fill="currentColor"/>
          </svg>
          <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Wynk Music</span>
        </div>
      )
    case 'Voot Select':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1.1' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: '900', color: '#4A148C' }}>voot</span>
          <span style={{ fontSize: '0.55rem', fontWeight: 'bold', color: '#00C853', letterSpacing: '0.5px' }}>SELECT</span>
        </div>
      )
    case 'Zomato':
      return <span style={{ fontSize: '0.95rem', fontWeight: '900' }}>zomato</span>
    case 'Resso':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg viewBox="0 0 120 120" width="18" height="18" fill="none" stroke="#FF007F" strokeWidth="10">
            <path d="M35 45 C35 35, 45 35, 60 45 C75 55, 85 55, 85 45"/>
            <path d="M35 75 C35 65, 45 65, 60 75 C75 85, 85 85, 85 75"/>
          </svg>
          <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>resso</span>
        </div>
      )
    case 'X':
      return (
        <svg viewBox="0 0 100 100" width="20" height="20" fill="currentColor">
          <path d="M30 30 L47 52 L30 75 H37 L50 56 L62 75 H75 L57 48 L73 30 H66 L54 45 L43 30 H30 Z M40 35 H45 L65 70 H60 L40 35 Z"/>
        </svg>
      )
    case 'Snapchat':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg viewBox="0 0 100 100" width="18" height="18" fill="#FFF" stroke="#000" strokeWidth="4">
            <path d="M50 30 C42 30, 35 36, 35 45 C35 50, 38 54, 38 56 C35 57, 31 59, 31 62 C31 64, 35 65, 38 64 C40 66, 45 67, 50 67 C55 67, 60 66, 62 64 C65 65, 69 64, 69 62 C69 59, 65 57, 62 56 C62 54, 65 50, 65 45 C65 36, 58 30, 50 30 Z"/>
          </svg>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#000' }}>Snapchat</span>
        </div>
      )
    case 'Paytm':
      return (
        <span style={{ fontSize: '1rem', fontWeight: '900' }}>
          <span style={{ color: '#002E7E' }}>pay</span>
          <span style={{ color: '#00B9F5' }}>tm</span>
        </span>
      )
    case 'Spotify':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg viewBox="0 0 100 100" width="18" height="18" fill="none" stroke="#000" strokeWidth="5">
            <circle cx="50" cy="50" r="42" fill="#1DB954" stroke="none"/>
            <path d="M30 40 C38 35, 62 35, 70 40" strokeLinecap="round"/>
            <path d="M33 50 C40 46, 60 46, 67 50" strokeLinecap="round"/>
            <path d="M36 60 C42 57, 58 57, 64 60" strokeLinecap="round"/>
          </svg>
          <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Spotify</span>
        </div>
      )
    case 'Disney+ Hotstar':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="#FFD700">
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.784 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"/>
          </svg>
          <span style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>Disney+ hotstar</span>
        </div>
      )
    default:
      return <span>{name}</span>
  }
}

const getClientLogo = (name) => {
  switch (name) {
    case 'Apollo':
      return <span style={{ color: '#2B2A7F', fontFamily: 'sans-serif', fontWeight: '900', fontSize: '1.25rem', letterSpacing: '-0.5px' }}>apollo</span>
    case 'Raymond':
      return <span style={{ color: '#FFF', fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: '1.05rem', fontStyle: 'italic', letterSpacing: '0.5px' }}>Raymond</span>
    case 'Royal Enfield':
      return <span style={{ color: '#FFF', fontFamily: 'sans-serif', fontWeight: '900', fontSize: '0.85rem', letterSpacing: '0.5px' }}>ROYAL ENFIELD</span>
    case 'Lee Cooper':
      return <span style={{ color: '#FFF', fontFamily: 'Impact, Arial Black, sans-serif', fontWeight: '900', fontSize: '0.9rem', fontStyle: 'italic' }}>Lee Cooper</span>
    case 'Jawa':
      return <span style={{ color: '#A61A1D', fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: '1rem', letterSpacing: '1px' }}>JAWA</span>
    case 'Realme':
      return <span style={{ color: '#000', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '1.15rem', letterSpacing: '-0.5px' }}>realme</span>
    case 'UPTv Live':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1' }}>
          <span style={{ fontSize: '0.55rem', fontWeight: 'bold', letterSpacing: '0.5px' }}>उत्तर प्रदेश</span>
          <span style={{ fontSize: '0.95rem', fontWeight: '900' }}>UPTv LIVE</span>
        </div>
      )
    case 'Profinity':
      return <span style={{ color: '#F15A24', fontFamily: 'sans-serif', fontWeight: '900', fontSize: '0.8rem', letterSpacing: '1px' }}>PROFINITY</span>
    case 'CEAT':
      return <span style={{ color: '#FFF', fontFamily: 'Impact, sans-serif', fontWeight: 'bold', fontSize: '1.35rem', letterSpacing: '1px' }}>CEAT</span>
    case 'Kyonkat':
      return (
        <span style={{ color: '#000', fontFamily: 'sans-serif', fontWeight: '900', fontSize: '0.95rem' }}>
          Kyon<span style={{ color: '#F15A24' }}>kat</span>
        </span>
      )
    case 'Killer':
      return <span style={{ color: '#FFF', fontFamily: 'Impact, sans-serif', fontWeight: 'bold', fontSize: '1.15rem', letterSpacing: '0.5px' }}>KILLER</span>
    case 'Pragyan Public School':
      return (
        <div style={{ border: '2px solid #002E7E', borderRadius: '4px', padding: '1px 5px', display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1' }}>
          <span style={{ color: '#002E7E', fontSize: '0.45rem', fontWeight: 'bold' }}>PRAGYAN</span>
          <span style={{ color: '#FFC800', fontSize: '0.45rem', fontWeight: 'bold' }}>PUBLIC SCHOOL</span>
        </div>
      )
    case 'Varuna':
      return <span style={{ fontFamily: 'sans-serif', fontWeight: '900', fontSize: '1.05rem', letterSpacing: '0.5px' }}>VARUNA</span>
    case 'Tata':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px solid #005A9C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#005A9C', fontSize: '8px', fontWeight: 'bold' }}>T</span>
          </div>
          <span style={{ color: '#005A9C', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '0.95rem', letterSpacing: '0.5px' }}>TATA</span>
        </div>
      )
    case 'Buildoption':
      return <span style={{ color: '#FFC800', fontFamily: 'sans-serif', fontWeight: '900', fontSize: '0.85rem' }}>Buildo-ption</span>
    case 'Adani':
      return <span style={{ color: '#5C2D91', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '1.25rem' }}>adani</span>
    case 'Mr n Mrs Pet':
      return <span style={{ color: '#4CAF50', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '0.85rem' }}>Mr n Mrs Pet</span>
    case 'MedVantage':
      return <span style={{ color: '#1B75BC', fontFamily: 'sans-serif', fontWeight: '900', fontSize: '0.85rem' }}>MedVantage</span>
    case 'Verelios':
      return <span style={{ color: '#00F0FF', fontFamily: 'sans-serif', fontWeight: '900', fontSize: '0.95rem', letterSpacing: '0.5px' }}>VERELIOS</span>
    case 'Kashviha':
      return <span style={{ color: '#0A2540', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '0.85rem' }}>KASHVIHA</span>
    case 'Smelita Aromas':
      return <span style={{ color: '#D4AF37', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '0.85rem' }}>Smelita Aromas</span>
    case 'Curry Cave':
      return <span style={{ color: '#000', fontFamily: 'sans-serif', fontWeight: '900', fontSize: '0.8rem', letterSpacing: '0.5px' }}>CURRY CAVE</span>
    default:
      return <span>{name}</span>
  }
}

function WhyChooseUs() {
  const cards = [
    { icon: Icons.trendingUp, title: 'Result-Driven Marketing Strategies', text: 'We design and execute campaigns with sharp focus on conversion rates and direct business results.' },
    { icon: Icons.barChart, title: 'Data-Backed Strategic Approach', text: 'Decisions are guided by thorough analysis of audience behaviors, market trends, and performance metrics.' },
    { icon: Icons.palette, title: 'Creative & Performance-Focused Execution', text: 'We combine visually stunning creatives with performance optimization to grab attention and convert.' },
    { icon: Icons.settings, title: 'Customized Solutions for Your Brand', text: 'No cookie-cutter strategies. Every solution is tailored to your unique challenges and brand persona.' },
    { icon: Icons.clipboard, title: 'Transparent Reporting & Communication', text: 'Stay fully updated with clear, direct insights and performance dashboards tracking every dollar spent.' },
    { icon: Icons.users, title: 'Experienced Industry Professionals', text: 'Work directly with seasoned marketing, tech, and design experts who understand your niche.' },
    { icon: Icons.link, title: 'Complete End-to-End Digital Solutions', text: 'From market research to creative assets, programmatic campaigns, web dev, and cyber security.' },
    { icon: Icons.sprout, title: 'Sustainable Long-Term Growth Focus', text: 'We focus on building strong foundations, brand equity, and sustainable customer acquisition funnels.' },
  ]

  const clients = [
    { name: 'Apollo', bg: '#ffffff', text: '#2B2A7F', border: '1px solid rgba(7,26,61,0.08)' },
    { name: 'Raymond', bg: '#D9222A', text: '#ffffff' },
    { name: 'Royal Enfield', bg: '#E31837', text: '#ffffff' },
    { name: 'Lee Cooper', bg: '#E31837', text: '#ffffff' },
    { name: 'Jawa', bg: '#ffffff', text: '#A61A1D', border: '2px solid #A61A1D' },
    { name: 'Realme', bg: '#FFC800', text: '#000000' },
    { name: 'UPTv Live', bg: '#A61A1D', text: '#ffffff' },
    { name: 'Profinity', bg: '#122347', text: '#F15A24' },
    { name: 'CEAT', bg: '#002E7E', text: '#ffffff' },
    { name: 'Kyonkat', bg: '#ffffff', text: '#000000', border: '1px solid rgba(7,26,61,0.08)' },
    { name: 'Killer', bg: '#000000', text: '#ffffff' },
    { name: 'Pragyan Public School', bg: '#ffffff', text: '#002E7E', border: '1px solid rgba(7,26,61,0.08)' },
    { name: 'Varuna', bg: '#0066B2', text: '#ffffff' },
    { name: 'Tata', bg: '#ffffff', text: '#005A9C', border: '1px solid rgba(7,26,61,0.08)' },
    { name: 'Buildoption', bg: '#000000', text: '#FFC800' },
    { name: 'Adani', bg: '#ffffff', text: '#5C2D91', border: '1px solid rgba(7,26,61,0.08)' },
    { name: 'Mr n Mrs Pet', bg: '#ffffff', text: '#4CAF50', border: '1px solid rgba(7,26,61,0.08)' },
    { name: 'MedVantage', bg: '#ffffff', text: '#1B75BC', border: '1px solid rgba(7,26,61,0.08)' },
    { name: 'Verelios', bg: '#000000', text: '#00F0FF' },
    { name: 'Kashviha', bg: '#ffffff', text: '#0A2540', border: '1px solid rgba(7,26,61,0.08)' },
    { name: 'Smelita Aromas', bg: '#000000', text: '#D4AF37' },
    { name: 'Curry Cave', bg: '#ffffff', text: '#000000', border: '1px solid rgba(7,26,61,0.08)' }
  ]

  const partners = [
    { name: 'Instagram', bg: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', text: '#fff' },
    { name: 'Swiggy', bg: '#fc8019', text: '#fff' },
    { name: 'ZEE5', bg: '#000000', text: '#fff', border: '1px solid rgba(255,255,255,0.1)' },
    { name: 'Telegram', bg: '#0088cc', text: '#fff' },
    { name: 'YouTube', bg: '#ff0000', text: '#fff' },
    { name: 'Facebook', bg: '#3b5998', text: '#fff' },
    { name: 'BookMyShow', bg: '#ec5e7f', text: '#fff' },
    { name: 'LinkedIn', bg: '#0077b5', text: '#fff' },
    { name: 'JioHotstar', bg: 'linear-gradient(to right, #000c24, #002d72)', text: '#fff' },
    { name: 'Dailyhunt', bg: '#ffffff', text: '#333', border: '1px solid rgba(7,26,61,0.08)' },
    { name: 'SonyLIV', bg: 'linear-gradient(to right, #1f1f1f, #000000)', text: '#fff' },
    { name: 'Google Play', bg: '#ffffff', text: '#333', border: '1px solid rgba(7,26,61,0.08)' },
    { name: 'Blinkit', bg: '#f7ec1e', text: '#000' },
    { name: 'Gaana', bg: '#e72c30', text: '#fff' },
    { name: 'Wynk Music', bg: '#ffffff', text: '#000', border: '1px solid rgba(7,26,61,0.08)' },
    { name: 'Voot Select', bg: '#ffffff', text: '#000', border: '1px solid rgba(7,26,61,0.08)' },
    { name: 'Zomato', bg: '#cb202d', text: '#fff' },
    { name: 'Resso', bg: '#000000', text: '#fff' },
    { name: 'X', bg: '#000000', text: '#fff', border: '1px solid rgba(255,255,255,0.1)' },
    { name: 'Snapchat', bg: '#fffc00', text: '#000' },
    { name: 'Paytm', bg: '#ffffff', text: '#00baf2', border: '1px solid rgba(7,26,61,0.08)' },
    { name: 'Spotify', bg: '#1db954', text: '#fff' },
    { name: 'Disney+ Hotstar', bg: '#0c111b', text: '#fff' }
  ]

  return (
    <section className="why-section" id="why-choose-us">
      <div className="container">
        <div className="why-partner-wrapper animate-on-scroll">
          <div className="why-partner-left">
            <div className="clients-container">
              <h3 className="clients-header">Our Clients</h3>
              <div className="clients-logo-grid">
                {clients.map((client, idx) => (
                  <div 
                    key={idx} 
                    className="client-logo-card" 
                    style={{ 
                      background: client.bg, 
                      color: client.text, 
                      border: client.border || 'none' 
                    }}
                  >
                    {getClientLogo(client.name)}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="why-partner-right">
            <div className="partners-container">
              <h3 className="partners-header">Our Partners</h3>
              <div className="partners-logo-grid">
                {partners.map((partner, idx) => (
                  <div 
                    key={idx} 
                    className="partner-logo-card" 
                    style={{ 
                      background: partner.bg, 
                      color: partner.text, 
                      border: partner.border || 'none' 
                    }}
                  >
                    {getPartnerLogo(partner.name)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="section-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-badge">Our Values</div>
          <h2 className="section-title">What Defines Our Approach</h2>
        </div>

        <div className="why-grid">
          {cards.map((card, i) => (
            <div className="why-card animate-on-scroll" key={i} id={`why-card-${i}`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="why-card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
