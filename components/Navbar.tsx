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
    <>
      <style>{`
        .nav-links { display: none; }
        .nav-burger { display: flex; }
        @media (min-width: 768px) {
          .nav-links { display: flex !important; align-items: center; gap: 32px; list-style: none; }
          .nav-burger { display: none !important; }
          .nav-mobile-menu { display: none !important; }
        }
        .nav-link {
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          font-size: 11px;
          font-family: system-ui, sans-serif;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: color 0.15s;
        }
        .nav-link:hover { color: #fff; }
      `}</style>

      <header style={{ background: '#111', position: 'sticky', top: 0, zIndex: 1000, borderBottom: '1px solid #1e1e1e' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* LOGO */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <Image
              src="/logo.png"
              alt="Café Panda"
              width={40}
              height={40}
              style={{ display: 'block', borderRadius: '50%', background: '#fff', padding: 2 }}
              priority
            />
            <span style={{ color: '#fff', fontSize: 15, fontWeight: 700, fontFamily: 'system-ui, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Café Panda
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="nav-link">{l.label}</Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/56942020356?text=Hola,%20quiero%20cotizar%20un%20coffee%20break."
                target="_blank"
                rel="noopener"
                style={{ background: '#bd0505', color: '#fff', padding: '9px 18px', fontSize: 11, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}
              >
                Cotizar
              </a>
            </li>
          </ul>

          {/* MOBILE BURGER */}
          <button
            className="nav-burger"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, alignItems: 'center', justifyContent: 'center' }}
            aria-label="Menú"
          >
            <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
              {open
                ? <><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></>
                : <><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></>
              }
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="nav-mobile-menu" style={{ background: '#111', borderTop: '1px solid #1e1e1e' }}>
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ display: 'block', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', padding: '14px 20px', fontSize: 13, fontFamily: 'system-ui, sans-serif', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', borderBottom: '1px solid #1e1e1e' }}
              >
                {l.label}
              </Link>
            ))}
            <div style={{ padding: 16 }}>
              <a
                href="https://wa.me/56942020356"
                target="_blank"
                rel="noopener"
                style={{ display: 'block', background: '#bd0505', color: '#fff', padding: '14px 20px', fontSize: 12, fontWeight: 700, textDecoration: 'none', textAlign: 'center', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
