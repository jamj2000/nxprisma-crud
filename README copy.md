## Dar de alta la base de datos

Para hacer funcionar este proyecto necesitarás una base de datos. 

El proyecto está pensado para trabajar con Postgres, pero con unos pequeños ajustes puedes usar otro tipo de base de datos MySQL.

El script SQL para crear las tablas es `src/database/tablas.sql`

Después de ejecutar el script anterior, introduce datos de prueba:

```sh
npm  run  seed
```


## Configurar aplicación

> **IMPORTANTE**: Para que la aplicación funcione correctamente, deberás configuar también el archivo `.env` situado en la carpeta raíz del proyecto, es decir en la carpeta donde tenemos el `README.md`

Sigue los siguientes pasos, esta vez en la carpeta raíz del proyecto:

1. Crear archivo `.env`:

```sh
mv .env.example  .env
nano  .env
```

2. Editar la variable de entorno correspondiente a la URL de tu base de datos en Vercel o Supabase:

```
DATABASE_URL="mysql://..."
```

El formato de la URL es el siguiente `DATABASE_URL="mysql://usuario:password@host:3036/basedatos"`


## Paquetes usados para Prisma

- `prisma`
- `@prisma/client`
