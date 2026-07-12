import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Servicios | Coffee Break Corporativo y Banquetería para Empresas',
  description: 'Coffee breaks ejecutivos, banquetería para empresas, tortas personalizadas y desayunos corporativos en Santiago y zona norte RM. Cotiza sin compromiso.',
  alternates: { canonical: 'https://www.cafepanda.cl/servicios' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: { '@type': 'LocalBusiness', name: 'Café Panda', url: 'https://www.cafepanda.cl' },
  areaServed: ['Santiago', 'Lampa', 'Valle Grande', 'Quilicura', 'Colina', 'Providencia', 'Las Condes'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios Café Panda',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Coffee Break Ejecutivo', description: 'Ideal para reuniones de trabajo, capacitaciones y jornadas de equipo' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Coffee Break Corporativo', description: 'Para eventos de mayor envergadura, lanzamientos y reuniones de directorio' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Banquetería Completa', description: 'Servicio completo para colegios, licenciaturas y eventos institucionales' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tortas Personalizadas', description: 'Tortas artesanales a pedido para celebraciones especiales' } },
    ],
  },
}

export default function Servicios() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section style={{ background: '#F7F3ED', padding: '64px 20px 48px', borderBottom: '1px solid #e0dbd3' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b26a3c', fontFamily: 'system-ui, sans-serif' }}>Banquetería · Coffee Break · Tortas</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#2f2419', margin: '12px 0 20px' }}>
            Coffee break y banquetería para empresas en Santiago
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#555', fontFamily: 'system-ui, sans-serif', maxWidth: 620, margin: '0 auto 32px' }}>
            Servicio de banquetería y coffee break para empresas, colegios y eventos en Valle Grande, Lampa y toda la RM. Productos frescos del día, entrega puntual y un equipo que sí llega y cumple lo acordado.
          </p>
          <a href="https://wa.me/56942020356?text=Hola,%20quiero%20cotizar%20un%20coffee%20break%20o%20banqueter%C3%ADa%20con%20Café%20Panda."
            target="_blank" rel="noopener"
            style={{ display: 'inline-block', background: '#25d366', color: 'white', padding: '14px 28px', borderRadius: 999, fontSize: 16, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif' }}>
            💬 Cotizar por WhatsApp
          </a>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section style={{ padding: '64px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#2f2419', textAlign: 'center', marginBottom: 48 }}>Por qué confiar tu evento corporativo a Café Panda</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { titulo: 'Empresa real, con local físico', texto: 'Estamos en Santa Teresita de los Andes 402, Valle Grande, Lampa. Puedes visitarnos y conversar tu evento cara a cara.' },
              { titulo: 'Puntualidad garantizada bajo contrato', texto: 'Definimos la hora de entrega en el contrato. Si no cumplimos, nos hacemos responsables. Sin letra chica ni sorpresas.' },
              { titulo: 'Fotos 100% reales de eventos realizados', texto: 'Todo lo que ves en nuestro sitio corresponde a eventos ya realizados por nosotros. No usamos fotos de stock.' },
              { titulo: 'Preparaciones frescas y artesanales', texto: 'Trabajamos con recetas propias y productos del día. No usamos bandejas industriales ni preparaciones congeladas.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#F7F3ED', borderRadius: 16, padding: 28 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, color: '#2f2419', marginBottom: 12 }}>{item.titulo}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: '#555', fontFamily: 'system-ui, sans-serif' }}>{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COFFEE BREAK */}
      <section id="coffee-break" style={{ padding: '64px 20px', background: '#F7F3ED' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b26a3c', fontFamily: 'system-ui, sans-serif' }}>Para empresas</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#2f2419', marginTop: 8 }}>Coffee Break para empresas en Santiago</h2>
            <p style={{ fontSize: 15, color: '#666', marginTop: 12, fontFamily: 'system-ui, sans-serif' }}>Menús 100% personalizables según tu presupuesto y necesidades.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              {
                nombre: 'Coffee Break Ejecutivo',
                descripcion: 'Ideal para reuniones de trabajo, capacitaciones y jornadas de equipo en empresas de Santiago y zona norte RM.',
                items: ['Mini sándwiches variados', 'Brownies y mini queques artesanales', 'Café de grano, té de hojas y agua saborizada', 'Personalizable según tus requerimientos'],
              },
              {
                nombre: 'Coffee Break Corporativo',
                descripcion: 'Para eventos de mayor envergadura, lanzamientos y reuniones de directorio en empresas de la Región Metropolitana.',
                items: ['Wraps y sándwiches gourmet', 'Cheesecake en vasito, kuchen y dulces artesanales', 'Jugos naturales y café de especialidad', 'Presentación premium con montaje incluido'],
              },
              {
                nombre: 'Desayuno Ejecutivo',
                descripcion: 'Desayunos corporativos para arrancar el día con energía. Ideales para reuniones matutinas y capacitaciones.',
                items: ['Medialunas y croissants frescos', 'Jugo natural exprimido', 'Café de especialidad y té', 'Fruta de temporada'],
              },
            ].map((pack, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 16, padding: 28, border: '1px solid #e8e2da', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: '#bd0505', marginBottom: 12 }}>{pack.nombre}</h3>
                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, marginBottom: 20, fontFamily: 'system-ui, sans-serif' }}>{pack.descripcion}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, flexGrow: 1, marginBottom: 24 }}>
                  {pack.items.map((item, j) => (
                    <li key={j} style={{ fontSize: 14, color: '#333', paddingLeft: 16, position: 'relative', fontFamily: 'system-ui, sans-serif' }}>
                      <span style={{ position: 'absolute', left: 0 }}>—</span>{item}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/56942020356?text=Hola,%20quiero%20cotizar%20un%20coffee%20break%20para%20mi%20empresa."
                  target="_blank" rel="noopener"
                  style={{ display: 'block', textAlign: 'center', background: '#2f2419', color: 'white', padding: '12px 20px', borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif' }}>
                  Cotizar este menú →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TORTAS */}
      <section id="tortas" style={{ padding: '64px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b26a3c', fontFamily: 'system-ui, sans-serif' }}>A pedido</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#2f2419', margin: '12px 0 20px' }}>Tortas personalizadas artesanales</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#555', marginBottom: 24, fontFamily: 'system-ui, sans-serif' }}>
              Cada torta es una pieza única, diseñada y elaborada artesanalmente para tu celebración. Fondant, buttercream, temáticas, corporativas o románticas. Para grupos desde 12 hasta +30 personas.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
              {['Diseño 100% personalizado', 'Preparación el mismo día', 'Despacho en Santiago y zona norte', '10% dcto en tu primer pedido'].map((item, i) => (
                <li key={i} style={{ fontSize: 14, color: '#333', display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'system-ui, sans-serif' }}>
                  <span style={{ color: '#25d366', fontWeight: 700 }}>✓</span>{item}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/56942020356?text=Hola,%20quiero%20cotizar%20una%20torta%20personalizada."
              target="_blank" rel="noopener"
              style={{ display: 'inline-block', background: '#25d366', color: 'white', padding: '14px 28px', borderRadius: 999, fontSize: 15, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif' }}>
              💬 Cotizar torta por WhatsApp
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/tortas_pedido_2.jpg', alt: 'Torta personalizada artesanal Café Panda' },
              { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/cheese_cake_maracuja_grande2.jpg', alt: 'Cheesecake artesanal Café Panda' },
              { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/5da6a36e-f1a3-4051-b94d-e00a3848c944_c396571a-d9c2-49ed-9cf2-389af0d70d28.png?v=1754345767', alt: 'Torta temática Atrapasueños Café Panda' },
              { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/promo_duo_2_0e1411c4-ba43-4d54-b35b-eb6fc1447ef4.jpg', alt: 'Pastelería artesanal Café Panda' },
            ].map((img, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: 'hidden', aspectRatio: '1/1' }}>
                <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANQUETERÍA */}
      <section id="banqueteria" style={{ padding: '64px 20px', background: '#2f2419', color: '#F7F3ED' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b26a3c', fontFamily: 'system-ui, sans-serif' }}>Para colegios e instituciones</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', margin: '12px 0 20px' }}>Banquetería completa</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, opacity: 0.85, marginBottom: 40, fontFamily: 'system-ui, sans-serif' }}>
            Licenciaturas, actos escolares, reuniones de apoderados, eventos institucionales. Servicio completo con montaje, atención y retiro. Desde 10 hasta +100 personas en toda la Región Metropolitana.
          </p>
          <a href="https://wa.me/56942020356?text=Hola,%20quiero%20cotizar%20banqueter%C3%ADa%20para%20un%20evento."
            target="_blank" rel="noopener"
            style={{ display: 'inline-block', background: '#25d366', color: 'white', padding: '16px 32px', borderRadius: 999, fontSize: 16, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif' }}>
            💬 Cotizar banquetería
          </a>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 20px', background: '#F7F3ED', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#2f2419', marginBottom: 16 }}>¿Listo para cotizar?</h2>
          <p style={{ fontSize: 15, color: '#666', marginBottom: 32, fontFamily: 'system-ui, sans-serif' }}>Respondemos rápido y enviamos propuesta formal con menú detallado y valores claros en pocas horas.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/56942020356" target="_blank" rel="noopener"
              style={{ display: 'inline-block', background: '#25d366', color: 'white', padding: '14px 28px', borderRadius: 999, fontSize: 15, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif' }}>
              💬 WhatsApp
            </a>
            <Link href="/contacto"
              style={{ display: 'inline-block', border: '2px solid #2f2419', color: '#2f2419', padding: '14px 28px', borderRadius: 999, fontSize: 15, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif' }}>
              Formulario de contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
