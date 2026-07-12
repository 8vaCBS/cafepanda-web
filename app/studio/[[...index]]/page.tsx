'use client'

import { useEffect } from 'react'

export default function StudioPage() {
  useEffect(() => {
    // Redirige al dashboard de Sanity del proyecto
    window.location.href = 'https://www.sanity.io/organizations/o24B0GUU8/project/m8varzzi'
  }, [])

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
      <div className="text-center">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sanity Studio</h1>
          <p className="text-gray-600">Redirigiendo al panel de administración de Café Panda...</p>
        </div>
      </div>
    </div>
  )
}
