import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true, // Usa CDN para mejor performance en producción
})

export default client

// ============================================
// CONSULTAS GROQ PARA PRODUCTOS
// ============================================

/**
 * Obtener todos los productos
 */
export async function getAllProducts() {
  return await client.fetch(
    `*[_type == "product"] | order(published desc) {
      _id,
      title,
      slug,
      description,
      price,
      image,
      category->,
      isAvailable,
      published
    }`
  )
}

/**
 * Obtener un producto por slug
 */
export async function getProductBySlug(slug: string) {
  return await client.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      price,
      image,
      images,
      category->,
      servings,
      ingredients,
      isAvailable,
      published
    }`,
    { slug }
  )
}

/**
 * Obtener productos por categoría
 */
export async function getProductsByCategory(categorySlug: string) {
  return await client.fetch(
    `*[_type == "product" && category->slug.current == $categorySlug] | order(published desc) {
      _id,
      title,
      slug,
      description,
      price,
      image,
      category->,
      isAvailable
    }`,
    { categorySlug }
  )
}

// ============================================
// CONSULTAS GROQ PARA CATEGORÍAS
// ============================================

/**
 * Obtener todas las categorías
 */
export async function getAllCategories() {
  return await client.fetch(
    `*[_type == "category"] | order(order asc) {
      _id,
      title,
      slug,
      description,
      icon,
      order
    }`
  )
}

/**
 * Obtener una categoría por slug
 */
export async function getCategoryBySlug(slug: string) {
  return await client.fetch(
    `*[_type == "category" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      icon,
      order
    }`,
    { slug }
  )
}

// ============================================
// CONSULTAS GROQ PARA SERVICIOS CORPORATIVOS
// ============================================

/**
 * Obtener todos los servicios
 */
export async function getAllServices() {
  return await client.fetch(
    `*[_type == "service"] | order(published desc) {
      _id,
      title,
      slug,
      type,
      description,
      shortDescription,
      basePrice,
      priceDescription,
      image,
      includes,
      customizationOptions,
      targetAudience,
      isFeature,
      published
    }`
  )
}

/**
 * Obtener servicios destacados
 */
export async function getFeaturedServices() {
  return await client.fetch(
    `*[_type == "service" && isFeature == true] | order(published desc) {
      _id,
      title,
      slug,
      type,
      shortDescription,
      basePrice,
      image,
      customizationOptions
    }`
  )
}

/**
 * Obtener un servicio por slug
 */
export async function getServiceBySlug(slug: string) {
  return await client.fetch(
    `*[_type == "service" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      type,
      description,
      shortDescription,
      basePrice,
      priceDescription,
      minimumOrder,
      deliveryTime,
      image,
      gallery,
      includes,
      customizationOptions,
      targetAudience,
      published
    }`,
    { slug }
  )
}

/**
 * Obtener servicios por tipo
 */
export async function getServicesByType(serviceType: string) {
  return await client.fetch(
    `*[_type == "service" && type == $serviceType] | order(published desc) {
      _id,
      title,
      slug,
      type,
      shortDescription,
      basePrice,
      image,
      customizationOptions
    }`,
    { serviceType }
  )
}

/**
 * Obtener servicios por público objetivo
 */
export async function getServicesByAudience(audience: string) {
  return await client.fetch(
    `*[_type == "service" && $audience in targetAudience] | order(published desc) {
      _id,
      title,
      slug,
      type,
      shortDescription,
      basePrice,
      image
    }`,
    { audience }
  )
}

// ============================================
// EJEMPLO DE USO EN COMPONENTES
// ============================================

/**
 * Ejemplo en un componente de Server Component:
 * 
 * ```typescript
 * import { getAllServices } from '@/lib/sanity.client'
 * 
 * export default async function ServicesPage() {
 *   const services = await getAllServices()
 *   
 *   return (
 *     <div>
 *       {services.map((service) => (
 *         <div key={service._id}>
 *           <h2>{service.title}</h2>
 *           <p>{service.shortDescription}</p>
 *           <p>CLP ${service.basePrice.toLocaleString('es-CL')}</p>
 *         </div>
 *       ))}
 *     </div>
 *   )
 * }
 * ```
 */
