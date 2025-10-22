'use server'
import prisma from '@/lib/prisma'



export async function getArticulos() {
    try {
        const articulos = await prisma.articulo.findMany()
        return articulos;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}




export async function getArticulo(id) {
    try {
        const articulo = await prisma.articulo.findMany({
            where: { id: Number(id) }
        })
        return articulo;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}