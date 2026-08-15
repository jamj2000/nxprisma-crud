## Inicio


Una vez clonado el repositorio, procede a instalar las dependencias.

```sh
npm  install 
```


## Configurar aplicación

Para hacer funcionar este proyecto necesitarás una base de datos. 

El proyecto está pensado para trabajar con Postgres, pero con unos pequeños ajustes puedes usar otro tipo de base de datos MySQL.

> **IMPORTANTE**: Para que la aplicación funcione correctamente, deberás configurar el archivo `.env` situado en la carpeta raíz del proyecto, es decir en la carpeta donde tenemos el `README.md`

Sigue los siguientes pasos, esta vez en la carpeta raíz del proyecto:

1. Crear archivo `.env`:

```sh
mv .env.example  .env
nano  .env
```

2. Editar la variable de entorno correspondiente a la URL de tu base de datos en Vercel, Supabase o Neon:

```
DATABASE_URL="postgresql://..."
```

El formato de la URL es el siguiente `DATABASE_URL="postgresql://usuario:password@host:5432/basedatos"`


3. Configurar la conexión a la base de datos

Ejecutar los siguientes comandos:


```sh
npx  prisma  generate    # Genera el cliente de conexión a la base de datos
npx  prisma  db  push    # Crea las tablas indicadas en prisma/schema.prisma
```

Después ejecutar el script de *seed* para introducir datos de prueba:

```sh
npm  run  seed
```

## Paquetes usados para Prisma

- `prisma`
- `@prisma/client`
- `@prisma/adapter-pg`
