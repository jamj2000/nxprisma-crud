import Articulo from '@/components/articulos/item'
import { getArticulo } from '@/lib/data'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'


async function InfoArticulo({ params }) {
    const { id } = await params
    const articulo = await getArticulo(id)

    if (!articulo) notFound()

    return (
        <div>
            <h1 className='text-xl'>Información del artículo</h1>
            <Suspense fallback="Recuperando datos...">
                <Articulo articulo={articulo} />
            </Suspense>
        </div>
    )
}

export default InfoArticulo