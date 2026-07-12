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
  { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/PHOTO-2025-07-14-10-02-46_4fe8522a-7d14-4473-ac6d-dd1ffd39194f.jpg?v=1765318717', alt: 'Coffee break corporativo — empresa multinacional, Santiago' },
  { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/316035E1-6369-444B-8996-211C382A91B9.jpg?v=1780872511', alt: 'Evento de bienvenida con banquetería — empresa multinacional' },
  { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/PHOTO-2026-04-08-13-02-10.jpg?v=1780872511', alt: 'Coffee break en centro médico — Providencia, Santiago' },
  { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/CC5B3360-BC16-49D0-92BD-C6DCA96933B6.jpg?v=1765319225', alt: 'Banquetería para licenciatura — colegio Valle Grande' },
  { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/PHOTO-2026-04-08-09-59-03.jpg?v=1780872512', alt: 'Desayuno ejecutivo — laboratorio farmacéutico, RM' },
  { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/66798dbc-975f-4063-9cca-393ab1086c2f.jpg?v=1763085105', alt: 'Mesa dulce y salada para matrimonio' },
]

const testimonios = [
  { texto: 'El coffee break llegó puntual, la presentación fue impecable y todo muy rico. Los asistentes quedaron felices.', autor: 'Coordinadora de RRHH', empresa: 'Empresa de Alimentos · RM' },
  { texto: 'Contratamos a Café Panda para la licenciatura del curso y resultó perfecto: abundante, variado y bien organizado.', autor: 'Centro de Padres', empresa: 'Colegio Particular Valle Grande' },
  { texto: 'Rápidos, flexibles y confiables. Los volveríamos a contratar sin dudar para nuestras jornadas corporativas.', autor: 'Encargado de Comunicaciones', empresa: 'Empresa de Maquinaria · Santiago' },
]

export default function Home() {
  return (
    <>
      <style>{`
        .hero { position: relative; min-height: 100svh; display: flex; align-items: flex-end; overflow: hidden; }
        .hero-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.15) 60%); }
        .hero-content { position: relative; z-index: 1; width: 100%; max-width: 1100px; margin: 0 auto; padding: 0 20px 56px; }
        .hero h1 { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(2.4rem, 8vw, 5rem); font-weight: 900; line-height: 1.05; color: #fff; margin-bottom: 20px; }
        .hero p { font-size: clamp(15px, 2vw, 17px); line-height: 1.7; color: rgba(255,255,255,0.82); margin-bottom: 32px; max-width: 480px; }
        .hero-btns { display: flex; flex-wrap: wrap; gap: 10px; }
        .btn-red { background: #bd0505; color: #fff; padding: 14px 24px; font-size: 12px; font-weight: 700; text-decoration: none; font-family: system-ui, sans-serif; letter-spacing: 0.1em; text-transform: uppercase; display: inline-block; }
        .btn-outline-white { background: transparent; color: #fff; padding: 14px 24px; font-size: 12px; font-weight: 700; text-decoration: none; font-family: system-ui, sans-serif; letter-spacing: 0.1em; text-transform: uppercase; display: inline-block; border: 1px solid rgba(255,255,255,0.5); }
        .btn-outline-black { background: transparent; color: #111; padding: 12px 22px; font-size: 11px; font-weight: 700; text-decoration: none; font-family: system-ui, sans-serif; letter-spacing: 0.1em; text-transform: uppercase; display: inline-block; border: 1px solid #111; }
        .ticker { background: #111; color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 10px 20px; text-align: center; font-family: system-ui, sans-serif; }
        .stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); background: #f4f4f4; border-bottom: 1px solid #e8e8e8; }
        @media (min-width: 640px) { .stats-grid { grid-template-columns: repeat(4, 1fr); } }
        .stat-item { padding: 28px 20px; text-align: center; border-right: 1px solid #e8e8e8; border-bottom: 1px solid #e8e8e8; }
        .stat-num { font-family: 'Playfair Display', Georgia, serif; font-size: 2.2rem; font-weight: 900; color: #bd0505; display: block; }
        .stat-label { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #888; font-family: system-ui, sans-serif; margin-top: 4px; display: block; }
        .section { padding: 72px 20px; }
        .section-inner { max-width: 1100px; margin: 0 auto; }
        .section-eyebrow { font-size: 10px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: #999; font-family: system-ui, sans-serif; margin-bottom: 12px; display: block; }
        .section-title { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 900; color: #111; }
        .section-title-white { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 900; color: #fff; }
        .services-grid { display: grid; grid-template-columns: 1fr; gap: 1px; background: #e8e8e8; margin-top: 40px; }
        @media (min-width: 768px) { .services-grid { grid-template-columns: repeat(3, 1fr); } }
        .service-card { background: #fff; padding: 40px 32px; }
        .service-card-dark { background: #111; padding: 40px 32px; }
        .service-num { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; color: #bd0505; font-family: system-ui, sans-serif; margin-bottom: 16px; display: block; }
        .service-title { font-family: 'Playfair Display', Georgia, serif; font-size: 1.25rem; font-weight: 700; color: #111; margin-bottom: 14px; line-height: 1.3; }
        .service-title-white { font-family: 'Playfair Display', Georgia, serif; font-size: 1.25rem; font-weight: 700; color: #fff; margin-bottom: 14px; line-height: 1.3; }
        .service-desc { font-size: 14px; line-height: 1.8; color: #555; margin-bottom: 28px; font-family: system-ui, sans-serif; }
        .service-desc-muted { font-size: 14px; line-height: 1.8; color: rgba(255,255,255,0.6); margin-bottom: 28px; font-family: system-ui, sans-serif; }
        .text-link { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; font-family: system-ui, sans-serif; border-bottom: 1px solid; padding-bottom: 2px; }
        .gallery-grid { display: grid; grid-template-columns: 1fr; gap: 4px; margin-top: 40px; }
        @media (min-width: 640px) { .gallery-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 900px) { .gallery-grid { grid-template-columns: repeat(3, 1fr); } }
        .gallery-item { aspect-ratio: 4/3; overflow: hidden; background: #f0f0f0; }
        .gallery-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .testimonials-grid { display: grid; grid-template-columns: 1fr; gap: 1px; background: #222; margin-top: 40px; }
        @media (min-width: 768px) { .testimonials-grid { grid-template-columns: repeat(3, 1fr); } }
        .testimonial-card { background: #111; padding: 36px 28px; }
        .stars { font-size: 12px; color: #bd0505; margin-bottom: 16px; letter-spacing: 2px; }
        .testimonial-text { font-family: 'Playfair Display', Georgia, serif; font-size: 15px; line-height: 1.8; color: rgba(255,255,255,0.75); font-style: italic; margin-bottom: 20px; }
        .testimonial-author { font-size: 12px; font-weight: 700; color: #fff; font-family: system-ui, sans-serif; }
        .testimonial-company { font-size: 11px; color: #555; font-family: system-ui, sans-serif; margin-top: 4px; }
        .blog-grid { display: grid; grid-template-columns: 1fr; gap: 20px; margin-top: 40px; }
        @media (min-width: 640px) { .blog-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 900px) { .blog-grid { grid-template-columns: repeat(3, 1fr); } }
        .blog-card { background: #fff; text-decoration: none; display: block; border: 1px solid #e8e8e8; }
        .blog-img-wrap { aspect-ratio: 16/9; overflow: hidden; background: #eee; }
        .blog-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .blog-body { padding: 20px; }
        .blog-cat { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #999; font-family: system-ui, sans-serif; margin-bottom: 8px; display: block; }
        .blog-title { font-family: 'Playfair Display', Georgia, serif; font-size: 17px; font-weight: 700; color: #111; margin-bottom: 8px; line-height: 1.3; }
        .blog-excerpt { font-size: 13px; color: #666; line-height: 1.6; font-family: system-ui, sans-serif; margin-bottom: 14px; }
        .blog-read { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #bd0505; font-family: system-ui, sans-serif; }
        .cta-section { background: #bd0505; padding: 72px 20px; text-align: center; }
        .cta-inner { max-width: 600px; margin: 0 auto; }
        .cta-title { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 900; color: #fff; margin-bottom: 16px; line-height: 1.15; }
        .cta-desc { font-size: 16px; line-height: 1.7; color: rgba(255,255,255,0.85); margin-bottom: 36px; font-family: system-ui, sans-serif; }
        .cta-btns { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
        .btn-white { background: #fff; color: #bd0505; padding: 14px 24px; font-size: 12px; font-weight: 700; text-decoration: none; font-family: system-ui, sans-serif; letter-spacing: 0.1em; text-transform: uppercase; display: inline-block; }
        .btn-outline-white-sm { background: transparent; color: #fff; padding: 14px 24px; font-size: 12px; font-weight: 700; text-decoration: none; font-family: system-ui, sans-serif; letter-spacing: 0.1em; text-transform: uppercase; display: inline-block; border: 1px solid rgba(255,255,255,0.5); }
        .section-header-row { display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 16px; margin-bottom: 40px; }
        .hero-eyebrow { font-size: 10px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: rgba(255,255,255,0.55); font-family: system-ui, sans-serif; margin-bottom: 16px; display: block; }
      `}</style>

      {/* TICKER */}
      <div className="ticker">
        Somos la Primera Cafetería de Valle Grande &nbsp;&middot;&nbsp; 9 años de historia &nbsp;&middot;&nbsp; Despachamos a toda la RM
      </div>

      {/* HERO */}
      <section className="hero">
        <img
          className="hero-img"
          src="https://www.cafepanda.cl/cdn/shop/files/716D5037-8546-40BD-90F7-FE73F8ADC847.jpg?v=1780871903&width=1920"
          alt="Café Panda — Sabores para regalar y compartir"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-eyebrow">Valle Grande, Lampa — Primera Cafetería del Barrio</span>
          <h1>Sabores para regalar y compartir</h1>
          <p>Coffee breaks corporativos, tortas personalizadas y banquetería artesanal. Casi 10 años en Valle Grande.</p>
          <div className="hero-btns">
            <a href="https://wa.me/56942020356?text=Hola,%20quiero%20cotizar%20un%20coffee%20break%20con%20Café%20Panda." target="_blank" rel="noopener" className="btn-red">
              Cotizar por WhatsApp
            </a>
            <Link href="/servicios" className="btn-outline-white">
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-grid">
        {[
          { n: '9+', label: 'Años de experiencia' },
          { n: '73', label: 'Reseñas en Google' },
          { n: '4.8', label: 'Calificación' },
          { n: '100%', label: 'Productos frescos' },
        ].map((s, i) => (
          <div key={i} className="stat-item">
            <span className="stat-num">{s.n}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* SERVICIOS */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner">
          <span className="section-eyebrow">Lo que hacemos</span>
          <h2 className="section-title">Nuestros servicios</h2>
          <div className="services-grid">
            <div className="service-card">
              <span className="service-num">01</span>
              <h3 className="service-title">Coffee Break Corporativo</h3>
              <p className="service-desc">Para reuniones ejecutivas, capacitaciones y eventos empresariales. Montaje profesional incluido. Desde 10 hasta +100 personas en toda la RM.</p>
              <Link href="/servicios#coffee-break" className="text-link" style={{ color: '#111' }}>Ver más →</Link>
            </div>
            <div className="service-card-dark">
              <span className="service-num">02</span>
              <h3 className="service-title-white">Tortas Personalizadas</h3>
              <p className="service-desc-muted">Tortas artesanales a pedido para cumpleaños, celebraciones y eventos. Diseños únicos, preparación del día, entrega en Santiago.</p>
              <Link href="/servicios#tortas" className="text-link" style={{ color: '#fff' }}>Ver más →</Link>
            </div>
            <div className="service-card">
              <span className="service-num">03</span>
              <h3 className="service-title">Banquetería para Empresas</h3>
              <p className="service-desc">Servicio completo para colegios, instituciones y eventos corporativos. Menús 100% personalizables según tu presupuesto.</p>
              <Link href="/servicios#banqueteria" className="text-link" style={{ color: '#111' }}>Ver más →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEGUNDA FOTO */}
      <section style={{ position: 'relative', height: 'clamp(280px, 50vw, 520px)', overflow: 'hidden' }}>
        <img
          src="https://www.cafepanda.cl/cdn/shop/files/98b5a4ec-574c-4fe8-9fa9-7506fa73de0f.jpg?v=1762127375&width=1920"
          alt="Coffee break y eventos corporativos — Café Panda"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', color: '#fff', maxWidth: 600 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif', opacity: 0.6, display: 'block', marginBottom: 16 }}>Novedades</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: 28 }}>
              Coffee, eventos para instituciones y empresas
            </h2>
            <a href="https://wa.me/56942020356?text=Hola,%20quiero%20cotizar%20un%20coffee%20break%20para%20mi%20empresa." target="_blank" rel="noopener" className="btn-red">
              Cotizar ahora
            </a>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner">
          <div className="section-header-row">
            <div>
              <span className="section-eyebrow">Fotos 100% reales</span>
              <h2 className="section-title">Eventos realizados</h2>
            </div>
            <Link href="/servicios" className="text-link" style={{ color: '#111' }}>Ver todos los servicios →</Link>
          </div>
          <div className="gallery-grid">
            {galeriaEventos.map((img, i) => (
              <div key={i} className="gallery-item">
                <img className="gallery-img" src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="section" style={{ background: '#111' }}>
        <div className="section-inner">
          <span className="section-eyebrow" style={{ color: '#444' }}>Lo que dicen de nosotros</span>
          <h2 className="section-title-white">4.8 de 5 · 73 reseñas en Google</h2>
          <div className="testimonials-grid">
            {testimonios.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">"{t.texto}"</p>
                <p className="testimonial-author">{t.autor}</p>
                <p className="testimonial-company">{t.empresa}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <a href="https://share.google/qHqw5NeZzh4raFYwV" target="_blank" rel="noopener" className="text-link" style={{ color: '#fff' }}>
              Ver las 73 reseñas verificadas en Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="section" style={{ background: '#f9f9f9' }}>
        <div className="section-inner">
          <div className="section-header-row">
            <div>
              <span className="section-eyebrow">Novedades del Café Panda</span>
              <h2 className="section-title">Del blog</h2>
            </div>
            <Link href="/blog" className="text-link" style={{ color: '#111' }}>Ver todos →</Link>
          </div>
          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <a key={i} href={`https://www.cafepanda.cl/blogs/news/${post.slug}`} target="_blank" rel="noopener" className="blog-card">
                <div className="blog-img-wrap">
                  <img className="blog-img" src={post.img} alt={post.titulo} loading="lazy" />
                </div>
                <div className="blog-body">
                  <span className="blog-cat">{post.categoria}</span>
                  <h3 className="blog-title">{post.titulo}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <span className="blog-read">Leer →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Casi 10 años en Valle Grande</span>
          <h2 className="cta-title">Los mejores eventos y coffee son con los Pandas</h2>
          <p className="cta-desc">Café Panda lleva casi 10 años realizando eventos corporativos, coffee breaks, licenciaturas y eventos para colegios en Santiago y toda la RM.</p>
          <div className="cta-btns">
            <a href="https://wa.me/56942020356?text=Hola,%20quiero%20cotizar%20un%20coffee%20break%20para%20mi%20empresa." target="_blank" rel="noopener" className="btn-white">
              Cotizar por WhatsApp
            </a>
            <Link href="/contacto" className="btn-outline-white-sm">
              Formulario de contacto
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp flotante */}
      <a href="https://wa.me/56942020356" target="_blank" rel="noopener" className="wa-float" aria-label="WhatsApp">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  )
}
