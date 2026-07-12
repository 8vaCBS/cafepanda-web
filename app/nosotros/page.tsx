import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nosotros | Casi 10 años en Valle Grande, Lampa',
  description: 'Café Panda nació en Valle Grande, Lampa, con una propuesta simple: buenas porciones, productos naturales y cercanía de barrio. Casi 10 años siendo parte de la comunidad.',
  alternates: { canonical: 'https://www.cafepanda.cl/nosotros' },
}

export default function Nosotros() {
  return (
    <>
      <section style={{ background: '#2f2419', color: '#F7F3ED', padding: '80px 20px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b26a3c', fontFamily: 'system-ui, sans-serif' }}>Nuestra historia</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3rem)', margin: '12px 0 24px' }}>
            Casi 10 años siendo parte de Valle Grande
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.8, opacity: 0.85, fontFamily: 'system-ui, sans-serif' }}>
            Café Panda nació como la primera cafetería artesanal de Valle Grande, Lampa, con una propuesta clara: buenas porciones, productos naturales, pastelería artesanal y la cercanía de barrio que nadie más ofrecía.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 20px', background: '#F7F3ED' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#2f2419', marginBottom: 20 }}>Tradición + Abundancia + Honestidad</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#555', marginBottom: 16, fontFamily: 'system-ui, sans-serif' }}>
              Hemos visto crecer a los niños del barrio. Hemos acompañado cumpleaños, reuniones de amigos, primeras citas y celebraciones de empresa. Café Panda no solo vende café: ha acompañado una década de historias de Valle Grande.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#555', fontFamily: 'system-ui, sans-serif' }}>
              Hoy, con esa experiencia y confianza instalada, somos también el proveedor de coffee breaks y banquetería para empresas, colegios e instituciones en toda la zona norte de Santiago.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/PHOTO-2026-04-08-13-02-10.jpg?v=1780872511', alt: 'Coffee break corporativo Café Panda' },
              { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/cockteleria_7_7183fb6c-eeb4-4a7d-9f61-6103f0f837d0.jpg', alt: 'Banquetería Café Panda' },
              { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/tortas_pedido_2.jpg', alt: 'Tortas artesanales Café Panda' },
              { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/empanadas_3.jpg', alt: 'Pastelería artesanal Café Panda' },
            ].map((img, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: 'hidden', aspectRatio: '1/1' }}>
                <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section style={{ padding: '80px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#2f2419', textAlign: 'center', marginBottom: 48 }}>Lo que nos define</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[
              { emoji: '🥐', titulo: 'Artesanal', texto: 'Cada preparación es hecha con recetas propias, ingredientes frescos del día. Nunca congelados, nunca industriales.' },
              { emoji: '🤝', titulo: 'Honesto', texto: 'Contrato claro, valores claros, sin letra chica. Lo que acordamos es lo que recibís.' },
              { emoji: '🏘️', titulo: 'Comunitario', texto: 'Somos parte de Valle Grande. Conocemos el barrio, sus familias y sus historias.' },
              { emoji: '🚀', titulo: 'Puntual', texto: 'Llegamos a tiempo porque sabemos que tu evento depende de nosotros.' },
            ].map((v, i) => (
              <div key={i} style={{ textAlign: 'center', padding: 28, border: '1px solid #e8e2da', borderRadius: 16 }}>
                <span style={{ fontSize: 40, display: 'block', marginBottom: 16 }}>{v.emoji}</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: '#2f2419', marginBottom: 12 }}>{v.titulo}</h3>
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7, fontFamily: 'system-ui, sans-serif' }}>{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 20px', background: '#bd0505', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: 16 }}>Ven a conocernos</h2>
          <p style={{ fontSize: 16, opacity: 0.9, marginBottom: 32, fontFamily: 'system-ui, sans-serif' }}>
            Santa Teresita de los Andes 402, Valle Grande, Lampa. Frente al parque, con aire limpio y espacio para desconectarte.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/56942020356" target="_blank" rel="noopener"
              style={{ background: '#25d366', color: 'white', padding: '14px 28px', borderRadius: 999, fontSize: 15, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif' }}>
              💬 WhatsApp
            </a>
            <Link href="/contacto"
              style={{ background: 'rgba(255,255,255,0.15)', color: 'white', padding: '14px 28px', borderRadius: 999, fontSize: 15, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)', fontFamily: 'system-ui, sans-serif' }}>
              Formulario de contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
