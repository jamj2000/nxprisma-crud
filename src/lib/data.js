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