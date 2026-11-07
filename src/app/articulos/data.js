'use server'
import prisma from '@/lib/prisma'
import { cacheTag } from 'next/cache';


export async function getArticulos() {
    'use cache'
    cacheTag('articulos')

    try {
        const articulos = await prisma.articulo.findMany()
        return articulos;
    } catch (error) {
        console.log(error);
        return null;
    }
}




export async function getArticulo(id) {
    'use cache'
    cacheTag('articulos', `articulos:${id}`)

    try {
        const articulo = await prisma.articulo.findUnique({
            where: { id: Number(id) }
        })
        return articulo;
    } catch (error) {
        console.log(error);
        return null;
    }
}