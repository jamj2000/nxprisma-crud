import { getArticulo } from '@/app/articulos/data'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { Button, CardArticulo, FormArticulo } from '../components'
import { deleteArticulo, updateArticulo } from '../actions'
import Modal from '@/components/modal'



export default function Page({ params }) {
    return (
        <div>
            <h1 className='text-xl'>Información del artículo</h1>

            <Suspense fallback="Recuperando datos...">
                <Content params={params} />
            </Suspense>
        </div>
    )
}


async function Content({ params }) {
    const { id } = await params
    const articulo = await getArticulo(id)

    if (!articulo) notFound()

    return (
        <CardArticulo articulo={articulo} >

            <Modal trigger={<Button>EDITAR</Button>}>
                <FormArticulo action={updateArticulo} title={"Actualizar artículo"} articulo={articulo} />
            </Modal>

            <Modal trigger={<Button>ELIMINAR</Button>}>
                <FormArticulo action={deleteArticulo} title={"Eliminar artículo"} articulo={articulo} disabled />
            </Modal>

        </CardArticulo>
    )

}