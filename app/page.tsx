export const dynamic = "force-dynamic"
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { latestPostsQuery } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Café Panda | Cafetería Artesanal y Coffee Break Corporativo en Valle Grande, Lampa',
  description: 'Casi 10 años siendo parte de Valle Grande. Coffee breaks corporativos, tortas personalizadas y banquetería para empresas en Santiago y zona norte RM. Cotiza hoy.',
}

const servicios = [
  {
    emoji: '☕',
    titulo: 'Coffee Break Corporativo',
    descripcion: 'Reuniones ejecutivas, capacitaciones y eventos empresariales con montaje profesional incluido. Desde 10 hasta +100 personas.',
    href: '/servicios#coffee-break',
    cta: 'Cotizar coffee break',
  },
  {
    emoji: '🎂',
    titulo: 'Tortas Personalizadas',
    descripcion: 'Tortas artesanales a pedido para cumpleaños, celebraciones y eventos. Diseños únicos, preparación del día, entrega en Santiago.',
    href: '/servicios#tortas',
    cta: 'Ver tortas',
  },
  {
    emoji: '🍽️',
    titulo: 'Banquetería para Empresas',
    descripcion: 'Servicio completo de banquetería para colegios, instituciones y eventos corporativos. Menús 100% personalizables.',
    href: '/servicios#banqueteria',
    cta: 'Ver servicios',
  },
]

const testimonios = [
  { texto: 'Todo llegó puntual, delicioso y perfectamente presentado. ¡Recomendado 100%!', autor: 'Marcela G.', zona: 'Chicureo' },
  { texto: 'Pedí un desayuno sorpresa y superó todas mis expectativas. Atención muy cálida.', autor: 'Carlos P.', zona: 'Valle Grande' },
  { texto: 'Nuestros eventos de empresa siempre son un éxito. Café Panda es nuestro proveedor.', autor: 'Andrea R.', zona: 'Providencia' },
]

