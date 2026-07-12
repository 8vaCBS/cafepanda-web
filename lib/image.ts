import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import client from './sanity.client'

/**
 * Builder de URLs de imagen de Sanity
 * Úsalo para generar URLs optimizadas de imágenes almacenadas en Sanity
 */
const builder = imageUrlBuilder(client)

/**
 * Genera una URL optimizada de una imagen de Sanity
 * 
 * @param source - La imagen de Sanity (usualmente `image` field del documento)
 * @returns - Un objeto builder que puedes encadenar con métodos como .width(), .height(), .url()
 * 
 * Ejemplos de uso:
 * 
 * ```typescript
 * // URL simple
 * urlFor(product.image).url()
 * 
 * // Con ancho y alto específicos
 * urlFor(product.image).width(400).height(400).url()
 * 
 * // Con calidad y formato
 * urlFor(product.image).width(800).quality(80).url()
 * 
 * // En un componente de Next.js Image
 * <Image
 *   src={urlFor(product.image).width(400).height(400).url()}
 *   alt={product.title}
 *   width={400}
 *   height={400}
 * />
 * ```
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

/**
 * Obtiene las dimensiones de una imagen de Sanity
 * 
 * @param image - El objeto de imagen de Sanity
 * @returns - Un objeto con width y height
 */
export function getImageDimensions(
  image: SanityImageSource & { asset?: { metadata?: { dimensions?: any } } }
): { width: number; height: number } | null {
  const dimensions = image?.asset?.metadata?.dimensions

  if (!dimensions) {
    return null
  }

  return {
    width: dimensions.width,
    height: dimensions.height,
  }
}

/**
 * Obtiene la URL y dimensiones de una imagen optimizada
 * 
 * @param image - El objeto de imagen de Sanity
 * @param width - Ancho deseado
 * @returns - URL y dimensiones
 */
export function getOptimizedImage(
  image: SanityImageSource & { asset?: { metadata?: { dimensions?: any } } },
  width: number = 800
) {
  const dimensions = getImageDimensions(image)

  if (!dimensions) {
    return {
      url: urlFor(image).width(width).url(),
      width,
      height: width,
    }
  }

  // Mantiene el aspect ratio
  const aspectRatio = dimensions.width / dimensions.height
  const height = Math.round(width / aspectRatio)

  return {
    url: urlFor(image).width(width).height(height).url(),
    width,
    height,
  }
}
