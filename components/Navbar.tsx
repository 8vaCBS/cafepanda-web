'use client'
import { useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/blog', label: 'Blog' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{ background: '#2f2419', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
      <nav style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 900, color: '#F7F3ED', letterSpacing: '0.02em' }}>
            🐼 Café Panda
          </span>
        </Link>

        {/* Desktop nav */}
        <ul style={{ display: 'flex', gap: 32, listStyle: 'none', alignItems: 'center' }} className="hidden-mobile">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} style={{ color: '#F7F3ED', textDecoration: 'none', fontSize: 15, fontFamily: 'system-ui, sans-serif', fontWeight: 500, letterSpacing: '0.04em', opacity: 0.9, transition: 'opacity 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.9')}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="https://wa.me/56942020356?text=Hola,%20quiero%20cotizar%20un%20coffee%20break." target="_blank" rel="noopener"
              style={{ background: '#25d366', color: 'white', padding: '8px 18px', borderRadius: 999, fontSize: 14, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif' }}>
              Cotizar ahora
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }} className="show-mobile" aria-label="Menú">
          <svg width="24" height="24" fill="none" stroke="#F7F3ED" strokeWidth="2">
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#2f2419', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '16px 20px 24px' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', color: '#F7F3ED', textDecoration: 'none', padding: '12px 0', fontSize: 16, fontFamily: 'system-ui, sans-serif', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              {l.label}
            </Link>
          ))}
          <a href="https://wa.me/56942020356" target="_blank" rel="noopener"
            style={{ display: 'block', marginTop: 16, background: '#25d366', color: 'white', padding: '12px 20px', borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: 'none', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
            💬 Cotizar por WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } .show-mobile { display: block !important; } }
      `}</style>
    </header>
  )
}
