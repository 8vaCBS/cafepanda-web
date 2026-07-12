import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nosotros | Casi 10 años en Valle Grande, Lampa | Café Panda',
  description: 'Café Panda nació en Valle Grande, Lampa, con una propuesta simple: buenas porciones, productos naturales y cercanía de barrio. Casi 10 años siendo parte de la comunidad.',
  alternates: { canonical: 'https://www.cafepanda.cl/nosotros' },
}

export default function Nosotros() {
  return (
    <>
      <style>{`
        .nos-hero { background: #2a221b; color: #F5F0E8; padding: 88px 20px; }
        .nos-hero-inner { max-width: 760px; margin: 0 auto; text-align: center; }
        .eyebrow { font-size: 10px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: #b26a3c; font-family: system-ui, sans-serif; display: block; margin-bottom: 20px; }
        .nos-h1 { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(2rem, 5vw, 3rem); font-weight: 900; line-height: 1.15; margin-bottom: 24px; }
        .nos-lead { font-size: clamp(15px, 2vw, 17px); line-height: 1.85; color: rgba(245,240,232,0.75); font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; }
        .nos-section { padding: 72px 20px; }
        .nos-inner { max-width: 1100px; margin: 0 auto; }
        .nos-grid { display: grid; grid-template-columns: 1fr; gap: 48px; align-items: center; }
        @media (min-width: 768px) { .nos-grid { grid-template-columns: 1fr 1fr; } }
        .nos-img-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
        .nos-img-item { aspect-ratio: 1/1; overflow: hidden; background: #e8e0d5; }
        .nos-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .nos-h2 { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 900; color: #2a221b; margin-bottom: 20px; line-height: 1.2; }
        .nos-p { font-size: 15px; line-height: 1.9; color: #4a3f35; font-family: system-ui, sans-serif; margin-bottom: 16px; }
        .valores-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: #d8d0c4; margin-top: 48px; }
        @media (min-width: 640px) { .valores-grid { grid-template-columns: repeat(4, 1fr); } }
        .valor-card { background: #F5F0E8; padding: 36px 24px; text-align: center; }
        .valor-num { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; color: #b26a3c; font-family: system-ui, sans-serif; display: block; margin-bottom: 12px; }
        .valor-title { font-family: 'Playfair Display', Georgia, serif; font-size: 18px; font-weight: 700; color: #2a221b; margin-bottom: 10px; }
        .valor-desc { font-size: 13px; line-height: 1.75; color: #6b5e53; font-family: system-ui, sans-serif; }
        .nos-cta { padding: 72px 20px; background: #2a221b; color: #F5F0E8; text-align: center; }
        .nos-cta-inner { max-width: 560px; margin: 0 auto; }
        .nos-cta-h2 { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 900; margin-bottom: 16px; line-height: 1.2; }
        .nos-cta-p { font-size: 15px; color: rgba(245,240,232,0.75); line-height: 1.8; margin-bottom: 32px; font-family: system-ui, sans-serif; }
        .nos-btns { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
        .btn-cream { background: #F5F0E8; color: #2a221b; padding: 14px 28px; font-size: 11px; font-weight: 700; text-decoration: none; font-family: system-ui, sans-serif; letter-spacing: 0.12em; text-transform: uppercase; display: inline-block; }
        .btn-outline-cream { background: transparent; color: #F5F0E8; padding: 14px 28px; font-size: 11px; font-weight: 700; text-decoration: none; font-family: system-ui, sans-serif; letter-spacing: 0.12em; text-transform: uppercase; display: inline-block; border: 1px solid rgba(245,240,232,0.4); }
      `}</style>

      {/* HERO */}
      <section className="nos-hero">
        <div className="nos-hero-inner">
          <span className="eyebrow">Nuestra historia</span>
          <h1 className="nos-h1">Casi 10 años siendo parte de Valle Grande</h1>
          <p className="nos-lead">Café Panda nació como la primera cafetería artesanal de Valle Grande, Lampa, con una propuesta clara: buenas porciones, productos naturales, pastelería artesanal y la cercanía de barrio que nadie más ofrecía.</p>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="nos-section" style={{ background: '#F5F0E8' }}>
        <div className="nos-inner">
          <div className="nos-grid">
            <div>
              <span className="eyebrow">Quiénes somos</span>
              <h2 className="nos-h2">Tradición, abundancia y honestidad</h2>
              <p className="nos-p">Hemos visto crecer a los niños del barrio. Hemos acompañado cumpleaños, reuniones de amigos, primeras citas y celebraciones de empresa. Café Panda no solo vende café: ha acompañado una década de historias de Valle Grande.</p>
              <p className="nos-p">Hoy, con esa experiencia y confianza instalada, somos también el proveedor de coffee breaks y banquetería para empresas, colegios e instituciones en toda la zona norte de Santiago.</p>
            </div>
            <div className="nos-img-grid">
              {[
                { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/PHOTO-2026-04-08-13-02-10.jpg?v=1780872511', alt: 'Coffee break corporativo Café Panda' },
                { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/316035E1-6369-444B-8996-211C382A91B9.jpg?v=1780872511', alt: 'Banquetería Café Panda' },
                { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/tortas_pedido_2.jpg', alt: 'Tortas artesanales Café Panda' },
                { src: 'https://cdn.shopify.com/s/files/1/0773/9683/6592/files/empanadas_3.jpg', alt: 'Pastelería artesanal Café Panda' },
              ].map((img, i) => (
                <div key={i} className="nos-img-item">
                  <img className="nos-img" src={img.src} alt={img.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="nos-section" style={{ background: '#fff' }}>
        <div className="nos-inner">
          <span className="eyebrow">Lo que nos define</span>
          <h2 className="nos-h2">Nuestros valores</h2>
          <div className="valores-grid">
            {[
              { n: '01', titulo: 'Artesanal', desc: 'Cada preparación hecha con recetas propias, ingredientes frescos del día. Nunca congelados, nunca industriales.' },
              { n: '02', titulo: 'Honesto', desc: 'Contrato claro, valores claros, sin letra chica. Lo que acordamos es lo que recibís.' },
              { n: '03', titulo: 'Comunitario', desc: 'Somos parte de Valle Grande. Conocemos el barrio, sus familias y sus historias.' },
              { n: '04', titulo: 'Puntual', desc: 'Llegamos a tiempo porque sabemos que tu evento depende de nosotros.' },
            ].map((v, i) => (
              <div key={i} className="valor-card">
                <span className="valor-num">{v.n}</span>
                <h3 className="valor-title">{v.titulo}</h3>
                <p className="valor-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nos-cta">
        <div className="nos-cta-inner">
          <span className="eyebrow" style={{ color: '#b26a3c' }}>Visítanos</span>
          <h2 className="nos-cta-h2">Ven a conocernos</h2>
          <p className="nos-cta-p">Santa Teresita de los Andes 402, Valle Grande, Lampa. Frente al parque, con aire limpio y espacio para desconectarte o trabajar tranquilo.</p>
          <div className="nos-btns">
            <a href="https://wa.me/56942020356" target="_blank" rel="noopener" className="btn-cream">WhatsApp</a>
            <Link href="/contacto" className="btn-outline-cream">Formulario de contacto</Link>
          </div>
        </div>
      </section>
    </>
  )
}
