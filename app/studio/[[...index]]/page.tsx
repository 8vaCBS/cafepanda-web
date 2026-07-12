import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const StudioComponent = dynamic(() => import('@/lib/studio'), {
  ssr: false,
  loading: () => <div className="p-8 text-center">Cargando Studio...</div>,
})

export default function StudioPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Cargando...</div>}>
      <StudioComponent />
    </Suspense>
  )
}
