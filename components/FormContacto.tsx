'use client'
import { useState } from 'react'

const servicios = ['Coffee Break Ejecutivo', 'Coffee Break Corporativo', 'Banquetería Completa', 'Torta Personalizada', 'Desayuno Ejecutivo', 'Otro']

export default function FormContacto() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', empresa: '', servicio: '', fecha: '', personas: '', mensaje: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '99786be1-501b-44d1-a1ea-ef54c173706d',
          subject: `Nueva cotización: ${form.servicio || 'Sin especificar'} — ${form.empresa || form.nombre}`,
          from_name: form.nombre,
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ nombre: '', email: '', telefono: '', empresa: '', servicio: '', fecha: '', personas: '', mensaje: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 14px', border: '1px solid #d8d0c4', borderRadius: 8,
    fontSize: 15, fontFamily: 'system-ui, sans-serif', color: '#2A2A2A', background: '#fff',
    outline: 'none', transition: 'border-color 0.15s',
  }
  const labelStyle: React.CSSProperties = { display: 'block', fontSize: 13, fontWeight: 600, color: '#2f2419', marginBottom: 6, fontFamily: 'system-ui, sans-serif' }

  if (status === 'success') {
    return (
      <div style={{ background: '#F7F3ED', borderRadius: 16, padding: 40, textAlign: 'center' }}>
        <span style={{ fontSize: 48 }}>🐼</span>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: '#2f2419', margin: '16px 0 12px' }}>¡Mensaje recibido!</h3>
        <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7, fontFamily: 'system-ui, sans-serif' }}>Gracias por contactarnos. Te respondemos en pocas horas con una propuesta detallada.</p>
        <p style={{ fontSize: 14, color: '#888', marginTop: 12, fontFamily: 'system-ui, sans-serif' }}>O si necesitas respuesta inmediata:</p>
        <a href="https://wa.me/56942020356" target="_blank" rel="noopener"
          style={{ display: 'inline-block', marginTop: 16, background: '#25d366', color: 'white', padding: '12px 24px', borderRadius: 999, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif' }}>
          💬 WhatsApp directo
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <label style={labelStyle}>Nombre *</label>
          <input name="nombre" value={form.nombre} onChange={handleChange} required placeholder="Tu nombre" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Email *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="tu@email.com" style={inputStyle} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <label style={labelStyle}>Teléfono</label>
          <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="+56 9 XXXX XXXX" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Empresa / Institución</label>
          <input name="empresa" value={form.empresa} onChange={handleChange} placeholder="Nombre de tu empresa" style={inputStyle} />
        </div>
      </div>

      <div>
        <label style={labelStyle}>¿Qué servicio necesitas? *</label>
        <select name="servicio" value={form.servicio} onChange={handleChange} required style={inputStyle}>
          <option value="">Selecciona un servicio</option>
          {servicios.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <label style={labelStyle}>Fecha del evento</label>
          <input name="fecha" type="date" value={form.fecha} onChange={handleChange} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Número de personas</label>
          <input name="personas" value={form.personas} onChange={handleChange} placeholder="Ej: 25 personas" style={inputStyle} />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Cuéntanos más</label>
        <textarea name="mensaje" value={form.mensaje} onChange={handleChange} rows={4}
          placeholder="Describe tu evento: tipo de reunión, horario, necesidades especiales, etc."
          style={{ ...inputStyle, resize: 'vertical' }} />
      </div>

      {status === 'error' && (
        <p style={{ color: '#bd0505', fontSize: 13, fontFamily: 'system-ui, sans-serif' }}>
          Hubo un error al enviar. Por favor escríbenos directamente a contacto@cafepanda.cl o por WhatsApp.
        </p>
      )}

      <button type="submit" disabled={status === 'loading'}
        style={{ background: status === 'loading' ? '#ccc' : '#2f2419', color: 'white', padding: '14px 28px', borderRadius: 999, fontSize: 16, fontWeight: 700, border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer', fontFamily: 'system-ui, sans-serif', transition: 'background 0.2s' }}>
        {status === 'loading' ? 'Enviando...' : 'Enviar cotización →'}
      </button>

      <p style={{ fontSize: 12, color: '#aaa', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
        También puedes escribirnos directamente a{' '}
        <a href="mailto:contacto@cafepanda.cl" style={{ color: '#b26a3c' }}>contacto@cafepanda.cl</a>
      </p>
    </form>
  )
}
