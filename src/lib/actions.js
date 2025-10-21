'use server'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache';


export async function createArticulo(prevState, formData) {
  try {
    const nombre = formData.get('nombre')
    const descripcion = formData.get('descripcion')
    const precio = Number(formData.get('precio')) * 100  //convertimos € a centimos

    const articulo = await prisma.articulo.create({
      data: { nombre, descripcion, precio },
    })

    console.log(articulo);
    revalidatePath('/articulos')
    return { success: "Operación realizada con éxito" }
  } catch (error) {
    console.log(error);
    return { error: "Fallo al realizar la operación" }
  }

}


export async function updateArticulo(prevState, formData) {
  const id = Number(formData.get('id'))
  const nombre = formData.get('nombre')
  const descripcion = formData.get('descripcion')
  const precio = Number(formData.get('precio')) * 100  //convertimos € a centimos

  try {
    const articulo = await prisma.articulo.update({
      where: { id },
      data: { nombre, descripcion, precio },
    })
    console.log(articulo);
    revalidatePath('/articulos')
    return { success: "Operación realizada con éxito" }
  } catch (error) {
    console.log(error);
    return { error: "Fallo al realizar la operación" }
  }

}

export async function deleteArticulo(prevState, formData) {
  try {
    const id = Number(formData.get('id'))

    const articulo = await prisma.articulo.delete({
      where: {
        id: id,
      },
    })
    console.log(articulo);
    revalidatePath('/articulos')
    return { success: "Operación realizada con éxito" }
  } catch (error) {
    console.log(error);
    return { error: "Fallo al realizar la operación" }
  }

}