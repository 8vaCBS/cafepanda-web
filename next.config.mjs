/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.shopify.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  async redirects() {
    return [
      // Redirects 301 desde URLs de Shopify → Next.js (preserva SEO)
      { source: '/pages/banqueteria-para-empresas-y-colegios', destination: '/servicios', permanent: true },
      { source: '/pages/banqueteria', destination: '/servicios', permanent: true },
      { source: '/pages/coffee-break', destination: '/servicios#coffee-break', permanent: true },
      { source: '/collections/all', destination: '/servicios', permanent: true },
      { source: '/collections/tortas', destination: '/servicios#tortas', permanent: true },
      { source: '/products/:slug', destination: '/servicios', permanent: true },
      { source: '/blogs/news/:slug', destination: '/blog/:slug', permanent: true },
      { source: '/blogs/:path*', destination: '/blog', permanent: true },
      { source: '/pages/contacto', destination: '/contacto', permanent: true },
      { source: '/pages/nosotros', destination: '/nosotros', permanent: true },
    ]
  },
}

export default nextConfig
