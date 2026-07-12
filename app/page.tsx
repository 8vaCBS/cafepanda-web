import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Café Panda | Cafetería Artesanal y Coffee Break Corporativo en Valle Grande, Lampa',
  description: 'Casi 10 años siendo parte de Valle Grande. Coffee breaks corporativos, tortas personalizadas y banquetería artesanal para empresas y eventos en Santiago y zona norte RM.',
}

const blogPosts = [
  {
    titulo: 'Sopaipillas Pasadas a Domicilio desde Valle Grande, Lampa',
    excerpt: 'Receta Casera · 100% Zapallo Natural · El fin del mito de la masa seca y la chancaca aguada.',
    img: 'https://www.cafepanda.cl/cdn/shop/articles/sopaipa_pasada_c0ec302d-bb92-4d12-abb6-6048c8512b34.jpg?v=1780883220&width=800',
    slug: 'sopaipillas-pasadas-a-domicilio-lampa',
    categoria: 'Recetas · Local',
  },
  {
    titulo: 'Tortas Personalizadas en Santiago: Evita el "Expectativa vs Realidad"',
    excerpt: 'Pastelería Artesanal · Evita los 3 errores más comunes al cotizar una torta personalizada.',
    img: 'https://www.cafepanda.cl/cdn/shop/articles/PHOTO-2026-05-17-12-14-35_1.jpg?v=1780882034&width=800',
    slug: 'tortas-personalizadas-santiago-pedido',
    categoria: 'Tortas · Tips',
  },
  {
    titulo: '¿Cómo organizar un Coffee Break para Empresas en Lampa y Quilicura?',
    excerpt: 'Logística Local · Evita retrasos y costos extras en eventos corporativos en zona norte.',
    img: 'https://www.cafepanda.cl/cdn/shop/articles/PHOTO-2026-04-08-08-07-39_22f891b1-a3b1-434f-aa32-6c66b5836c71.jpg?v=1782072769&width=800',
    slug: 'coffee-break-empresas-lampa-quilicura',
    categoria: 'B2B · Corporativo',
  },
]

const servicios = [
  {
    emoji: '☕',
    titulo: 'Coffee Break Corporativo',
    descripcion: 'Para reuniones ejecutivas, capacitaciones y eventos empresariales. Montaje profesional incluido. Desde 10 hasta +100 personas en toda la RM.',
    href: '/servicios#coffee-break',
  },
  {
    emoji: '🎂',
    titulo: 'Tortas Personalizadas',
    descripcion: 'Tortas artesanales a pedido para cumpleaños, celebraciones y eventos. Diseños únicos, preparación del día.',
    href: '/servicios#tortas',
  },
  {
    emoji: '🍱',
    titulo: 'Banquetería para Empresas',
    descripcion: 'Servicio completo para colegios, instituciones y eventos corporativos. Menús 100% personalizables según tu presupuesto.',
    href: '/servicios#banqueteria',
  },
]

const galeria = [
  { src: 'https://www.cafepanda.cl/cdn/shop/files/716D5037-8546-40BD-90F7-FE73F8ADC847.jpg?v=1780871903&width=800', alt: 'Café Panda - Sabores para regalar y compartir' },
  { src: 'https://www.cafepanda.cl/cdn/shop/files/98b5a4ec-574c-4fe8-9fa9-7506fa73de0f.jpg?v=1762127375&width=800', alt: 'Coffee break y eventos para instituciones - Café Panda' },
  { src: 'https://www.cafepanda.cl/cdn/shop/files/PHOTO-2026-04-08-13-02-10.jpg?v=1780872511&width=800', alt: 'Coffee break premium para empresas - Café Panda' },
  { src: 'https://www.cafepanda.cl/cdn/shop/files/tortas_pedido_2.jpg?width=800', alt: 'Tortas personalizadas artesanales - Café Panda' },
  { src: 'https://www.cafepanda.cl/cdn/shop/files/cheese_cake_maracuja_grande2.jpg?width=800', alt: 'Cheesecake artesanal - Café Panda' },
  { src: 'https://www.cafepanda.cl/cdn/shop/files/Blue_and_Yellow_Modern_Brunch_Buffet_Instagram_Post_1.png?v=1760010010&width=800', alt: 'Los mejores eventos con los Pandas' },
]

