import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#2f2419', color: '#F7F3ED', padding: '48px 20px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40 }}>
        {/* Marca */}
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, marginBottom: 12 }}>🐼 Café Panda</h3>
          <p style={{ fontSize: 14, opacity: 0.75, lineHeight: 1.7, fontFamily: 'system-ui, sans-serif' }}>
            Casi 10 años siendo parte de Valle Grande. Cafetería artesanal, coffee breaks y banquetería para empresas en Santiago y zona norte RM.
          </p>
        </div>

        {/* Servicios */}
        <div>
          <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5, marginBottom: 16, fontFamily: 'system-ui, sans-serif' }}>Servicios</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['Coffee Break Corporativo', 'Tortas Personalizadas', 'Banquetería para Empresas', 'Desayunos Ejecutivos'].map(s => (
              <li key={s}>
                <Link href="/servicios" style={{ color: '#F7F3ED', textDecoration: 'none', fontSize: 14, opacity: 0.8, fontFamily: 'system-ui, sans-serif' }}>{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5, marginBottom: 16, fontFamily: 'system-ui, sans-serif' }}>Contacto</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, fontFamily: 'system-ui, sans-serif' }}>
            <a href="https://wa.me/56942020356" target="_blank" rel="noopener" style={{ color: '#25d366', textDecoration: 'none', opacity: 0.9 }}>
              💬 +56 9 4202 0356 (WhatsApp)
            </a>
            <a href="mailto:contacto@cafepanda.cl" style={{ color: '#F7F3ED', textDecoration: 'none', opacity: 0.8 }}>
              ✉️ contacto@cafepanda.cl
            </a>
            <p style={{ opacity: 0.7, lineHeight: 1.5 }}>
              📍 Santa Teresita de los Andes 402<br />Valle Grande, Lampa, Santiago
            </p>
            <p style={{ opacity: 0.7 }}>
              🕐 Lun–Vie: 8:00–20:00<br />Sáb: 9:00–18:00
            </p>
          </div>
        </div>

        {/* Redes */}
        <div>
          <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5, marginBottom: 16, fontFamily: 'system-ui, sans-serif' }}>Síguenos</h4>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="https://www.facebook.com/CafeP4nda" target="_blank" rel="noopener"
              style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 16px', borderRadius: 8, color: '#F7F3ED', textDecoration: 'none', fontSize: 13, fontFamily: 'system-ui, sans-serif' }}>
              Facebook
            </a>
            <a href="https://www.instagram.com/cafepanda" target="_blank" rel="noopener"
              style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 16px', borderRadius: 8, color: '#F7F3ED', textDecoration: 'none', fontSize: 13, fontFamily: 'system-ui, sans-serif' }}>
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '40px auto 0', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <p style={{ fontSize: 12, opacity: 0.5, fontFamily: 'system-ui, sans-serif' }}>
          © {new Date().getFullYear()} Café Panda · Valle Grande, Lampa · Todos los derechos reservados
        </p>
        <p style={{ fontSize: 12, opacity: 0.5, fontFamily: 'system-ui, sans-serif' }}>
          Hecho con ❤️ en Chile
        </p>
      </div>
    </footer>
  )
}
