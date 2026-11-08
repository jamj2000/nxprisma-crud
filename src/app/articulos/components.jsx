'use client'
import Link from "next/link"
import Modal from "@/components/modal"
import { createArticulo, updateArticulo, deleteArticulo } from "@/app/articulos/actions"
import { useActionState, useEffect, useId } from "react"



export const Button = ({ children }) => (
    <button type="button" className="my-2 px-4 py-2 bg-slate-600 text-white rounded-md hover:opacity-50 cursor-pointer">
        {children}
    </button>
)




export const CardArticulo = ({ children, articulo }) => (
    <div className="border border-slate-200 bg-slate-100 w-80 p-8 rounded">

        <Link prefetch href={`/articulos/${articulo.id}`}>
            <strong>{articulo.nombre}</strong>
        </Link>

        <p>{articulo.descripcion}</p>
        <p>{articulo.precio} €</p>

        <div className="mt-4 flex gap-4 justify-end">
            {children}
        </div>
    </div>
)






export const ListArticulos = ({ articulos }) => (
    <div>
        <Modal trigger={<Button>NUEVO</Button>}>
            <FormArticulo action={createArticulo} title={"Crear artículo"} articulo={null} />
        </Modal>

        <div className="flex flex-wrap gap-4">
            {articulos.map((articulo) => (
                <CardArticulo key={articulo.id} articulo={articulo} >

                    <Modal trigger={<Button>EDITAR</Button>}>
                        <FormArticulo action={updateArticulo} title={"Actualizar artículo"} articulo={articulo} />
                    </Modal>

                    <Modal trigger={<Button>ELIMINAR</Button>}>
                        <FormArticulo action={deleteArticulo} title={"Eliminar artículo"} articulo={articulo} disabled />
                    </Modal>

                </CardArticulo>
            ))}
        </div>

    </div>
)





export const FormArticulo = ({ action, title, articulo, disabled = false }) => {

    const formId = useId()
    const [state, formAction, pending] = useActionState(action, {})

    useEffect(() => {
        if (state?.success) {
            // toast.success(state.success)
            document.getElementById(formId)?.closest('dialog')?.close()
        }
    }, [state, formId])

    return (
        <form action={formAction} id={formId} key={JSON.stringify(articulo)}>
            <input type='hidden' name='id' value={articulo?.id} />

            <fieldset disabled={disabled} className="flex flex-col py-4">

                <label className="mt-4 flex flex-col">Nombre
                    <input
                        id="nombre"
                        name='nombre'
                        placeholder='Nombre'
                        defaultValue={articulo?.nombre}
                    />
                </label>

                <label className="mt-4 flex flex-col">Descripción
                    <input
                        id="descripcion"
                        name='descripcion'
                        placeholder='Descripción'
                        defaultValue={articulo?.descripcion}
                    />
                </label>

                <label className="mt-4 flex flex-col">Precio
                    <input
                        type='number'
                        id="precio"
                        name='precio'
                        min='0'
                        placeholder='precio'
                        defaultValue={articulo?.precio}
                    />
                </label>
            </fieldset>

            <button type='submit' autoFocus>{pending ? "Espere..." : title}</button>
        </form >
    )
}

