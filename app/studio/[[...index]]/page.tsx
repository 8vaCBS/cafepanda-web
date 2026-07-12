'use client'

export default function StudioPage() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
      <div className="text-center">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sanity Studio</h1>
          <p className="text-gray-600 mb-8">Panel de administración de contenido</p>
        </div>

        <a
          href="https://m8varzzi.sanity.studio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Abrir Sanity Studio
        </a>

        <p className="mt-6 text-sm text-gray-500">
          Se abrirá en una nueva pestaña
        </p>
      </div>
    </div>
  )
}
