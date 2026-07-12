import Image from 'next/image'
import Link from 'next/link'
import { getAllProducts } from '@/lib/sanity.client'
import { urlFor } from '@/lib/image'

interface Product {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: string
  price: number
  image: any
  category: {
    title: string
    slug: {
      current: string
    }
  }
  isAvailable: boolean
}

export default async function ProductGrid() {
  let products: Product[] = []

  try {
    products = await getAllProducts()
  } catch (error) {
    console.error('Error fetching products:', error)
  }

  if (!products.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No hay productos disponibles en este momento.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          key={product._id}
          href={`/productos/${product.slug.current}`}
          className="group overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            {product.image && (
              <Image
                src={urlFor(product.image).width(400).height(400).url()}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            )}
            {!product.isAvailable && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-semibold">No disponible</span>
              </div>
            )}
          </div>

          <div className="p-4">
            <div className="mb-2">
              <span className="text-xs font-medium text-gray-500 uppercase">
                {product.category?.title || 'Producto'}
              </span>
            </div>
            <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
              {product.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2 mb-3">
              {product.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-amber-700">
                CLP ${product.price.toLocaleString('es-CL')}
              </span>
              <span className="text-amber-600 font-medium text-sm">Ver →</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
