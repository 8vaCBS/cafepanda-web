import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Café Panda | Cafetería Artesanal y Coffee Break Corporativo en Valle Grande, Lampa',
  description: 'Casi 10 años siendo parte de Valle Grande. Coffee breaks corporativos, tortas personalizadas y banquetería artesanal para empresas y eventos en Santiago y zona norte RM.',
  alternates: { canonical: 'https://www.cafepanda.cl' },
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

const galeriaEventos = [
  { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/PHOTO-2025-07-14-10-02-46_4fe8522a-7d14-4473-ac6d-dd1ffd39194f.jpg?v=1765318717', alt: 'Coffee break corporativo para jornada de capacitación — empresa multinacional, Santiago' },
  { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/316035E1-6369-444B-8996-211C382A91B9.jpg?v=1780872511', alt: 'Evento de bienvenida con banquetería artesanal — empresa multinacional, Santiago' },
  { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/PHOTO-2026-04-08-13-02-10.jpg?v=1780872511', alt: 'Coffee break para evento corporativo en centro médico — Providencia, Santiago' },
  { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/CC5B3360-BC16-49D0-92BD-C6DCA96933B6.jpg?v=1765319225', alt: 'Banquetería completa para licenciatura — colegio Valle Grande, Lampa' },
  { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/PHOTO-2026-04-08-09-59-03.jpg?v=1780872512', alt: 'Desayuno ejecutivo para capacitación — laboratorio farmacéutico, RM' },
  { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/66798dbc-975f-4063-9cca-393ab1086c2f.jpg?v=1763085105', alt: 'Mesa dulce y salada para matrimonio al aire libre — Pichidangui' },
]

const testimonios = [
  { texto: 'El coffee break llegó puntual, la presentación fue impecable y todo muy rico. Los asistentes quedaron felices.', autor: 'Coordinadora de RRHH', empresa: 'Empresa de Alimentos · RM' },
  { texto: 'Contratamos a Café Panda para la licenciatura del curso y resultó perfecto: abundante, variado y bien organizado.', autor: 'Centro de Padres', empresa: 'Colegio Particular Valle Grande' },
  { texto: 'Rápidos, flexibles y confiables. Los volveríamos a contratar sin dudar para nuestras jornadas corporativas.', autor: 'Encargado de Comunicaciones', empresa: 'Empresa de Maquinaria · Santiago' },
]

export default function Home() {
  return (
    <>
      {/* TICKER */}
      <div style={{ background: '#111', color: '#fff', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '10px 0', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
        Somos la Primera Cafetería de Valle Grande &nbsp;·&nbsp; 9 años de historia &nbsp;·&nbsp; Despachamos a toda la RM
      </div>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'flex-end' }}>
        <img
          src="https://www.cafepanda.cl/cdn/shop/files/716D5037-8546-40BD-90F7-FE73F8ADC847.jpg?v=1780871903&width=1920"
          alt="Café Panda — Sabores para regalar y compartir"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '0 20px 72px', width: '100%' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 16, fontFamily: 'system-ui, sans-serif' }}>
            Valle Grande, Lampa — Primera Cafetería del Barrio
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.8rem, 7vw, 5rem)', fontWeight: 900, lineHeight: 1.05, color: '#fff', marginBottom: 24, maxWidth: 700 }}>
            Sabores para regalar y compartir
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.82)', marginBottom: 36, fontFamily: 'system-ui, sans-serif', maxWidth: 500 }}>
            Coffee breaks corporativos, tortas personalizadas y banquetería artesanal. Casi 10 años en Valle Grande.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="https://wa.me/56942020356?text=Hola,%20quiero%20cotizar%20un%20coffee%20break%20con%20Café%20Panda."
              target="_blank" rel="noopener"
              style={{ background: '#bd0505', color: '#fff', padding: '14px 28px', fontSize: 14, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Cotizar por WhatsApp
            </a>
            <Link href="/servicios"
              style={{ background: 'transparent', color: '#fff', padding: '14px 28px', fontSize: 14, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.5)' }}>
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* PROPUESTA VALOR */}
      <section style={{ background: '#f9f9f9', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {[
            { n: '9+', label: 'Años de experiencia' },
            { n: '73', label: 'Reseñas en Google' },
            { n: '100%', label: 'Productos frescos del día' },
            { n: '4.8', label: 'Calificación promedio' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '28px 24px', textAlign: 'center', borderRight: i < 3 ? '1px solid #eee' : 'none' }}>
              <p style={{ fontSize: 32, fontWeight: 900, color: '#bd0505', fontFamily: "'Playfair Display', Georgia, serif", marginBottom: 4 }}>{item.n}</p>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666', fontFamily: 'system-ui, sans-serif' }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={{ padding: '88px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#999', fontFamily: 'system-ui, sans-serif', marginBottom: 12 }}>Lo que hacemos</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: '#111' }}>Nuestros servicios</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 1, background: '#eee' }}>
            {[
              { titulo: 'Coffee Break Corporativo', descripcion: 'Para reuniones ejecutivas, capacitaciones y eventos empresariales. Montaje profesional incluido. Desde 10 hasta +100 personas en toda la RM.', href: '/servicios#coffee-break', cta: 'Ver más' },
              { titulo: 'Tortas Personalizadas', descripcion: 'Tortas artesanales a pedido para cumpleaños, celebraciones y eventos. Diseños únicos, preparación del día, entrega en Santiago.', href: '/servicios#tortas', cta: 'Ver más' },
              { titulo: 'Banquetería para Empresas', descripcion: 'Servicio completo para colegios, instituciones y eventos corporativos. Menús 100% personalizables según tu presupuesto.', href: '/servicios#banqueteria', cta: 'Ver más' },
            ].map((s, i) => (
              <div key={i} style={{ background: i === 1 ? '#111' : '#fff', padding: '48px 40px' }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: i === 1 ? '#bd0505' : '#bd0505', marginBottom: 16, fontFamily: 'system-ui, sans-serif' }}>
                  0{i + 1}
                </p>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: i === 1 ? '#fff' : '#111', marginBottom: 16, lineHeight: 1.3 }}>{s.titulo}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: i === 1 ? 'rgba(255,255,255,0.65)' : '#555', marginBottom: 32, fontFamily: 'system-ui, sans-serif' }}>{s.descripcion}</p>
                <Link href={s.href} style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: i === 1 ? '#fff' : '#111', textDecoration: 'none', fontFamily: 'system-ui, sans-serif', borderBottom: `1px solid ${i === 1 ? '#fff' : '#111'}`, paddingBottom: 2 }}>
                  {s.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEGUNDA FOTO HERO */}
      <section style={{ position: 'relative', height: '60vh', overflow: 'hidden' }}>
        <img
          src="https://www.cafepanda.cl/cdn/shop/files/98b5a4ec-574c-4fe8-9fa9-7506fa73de0f.jpg?v=1762127375&width=1920"
          alt="Coffee break y eventos para instituciones — Café Panda"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', color: '#fff', padding: '0 20px' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 16, fontFamily: 'system-ui, sans-serif', opacity: 0.7 }}>Novedades</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: 28 }}>
              Coffee, eventos para instituciones y empresas
            </h2>
            <a href="https://wa.me/56942020356?text=Hola,%20quiero%20cotizar%20un%20coffee%20break%20para%20mi%20empresa."
              target="_blank" rel="noopener"
              style={{ background: '#bd0505', color: '#fff', padding: '14px 28px', fontSize: 13, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'inline-block' }}>
              Cotizar ahora
            </a>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section style={{ padding: '88px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#999', fontFamily: 'system-ui, sans-serif', marginBottom: 12 }}>Fotos 100% reales</p>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900, color: '#111' }}>Eventos realizados</h2>
            </div>
            <Link href="/servicios" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#111', textDecoration: 'none', fontFamily: 'system-ui, sans-serif', borderBottom: '1px solid #111', paddingBottom: 2 }}>
              Ver todos los servicios →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
            {galeriaEventos.map((img, i) => (
              <div key={i} style={{ aspectRatio: i === 0 ? '16/9' : '1/1', gridColumn: i === 0 ? 'span 2' : 'span 1', overflow: 'hidden', background: '#f0f0f0' }}>
                <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section style={{ padding: '88px 20px', background: '#111' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#555', fontFamily: 'system-ui, sans-serif', marginBottom: 12 }}>Lo que dicen de nosotros</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900, color: '#fff' }}>
              4.8 de 5 · 73 reseñas en Google
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, background: '#222' }}>
            {testimonios.map((t, i) => (
              <div key={i} style={{ background: '#111', padding: '40px 32px' }}>
                <p style={{ fontSize: 13, color: '#bd0505', letterSpacing: '0.05em', fontFamily: 'system-ui, sans-serif', marginBottom: 16 }}>★★★★★</p>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.75)', fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', marginBottom: 24 }}>"{t.texto}"</p>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', fontFamily: 'system-ui, sans-serif' }}>{t.autor}</p>
                <p style={{ fontSize: 12, color: '#555', fontFamily: 'system-ui, sans-serif', marginTop: 4 }}>{t.empresa}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <a href="https://share.google/qHqw5NeZzh4raFYwV" target="_blank" rel="noopener"
              style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', fontFamily: 'system-ui, sans-serif', borderBottom: '1px solid #555', paddingBottom: 2 }}>
              Ver las 73 reseñas verificadas en Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section style={{ padding: '88px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#999', fontFamily: 'system-ui, sans-serif', marginBottom: 12 }}>Novedades del Café Panda</p>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900, color: '#111' }}>Del blog</h2>
            </div>
            <Link href="/blog" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#111', textDecoration: 'none', fontFamily: 'system-ui, sans-serif', borderBottom: '1px solid #111', paddingBottom: 2 }}>
              Ver todos →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {blogPosts.map((post, i) => (
              <a key={i} href={`https://www.cafepanda.cl/blogs/news/${post.slug}`} target="_blank" rel="noopener" style={{ textDecoration: 'none', display: 'block', background: '#fff' }}>
                <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#eee' }}>
                  <img src={post.img} alt={post.titulo} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
                </div>
                <div style={{ padding: '24px 24px 28px' }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', fontFamily: 'system-ui, sans-serif', marginBottom: 10 }}>{post.categoria}</p>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: '#111', marginBottom: 10, lineHeight: 1.3 }}>{post.titulo}</h3>
                  <p style={{ fontSize: 14, color: '#666', lineHeight: 1.6, fontFamily: 'system-ui, sans-serif', marginBottom: 16 }}>{post.excerpt}</p>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#bd0505', fontFamily: 'system-ui, sans-serif' }}>Leer →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '88px 20px', background: '#bd0505', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontFamily: 'system-ui, sans-serif', marginBottom: 16 }}>Casi 10 años en Valle Grande</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: 20, lineHeight: 1.15 }}>
            Los mejores eventos y coffee son con los Pandas
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', marginBottom: 40, fontFamily: 'system-ui, sans-serif' }}>
            Café Panda lleva casi 10 años realizando eventos corporativos, coffee breaks, licenciaturas y eventos para colegios en Santiago y toda la RM.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/56942020356?text=Hola,%20quiero%20cotizar%20un%20coffee%20break%20para%20mi%20empresa."
              target="_blank" rel="noopener"
              style={{ background: '#fff', color: '#bd0505', padding: '14px 28px', fontSize: 13, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Cotizar por WhatsApp
            </a>
            <Link href="/contacto"
              style={{ background: 'transparent', color: '#fff', padding: '14px 28px', fontSize: 13, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.5)' }}>
              Formulario de contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