const galeria = [
  { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/PHOTO-2026-04-08-13-02-10.jpg?v=1780872511', alt: 'Coffee break premium para empresas - Café Panda' },
  { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/cockteleria_7_7183fb6c-eeb4-4a7d-9f61-6103f0f837d0.jpg', alt: 'Coctelería y banquetería corporativa - Café Panda' },
  { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/tortas_pedido_2.jpg', alt: 'Tortas personalizadas artesanales - Café Panda' },
  { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/cheese_cake_maracuja_grande2.jpg', alt: 'Cheesecake artesanal de maracuyá - Café Panda' },
  { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/sopaipillas_con_pebre2_37ae050c-d525-4726-a9d2-21d8cb29a63f.jpg', alt: 'Sopaipillas artesanales - Café Panda' },
  { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/promo_duo_2_0e1411c4-ba43-4d54-b35b-eb6fc1447ef4.jpg', alt: 'Promo duo pastelería - Café Panda' },
]

export default async function Home() {
  let latestPosts: any[] = []
  try {
    latestPosts = await client.fetch(latestPostsQuery)
  } catch (e) {
    latestPosts = []
  }

  return (
    <>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #2f2419 0%, #4a3728 100%)', color: '#F7F3ED', padding: '80px 20px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b26a3c', display: 'block', marginBottom: 16, fontFamily: 'system-ui, sans-serif' }}>
              Valle Grande, Lampa · Casi 10 años
            </span>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: 24, color: '#F7F3ED' }}>
              Sabores artesanales que se quedan en la memoria
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, opacity: 0.85, marginBottom: 36, fontFamily: 'system-ui, sans-serif' }}>
              Coffee breaks corporativos, tortas personalizadas y banquetería artesanal para empresas y eventos en Santiago y zona norte RM. Frescos del día, nunca congelados.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="https://wa.me/56942020356?text=Hola,%20quiero%20cotizar%20un%20coffee%20break%20o%20banqueter%C3%ADa%20con%20Café%20Panda."
                target="_blank" rel="noopener"
                style={{ background: '#25d366', color: 'white', padding: '14px 28px', borderRadius: 999, fontSize: 16, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', display: 'inline-block' }}>
                💬 Cotizar por WhatsApp
              </a>
              <Link href="/servicios"
                style={{ background: 'rgba(255,255,255,0.12)', color: '#F7F3ED', padding: '14px 28px', borderRadius: 999, fontSize: 16, fontWeight: 600, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', border: '1px solid rgba(255,255,255,0.2)', display: 'inline-block' }}>
                Ver servicios →
              </Link>
            </div>
            <p style={{ marginTop: 24, fontSize: 13, opacity: 0.6, fontFamily: 'system-ui, sans-serif' }}>
              Respondemos rápido · Propuesta formal en pocas horas
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {galeria.slice(0, 4).map((img, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: 'hidden', aspectRatio: '1/1', position: 'relative' }}>
                <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading={i === 0 ? 'eager' : 'lazy'} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPUESTA DE VALOR */}
      <section style={{ background: '#F7F3ED', padding: '24px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 0 }}>
          {[
            { icon: '🗓️', texto: 'Casi 10 años de experiencia' },
            { icon: '🥐', texto: 'Preparaciones frescas del día' },
            { icon: '📋', texto: 'Contrato claro, sin letra chica' },
            { icon: '🚚', texto: 'Puntualidad garantizada' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 12, borderRight: i < 3 ? '1px solid #e0dbd3' : 'none' }}>
              <span style={{ fontSize: 24 }}>{item.icon}</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#2f2419', fontFamily: 'system-ui, sans-serif' }}>{item.texto}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={{ padding: '80px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b26a3c', fontFamily: 'system-ui, sans-serif' }}>Lo que hacemos</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#2f2419', marginTop: 8 }}>Nuestros servicios</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {servicios.map((s, i) => (
              <div key={i} style={{ border: '1px solid #e8e2da', borderRadius: 16, padding: 32, transition: 'box-shadow 0.2s', background: '#fff' }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(47,36,25,0.12)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
                <span style={{ fontSize: 40, display: 'block', marginBottom: 16 }}>{s.emoji}</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: '#2f2419', marginBottom: 12 }}>{s.titulo}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: '#555', marginBottom: 24, fontFamily: 'system-ui, sans-serif' }}>{s.descripcion}</p>
                <Link href={s.href} style={{ color: '#bd0505', fontWeight: 700, textDecoration: 'none', fontSize: 14, fontFamily: 'system-ui, sans-serif' }}>
                  {s.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section style={{ padding: '80px 20px', background: '#F7F3ED' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b26a3c', fontFamily: 'system-ui, sans-serif' }}>100% fotos reales</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#2f2419', marginTop: 8 }}>Eventos que hemos realizado</h2>
            <p style={{ fontSize: 15, color: '#666', marginTop: 12, fontFamily: 'system-ui, sans-serif' }}>No usamos fotos de stock. Todo lo que ves corresponde a eventos reales.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {galeria.map((img, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
                <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section style={{ padding: '80px 20px', background: '#2f2419', color: '#F7F3ED' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b26a3c', fontFamily: 'system-ui, sans-serif' }}>Lo que dicen de nosotros</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginTop: 8 }}>⭐ 4.9/5 en Google y Facebook</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {testimonios.map((t, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 16, padding: 28, border: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ fontSize: 15, lineHeight: 1.7, fontStyle: 'italic', marginBottom: 20, opacity: 0.9, fontFamily: 'system-ui, sans-serif' }}>"{t.texto}"</p>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 14, fontFamily: 'system-ui, sans-serif' }}>{t.autor}</p>
                  <p style={{ fontSize: 13, opacity: 0.6, fontFamily: 'system-ui, sans-serif' }}>{t.zona}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      {latestPosts.length > 0 && (
        <section style={{ padding: '80px 20px', background: '#fff' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b26a3c', fontFamily: 'system-ui, sans-serif' }}>Tips y guías</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#2f2419', marginTop: 8 }}>Del blog de Café Panda</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
              {latestPosts.map((post: any) => (
                <Link key={post._id} href={`/blog/${post.slug.current}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <article style={{ border: '1px solid #e8e2da', borderRadius: 16, overflow: 'hidden', transition: 'box-shadow 0.2s', background: '#fff' }}
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(47,36,25,0.12)')}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
                    {post.mainImage?.asset?.url && (
                      <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                        <img src={post.mainImage.asset.url} alt={post.mainImage.alt || post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                      </div>
                    )}
                    <div style={{ padding: 24 }}>
                      {post.categoria?.titulo && (
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#b26a3c', fontFamily: 'system-ui, sans-serif' }}>{post.categoria.titulo}</span>
                      )}
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: '#2f2419', margin: '8px 0 12px', lineHeight: 1.3 }}>{post.title}</h3>
                      <p style={{ fontSize: 14, color: '#666', lineHeight: 1.6, fontFamily: 'system-ui, sans-serif' }}>{post.excerpt}</p>
                      <p style={{ marginTop: 16, fontSize: 13, color: '#bd0505', fontWeight: 700, fontFamily: 'system-ui, sans-serif' }}>Leer artículo →</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Link href="/blog" style={{ display: 'inline-block', border: '2px solid #2f2419', color: '#2f2419', padding: '12px 32px', borderRadius: 999, fontWeight: 700, textDecoration: 'none', fontSize: 15, fontFamily: 'system-ui, sans-serif' }}>
                Ver todos los artículos
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA FINAL */}
      <section style={{ padding: '80px 20px', background: '#bd0505', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: 16 }}>
            ¿Tienes un evento próximo?
          </h2>
          <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 36, lineHeight: 1.6, fontFamily: 'system-ui, sans-serif' }}>
            Cuéntanos qué necesitas y te enviamos una propuesta formal con menú detallado y valores claros. Respondemos el mismo día.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/56942020356?text=Hola,%20quiero%20cotizar%20un%20coffee%20break%20para%20mi%20empresa."
              target="_blank" rel="noopener"
              style={{ background: '#25d366', color: 'white', padding: '16px 32px', borderRadius: 999, fontSize: 17, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif' }}>
              💬 Cotizar por WhatsApp
            </a>
            <Link href="/contacto"
              style={{ background: 'rgba(255,255,255,0.15)', color: 'white', padding: '16px 32px', borderRadius: 999, fontSize: 17, fontWeight: 600, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', border: '1px solid rgba(255,255,255,0.3)' }}>
              Formulario de contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
