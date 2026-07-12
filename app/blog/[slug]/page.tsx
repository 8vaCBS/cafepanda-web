import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import { postBySlugQuery } from '@/sanity/lib/queries'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const post = await client.fetch(postBySlugQuery, { slug: params.slug })
    if (!post) return { title: 'Artículo no encontrado' }
    return {
      title: post.title,
      description: post.seo?.metaDescription || post.excerpt,
      alternates: { canonical: `https://www.cafepanda.cl/blog/${params.slug}` },
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: post.mainImage?.asset?.url ? [{ url: post.mainImage.asset.url }] : [],
      },
    }
  } catch {
    return { title: 'Blog | Café Panda' }
  }
}

const ptComponents = {
  block: {
    normal: ({ children }: any) => <p style={{ marginBottom: 20, lineHeight: 1.8, fontSize: 17, color: '#2A2A2A' }}>{children}</p>,
    h2: ({ children }: any) => <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: '#2f2419', margin: '40px 0 16px' }}>{children}</h2>,
    h3: ({ children }: any) => <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', color: '#2f2419', margin: '32px 0 12px' }}>{children}</h3>,
    blockquote: ({ children }: any) => <blockquote style={{ borderLeft: '4px solid #2f2419', paddingLeft: 20, margin: '24px 0', fontStyle: 'italic', color: '#555' }}>{children}</blockquote>,
  },
  types: {
    image: ({ value }: any) => value?.asset?.url ? (
      <figure style={{ margin: '32px 0' }}>
        <img src={value.asset.url} alt={value.alt || ''} style={{ width: '100%', borderRadius: 12, display: 'block' }} loading="lazy" />
        {value.alt && <figcaption style={{ fontSize: 13, color: '#888', textAlign: 'center', marginTop: 8 }}>{value.alt}</figcaption>}
      </figure>
    ) : null,
  },
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  let post: any = null
  try {
    post = await client.fetch(postBySlugQuery, { slug: params.slug })
  } catch (e) {}

  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: 'Café Panda', url: 'https://www.cafepanda.cl' },
    publisher: { '@type': 'Organization', name: 'Café Panda' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.cafepanda.cl/blog/${params.slug}` },
    ...(post.mainImage?.asset?.url && { image: post.mainImage.asset.url }),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article style={{ background: '#F7F3ED', fontFamily: "'Source Serif 4', Georgia, serif" }}>
        <header style={{ maxWidth: 720, margin: '0 auto', padding: '48px 20px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
            {post.categoria?.titulo && (
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B6560', fontFamily: 'system-ui' }}>{post.categoria.titulo}</span>
            )}
            <span style={{ fontSize: 13, color: '#999', fontFamily: 'system-ui' }}>
              {new Date(post.publishedAt).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 900, color: '#111', lineHeight: 1.2, marginBottom: 20 }}>{post.title}</h1>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#333', borderLeft: '4px solid #111', paddingLeft: 16 }}>{post.excerpt}</p>
        </header>

        {post.mainImage?.asset?.url && (
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px' }}>
            <img src={post.mainImage.asset.url} alt={post.mainImage.alt || post.title}
              style={{ width: '100%', borderRadius: 16, display: 'block', maxHeight: 480, objectFit: 'cover' }} />
          </div>
        )}

        <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 20px 80px' }}>
          {post.body && <PortableText value={post.body} components={ptComponents} />}
          <div style={{ background: '#2f2419', color: '#F7F3ED', borderRadius: 16, padding: 32, textAlign: 'center', marginTop: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, marginBottom: 12 }}>¿Tienes un evento próximo?</h2>
            <p style={{ fontSize: 15, opacity: 0.85, marginBottom: 24, fontFamily: 'system-ui' }}>Cuéntanos qué necesitas y armamos una propuesta. Respondemos el mismo día.</p>
            <a href="https://wa.me/56942020356?text=Hola,%20le%C3%AD%20el%20blog%20y%20quiero%20cotizar." target="_blank" rel="noopener"
              style={{ display: 'inline-block', background: '#25d366', color: 'white', padding: '14px 28px', borderRadius: 999, fontWeight: 700, textDecoration: 'none', fontSize: 15, fontFamily: 'system-ui' }}>
              💬 Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </article>
    </>
  )
}
