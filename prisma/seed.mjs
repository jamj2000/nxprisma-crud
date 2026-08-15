import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

// DECLARACIÓN DE DATOS
const articulos = [
    {
        nombre: 'Monitor 17 pulgadas',
        descripcion: 'Monitor plano LCD',
        precio: 110,
    },
    {
        nombre: 'Teclado',
        descripcion: 'Teclado USB en español',
        precio: 20,
    },
    {
        nombre: 'Impresora',
        descripcion: 'Impresora láser a color',
        precio: 360,
    },
];


// INSERCIÓN DE DATOS
const load = async () => {
    try {
        await prisma.articulo.deleteMany({});
        console.log('Borrados los registros de la tabla articulos');

        // await prisma.$queryRaw`ALTER SEQUENCE articulos_id_seq RESTART WITH 1`;
        // console.log('reset articulo sequence to 1');

        await prisma.articulo.createMany({
            data: articulos,
        });
        console.log('Añadidos datos a tabla articulos');

    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};

load();