export const dynamic = "force-dynamic"
import type { Metadata } from 'next'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { allPostsQuery } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Blog | Tips de Coffee Break, Banquetería y Café Artesanal',
  description: 'Guías, tips y casos de éxito sobre coffee breaks corporativos, banquetería para empresas, tortas personalizadas y café artesanal. Por Café Panda, Valle Grande.',
  alternates: { canonical: 'https://www.cafepanda.cl/blog' },
}

export default async function Blog() {
  let posts: any[] = []
  try {
    posts = await client.fetch(allPostsQuery)
  } catch (e) {
    posts = []
  }

  return (
    <>
      <section style={{ background: '#F7F3ED', padding: '64px 20px 48px', borderBottom: '1px solid #e0dbd3' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b26a3c', fontFamily: 'system-ui, sans-serif' }}>Tips, guías y casos</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#2f2419', margin: '12px 0 16px' }}>Blog de Café Panda</h1>
          <p style={{ fontSize: 16, color: '#666', fontFamily: 'system-ui, sans-serif' }}>Todo lo que necesitas saber sobre coffee breaks corporativos, banquetería y café artesanal en Santiago.</p>
        </div>
      </section>

      <section style={{ padding: '64px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px' }}>
              <p style={{ fontSize: 18, color: '#999', fontFamily: 'system-ui, sans-serif' }}>Próximamente — los primeros artículos están en camino. 🐼</p>
              <p style={{ fontSize: 14, color: '#bbb', marginTop: 12, fontFamily: 'system-ui, sans-serif' }}>Mientras tanto, cotiza tu próximo evento por WhatsApp.</p>
              <a href="https://wa.me/56942020356" target="_blank" rel="noopener"
                style={{ display: 'inline-block', marginTop: 24, background: '#25d366', color: 'white', padding: '12px 24px', borderRadius: 999, fontWeight: 700, textDecoration: 'none', fontFamily: 'system-ui, sans-serif' }}>
                💬 Cotizar ahora
              </a>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 32 }}>
              {posts.map((post: any) => (
                <Link key={post._id} href={`/blog/${post.slug.current}`} style={{ textDecoration: 'none' }}>
                  <article style={{ border: '1px solid #e8e2da', borderRadius: 16, overflow: 'hidden', transition: 'box-shadow 0.2s', background: '#fff', height: '100%' }}
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(47,36,25,0.12)')}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
                    {post.mainImage?.asset?.url && (
                      <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                        <img src={post.mainImage.asset.url} alt={post.mainImage.alt || post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                      </div>
                    )}
                    <div style={{ padding: 28 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                        {post.categoria?.titulo && (
                          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#b26a3c', fontFamily: 'system-ui, sans-serif' }}>{post.categoria.titulo}</span>
                        )}
                        <span style={{ fontSize: 12, color: '#aaa', fontFamily: 'system-ui, sans-serif' }}>
                          {new Date(post.publishedAt).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                      </div>
                      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: '#2f2419', marginBottom: 12, lineHeight: 1.3 }}>{post.title}</h2>
                      <p style={{ fontSize: 14, color: '#666', lineHeight: 1.6, fontFamily: 'system-ui, sans-serif' }}>{post.excerpt}</p>
                      <p style={{ marginTop: 20, fontSize: 13, color: '#bd0505', fontWeight: 700, fontFamily: 'system-ui, sans-serif' }}>Leer artículo →</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