const testimonios = [
  { texto: 'Todo llegó puntual, delicioso y perfectamente presentado. ¡Recomendado 100%!', autor: 'Marcela G.', zona: 'Chicureo' },
  { texto: 'Pedí un desayuno sorpresa y superó todas mis expectativas. Atención muy cálida por parte de los Panditas.', autor: 'Carlos P.', zona: 'Valle Grande' },
  { texto: 'Nuestros eventos de empresa siempre son un éxito. Café Panda es nuestro proveedor.', autor: 'Andrea R.', zona: 'Providencia' },
]

export default function Home() {
  return (
    <>
      {/* TICKER */}
      <div style={{ background: '#111', color: '#fff', fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', overflow: 'hidden', whiteSpace: 'nowrap', padding: '10px 0', fontFamily: 'system-ui, sans-serif' }}>
        <span style={{ display: 'inline-block', animation: 'none' }}>
          &nbsp;&nbsp;&nbsp;Somos la Primera Cafetería de Valle Grande · 9 años de historia y miles de clientes felices · Despachamos a toda la RM &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Somos la Primera Cafetería de Valle Grande · 9 años de historia y miles de clientes felices · Despachamos a toda la RM
        </span>
      </div>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="https://www.cafepanda.cl/cdn/shop/files/716D5037-8546-40BD-90F7-FE73F8ADC847.jpg?v=1780871903&width=1920"
            alt="Café Panda - Sabores para regalar y compartir"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.52)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '80px 20px', width: '100%' }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#f0c070', display: 'block', marginBottom: 16, fontFamily: 'system-ui, sans-serif' }}>
            Valle Grande, Lampa · Primera Cafetería del Barrio
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.4rem, 6vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24, color: '#fff', maxWidth: 700 }}>
            Sabores para regalar y compartir
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: 'rgba(255,255,255,0.88)', marginBottom: 40, fontFamily: 'system-ui, sans-serif', maxWidth: 540 }}>
            Coffee breaks corporativos, tortas personalizadas y banquetería artesanal para empresas y eventos. Frescos del día. Casi 10 años en Valle Grande.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="https://wa.me/56942020356?text=Hola,%20quiero%20cotizar%20un%20coffee%20break%20o%20banqueter%C3%ADa%20con%20Café%20Panda."
              target="_blank" rel="noopener"
              style={{ background: '#25d366', color: 'white', padding: '16px 32px', borderRadius: 4, fontSize: 16, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', display: 'inline-block', letterSpacing: '0.03em' }}>
              💬 Cotizar por WhatsApp
            </a>
            <Link href="/servicios"
              style={{ background: 'transparent', color: '#fff', padding: '16px 32px', borderRadius: 4, fontSize: 16, fontWeight: 600, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', border: '2px solid rgba(255,255,255,0.6)', display: 'inline-block' }}>
              Ver servicios →
            </Link>
          </div>
        </div>
      </section>

      {/* PROPUESTA VALOR */}
      <section style={{ background: '#111', color: '#fff', padding: '0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {[
            { icon: '🗓️', texto: 'Casi 10 años de experiencia' },
            { icon: '🥐', texto: 'Preparaciones frescas del día' },
            { icon: '📋', texto: 'Contrato claro, sin letra chica' },
            { icon: '🚚', texto: 'Puntualidad garantizada' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 14, borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ fontSize: 22 }}>{item.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', fontFamily: 'system-ui, sans-serif', textTransform: 'uppercase' }}>{item.texto}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={{ padding: '88px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#888', fontFamily: 'system-ui, sans-serif' }}>Lo que hacemos</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#111', marginTop: 8, fontWeight: 900 }}>Nuestros servicios</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
            {servicios.map((s, i) => (
              <div key={i} style={{ background: i === 1 ? '#111' : '#f5f5f5', padding: '40px 36px', position: 'relative' }}>
                <span style={{ fontSize: 36, display: 'block', marginBottom: 20 }}>{s.emoji}</span>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, color: i === 1 ? '#fff' : '#111', marginBottom: 14, fontWeight: 700 }}>{s.titulo}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: i === 1 ? 'rgba(255,255,255,0.75)' : '#555', marginBottom: 28, fontFamily: 'system-ui, sans-serif' }}>{s.descripcion}</p>
                <Link href={s.href} style={{ color: i === 1 ? '#f0c070' : '#111', fontWeight: 700, textDecoration: 'none', fontSize: 13, fontFamily: 'system-ui, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase', borderBottom: `2px solid ${i === 1 ? '#f0c070' : '#111'}`, paddingBottom: 2 }}>
                  Ver más →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section style={{ padding: '88px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#888', fontFamily: 'system-ui, sans-serif' }}>Fotos 100% reales</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#111', marginTop: 8, fontWeight: 900 }}>Eventos que hemos realizado</h2>
            <p style={{ fontSize: 15, color: '#666', marginTop: 8, fontFamily: 'system-ui, sans-serif' }}>Todo lo que ves corresponde a eventos reales. No usamos fotos de stock.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
            {galeria.map((img, i) => (
              <div key={i} style={{ aspectRatio: i === 0 ? '2/1' : '1/1', gridColumn: i === 0 ? 'span 2' : 'span 1', overflow: 'hidden' }}>
                <img src={img.src} alt={img.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section style={{ padding: '88px 20px', background: '#111', color: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#888', fontFamily: 'system-ui, sans-serif' }}>Lo que dicen de nosotros</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginTop: 8, fontWeight: 900 }}>⭐ 4.9/5 en Google y Facebook</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1 }}>
            {testimonios.map((t, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '36px 32px', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
                <p style={{ fontSize: 16, lineHeight: 1.8, fontStyle: 'italic', marginBottom: 24, color: 'rgba(255,255,255,0.85)', fontFamily: "'Playfair Display', Georgia, serif" }}>"{t.texto}"</p>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 14, fontFamily: 'system-ui, sans-serif', color: '#f0c070' }}>{t.autor}</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontFamily: 'system-ui, sans-serif' }}>{t.zona}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section style={{ padding: '88px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#888', fontFamily: 'system-ui, sans-serif' }}>Novedades del Café Panda</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#111', marginTop: 8, fontWeight: 900 }}>Del blog</h2>
            </div>
            <Link href="/blog" style={{ fontSize: 13, fontWeight: 700, color: '#111', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', borderBottom: '2px solid #111', paddingBottom: 2, fontFamily: 'system-ui, sans-serif' }}>
              Ver todos →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
            {blogPosts.map((post, i) => (
              <a key={i} href={`https://www.cafepanda.cl/blogs/news/${post.slug}`} target="_blank" rel="noopener" style={{ textDecoration: 'none', display: 'block', background: '#f9f9f9' }}>
                <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                  <img src={post.img} alt={post.titulo} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    loading="lazy" />
                </div>
                <div style={{ padding: '24px 24px 28px' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', fontFamily: 'system-ui, sans-serif' }}>{post.categoria}</span>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, color: '#111', margin: '8px 0 10px', lineHeight: 1.3, fontWeight: 700 }}>{post.titulo}</h3>
                  <p style={{ fontSize: 14, color: '#666', lineHeight: 1.6, fontFamily: 'system-ui, sans-serif' }}>{post.excerpt}</p>
                  <p style={{ marginTop: 16, fontSize: 12, color: '#111', fontWeight: 700, fontFamily: 'system-ui, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Leer →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '88px 20px', background: '#f0c070', color: '#111', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', fontFamily: 'system-ui, sans-serif' }}>¿Tienes un evento próximo?</span>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: 12, marginBottom: 20, fontWeight: 900 }}>
            Los mejores eventos y coffee son con los Pandas
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(0,0,0,0.7)', marginBottom: 40, fontFamily: 'system-ui, sans-serif' }}>
            Café Panda lleva casi 10 años realizando eventos corporativos, coffee breaks y eventos para colegios en Santiago y toda la RM.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/56942020356?text=Hola,%20quiero%20cotizar%20un%20coffee%20break%20para%20mi%20empresa."
              target="_blank" rel="noopener"
              style={{ background: '#111', color: 'white', padding: '16px 32px', borderRadius: 4, fontSize: 16, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif' }}>
              💬 Cotizar por WhatsApp
            </a>
            <Link href="/contacto"
              style={{ background: 'transparent', color: '#111', padding: '16px 32px', borderRadius: 4, fontSize: 16, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', border: '2px solid #111' }}>
              Formulario de contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
