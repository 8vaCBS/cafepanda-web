import Link from 'next/link'

export default function NotFound() {
  return (
    <section style={{ padding: '120px 20px', textAlign: 'center', background: '#F7F3ED', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <span style={{ fontSize: 72 }}>🐼</span>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#2f2419', margin: '24px 0 16px' }}>Página no encontrada</h1>
        <p style={{ fontSize: 16, color: '#666', marginBottom: 32, fontFamily: 'system-ui, sans-serif' }}>
          El Panda buscó por todas partes y no encontró lo que buscas.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ display: 'inline-block', background: '#2f2419', color: 'white', padding: '14px 28px', borderRadius: 999, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif' }}>
            Volver al inicio
          </Link>
          <a href="https://wa.me/56942020356" target="_blank" rel="noopener"
            style={{ display: 'inline-block', background: '#25d366', color: 'white', padding: '14px 28px', borderRadius: 999, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif' }}>
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
