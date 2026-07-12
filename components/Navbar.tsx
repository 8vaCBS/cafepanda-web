'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
    <header style={{ background: '#111', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid #222' }}>
      <nav style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.png" alt="Café Panda" width={44} height={44} style={{ display: 'block' }} priority />
        </Link>

        {/* Desktop */}
        <ul style={{ display: 'flex', gap: 36, listStyle: 'none', alignItems: 'center' }} className="nav-desktop">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} style={{ color: '#fff', textDecoration: 'none', fontSize: 12, fontFamily: 'system-ui, sans-serif', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.75 }}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="https://wa.me/56942020356?text=Hola,%20quiero%20cotizar%20un%20coffee%20break."
              target="_blank" rel="noopener"
              style={{ background: '#bd0505', color: '#fff', padding: '9px 20px', fontSize: 11, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Cotizar
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }} className="nav-mobile" aria-label="Menú">
          <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2">
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div style={{ background: '#111', borderTop: '1px solid #222', padding: '16px 20px 24px' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', color: '#fff', textDecoration: 'none', padding: '12px 0', fontSize: 13, fontFamily: 'system-ui, sans-serif', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '1px solid #222', opacity: 0.8 }}>
              {l.label}
            </Link>
          ))}
          <a href="https://wa.me/56942020356" target="_blank" rel="noopener"
            style={{ display: 'block', marginTop: 16, background: '#bd0505', color: '#fff', padding: '12px 20px', fontSize: 12, fontWeight: 700, textDecoration: 'none', textAlign: 'center', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Cotizar por WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .nav-desktop { display: flex !important; } .nav-mobile { display: none !important; } }
        @media (max-width: 767px) { .nav-desktop { display: none !important; } .nav-mobile { display: block !important; } }
      `}</style>
    </header>
  )
}
