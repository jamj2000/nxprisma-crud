import { Suspense } from 'react'
import { getArticulos } from '@/app/articulos/data'
import { ListArticulos } from './components'



export default function Page() {
    return (
        <section>
            <h1 className='text-xl'>Artículos</h1>
            <hr />

            <Suspense fallback="Recuperando datos...">
                <Content />
            </Suspense>
        </section>
    )
}


async function Content() {
    const articulos = await getArticulos()

    return <ListArticulos articulos={articulos} />

}
