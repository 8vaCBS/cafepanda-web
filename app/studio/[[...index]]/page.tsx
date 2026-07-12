'use client'

import { useEffect, useState } from 'react'

export default function StudioPage() {
  const [studio, setStudio] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const { NextStudio } = await import('next-sanity/studio')
        const config = (await import('@/sanity.config')).default

        setStudio({
          Component: NextStudio,
          config: config,
        })
      } catch (error) {
        console.error('Error loading studio:', error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <div className="text-center">
          <div className="text-lg font-semibold">Cargando Sanity Studio...</div>
        </div>
      </div>
    )
  }

  if (!studio) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <div className="text-center text-red-600">
          <div className="text-lg font-semibold">Error cargando Studio</div>
          <div className="text-sm">Verifica tu configuración de Sanity</div>
        </div>
      </div>
    )
  }

  return <studio.Component config={studio.config} />
}
