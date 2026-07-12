# 🐼 Café Panda — Sitio Web

Next.js 14 + Sanity CMS + Vercel

## Stack
- **Frontend:** Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **CMS:** Sanity (Project ID: `m8varzzi`)
- **Hosting:** Vercel
- **Formularios:** Web3Forms
- **Dominio:** cafepanda.cl

---

## Setup inicial (1 vez)

### 1. Clonar y instalar
```bash
git clone https://github.com/8vaCBS/cafepanda-web.git
cd cafepanda-web
npm install
```

### 2. Variables de entorno
```bash
cp .env.local.example .env.local
```
Edita `.env.local` con tu token de Sanity:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=m8varzzi
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=TU_TOKEN_AQUI
NEXT_PUBLIC_WEB3FORMS_KEY=99786be1-501b-44d1-a1ea-ef54c173706d
```

### 3. Correr en desarrollo
```bash
npm run dev
```
- Sitio: http://localhost:3000
- Sanity Studio: http://localhost:3000/studio

---

## Sanity Studio (tu CMS)

Accede a **cafepanda.cl/studio** para:
- ✅ Escribir y publicar artículos de blog
- ✅ Subir imágenes
- ✅ Gestionar categorías
- ✅ Editar meta descriptions (SEO)

### Crear primer artículo:
1. Ve a cafepanda.cl/studio
2. Click "Artículo de Blog" → "New"
3. Rellena: Título, Slug, Resumen, Imagen, Categoría, Contenido
4. Click "Publish"
5. Aparece automático en cafepanda.cl/blog

---

## Deploy en Vercel

### Variables de entorno en Vercel:
En vercel.com → tu proyecto → Settings → Environment Variables:
```
NEXT_PUBLIC_SANITY_PROJECT_ID = m8varzzi
NEXT_PUBLIC_SANITY_DATASET = production
NEXT_PUBLIC_SANITY_API_VERSION = 2024-01-01
SANITY_API_TOKEN = [tu token]
NEXT_PUBLIC_WEB3FORMS_KEY = 99786be1-501b-44d1-a1ea-ef54c173706d
```

### Dominio cafepanda.cl:
1. En Vercel → tu proyecto → Settings → Domains
2. Agrega `cafepanda.cl` y `www.cafepanda.cl`
3. Vercel te da los DNS records
4. Ve a tu registrador de dominio y actualiza los DNS

---

## Estructura de páginas

| Página | URL | Descripción |
|--------|-----|-------------|
| Inicio | `/` | Hero + servicios + galería + testimonios + blog |
| Servicios | `/servicios` | Coffee break, tortas, banquetería |
| Blog | `/blog` | Listado de artículos |
| Blog post | `/blog/[slug]` | Artículo individual |
| Nosotros | `/nosotros` | Historia de la marca |
| Contacto | `/contacto` | Formulario + WhatsApp + mapa |
| Studio | `/studio` | Sanity CMS (admin) |

---

## SEO/GEO Setup

✅ JSON-LD Schema (FoodEstablishment + LocalBusiness + CafeOrCoffeeShop)
✅ Sitemap XML dinámico (`/sitemap.xml`)
✅ Robots.txt (`/robots.txt`)
✅ Open Graph + Twitter Cards
✅ Redirects 301 desde URLs de Shopify
✅ Meta tags por página
✅ Canonical URLs
✅ GPS coordinates en schema

---

## Contacto
- WhatsApp: +56942020356
- Email: contacto@cafepanda.cl
- Dirección: Santa Teresita de Los Andes 402, Valle Grande, Lampa
