'use server'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { updateTag } from 'next/cache';



export async function createArticulo(prevState, formData) {

  // Obtenemos datos
  const nombre = formData.get('nombre')
  const descripcion = formData.get('descripcion')
  const precio = Number(formData.get('precio'))


  // Realizamos operación en base de datos
  try {
    await prisma.articulo.create({
      data: { nombre, descripcion, precio },
    })
  } catch (error) {
    console.log(error);
    return { error: "Fallo al realizar la operación" }
  }


  // revalidatePath('/articulos')
  updateTag('articulos')
  return { success: "Operación realizada con éxito" }
}




export async function updateArticulo(prevState, formData) {

  // Obtenemos datos
  const id = Number(formData.get('id'))
  const nombre = formData.get('nombre')
  const descripcion = formData.get('descripcion')
  const precio = Number(formData.get('precio'))


  // Realizamos operación en base de datos
  try {
    await prisma.articulo.update({
      where: { id },
      data: { nombre, descripcion, precio },
    })
  } catch (error) {
    console.log(error);
    return { error: "Fallo al realizar la operación" }
  }


  // revalidatePath('/articulos')
  updateTag('articulos')
  return { success: "Operación realizada con éxito" }
}





export async function deleteArticulo(prevState, formData) {

  // Obtenemos datos
  const id = Number(formData.get('id'))

  // Realizamos operación en base de datos
  try {
    await prisma.articulo.delete({
      where: { id },
    })

  } catch (error) {
    console.log(error);
    return { error: "Fallo al realizar la operación" }
  }

  updateTag('articulos')
  redirect('/articulos')
}