import type { Metadata } from 'next'
import FormContacto from '@/components/FormContacto'

export const metadata: Metadata = {
  title: 'Contacto | Cotiza tu Coffee Break o Banquetería',
  description: 'Contáctanos para cotizar coffee breaks corporativos, banquetería para empresas y tortas personalizadas en Santiago. Respondemos en pocas horas.',
  alternates: { canonical: 'https://www.cafepanda.cl/contacto' },
}

export default function Contacto() {
  return (
    <>
      <section style={{ background: '#F7F3ED', padding: '64px 20px 48px', borderBottom: '1px solid #e0dbd3' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b26a3c', fontFamily: 'system-ui, sans-serif' }}>Respondemos rápido</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#2f2419', margin: '12px 0 16px' }}>Cotiza tu evento</h1>
          <p style={{ fontSize: 16, color: '#666', fontFamily: 'system-ui, sans-serif' }}>
            Cuéntanos qué necesitas. Te enviamos una propuesta formal con menú detallado y valores claros en pocas horas.
          </p>
        </div>
      </section>

      <section style={{ padding: '64px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64 }}>
          {/* Formulario */}
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: '#2f2419', marginBottom: 28 }}>Formulario de contacto</h2>
            <FormContacto />
          </div>

          {/* Info directa */}
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: '#2f2419', marginBottom: 28 }}>O contáctanos directo</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <a href="https://wa.me/56942020356?text=Hola,%20quiero%20cotizar%20un%20coffee%20break." target="_blank" rel="noopener"
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 20, background: '#F7F3ED', borderRadius: 12, textDecoration: 'none' }}>
                <span style={{ fontSize: 32 }}>💬</span>
                <div>
                  <p style={{ fontWeight: 700, color: '#2f2419', fontSize: 15, fontFamily: 'system-ui, sans-serif' }}>WhatsApp</p>
                  <p style={{ color: '#25d366', fontSize: 14, fontFamily: 'system-ui, sans-serif' }}>+56 9 4202 0356</p>
                  <p style={{ color: '#888', fontSize: 12, fontFamily: 'system-ui, sans-serif' }}>Respuesta inmediata</p>
                </div>
              </a>

              <a href="mailto:contacto@cafepanda.cl"
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 20, background: '#F7F3ED', borderRadius: 12, textDecoration: 'none' }}>
                <span style={{ fontSize: 32 }}>✉️</span>
                <div>
                  <p style={{ fontWeight: 700, color: '#2f2419', fontSize: 15, fontFamily: 'system-ui, sans-serif' }}>Email</p>
                  <p style={{ color: '#bd0505', fontSize: 14, fontFamily: 'system-ui, sans-serif' }}>contacto@cafepanda.cl</p>
                  <p style={{ color: '#888', fontSize: 12, fontFamily: 'system-ui, sans-serif' }}>Respuesta en pocas horas</p>
                </div>
              </a>

              <div style={{ padding: 20, background: '#F7F3ED', borderRadius: 12 }}>
                <p style={{ fontWeight: 700, color: '#2f2419', fontSize: 15, marginBottom: 8, fontFamily: 'system-ui, sans-serif' }}>📍 Encuéntranos</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.6, fontFamily: 'system-ui, sans-serif' }}>Santa Teresita de los Andes 402<br />Valle Grande, Lampa<br />Región Metropolitana, Chile</p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Cafeteria+Cafe+Panda,+Santa+Teresita+de+los+Andes+402,+Lampa"
                  target="_blank" rel="noopener"
                  style={{ display: 'inline-block', marginTop: 12, color: '#bd0505', fontSize: 13, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif' }}>
                  Cómo llegar →
                </a>
              </div>

              <div style={{ padding: 20, background: '#F7F3ED', borderRadius: 12 }}>
                <p style={{ fontWeight: 700, color: '#2f2419', fontSize: 15, marginBottom: 8, fontFamily: 'system-ui, sans-serif' }}>🕐 Horarios</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.8, fontFamily: 'system-ui, sans-serif' }}>Lun – Vie: 8:00 – 20:00<br />Sábado: 9:00 – 18:00<br />Domingo: Cerrado</p>
              </div>
            </div>

            {/* Mapa */}
            <div style={{ marginTop: 24, borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.6532626094895!2d-70.74937582467915!3d-33.32787927343837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662bf63de4c5c57%3A0x48c7d44533ad854f!2sCafeteria%20Cafe%20Panda!5e0!3m2!1ses-419!2scl!4v1765322221009!5m2!1ses-419!2scl"
                width="100%" height="250" style={{ border: 0, display: 'block' }} loading="lazy" title="Mapa Café Panda Valle Grande Lampa"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
