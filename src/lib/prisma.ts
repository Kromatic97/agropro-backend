// src/lib/prisma.js

import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;



/*¿Qué hace este archivo?
Crea una instancia reutilizable de Prisma Client.
Evita múltiples conexiones en desarrollo (Hot Reload).
Nos permite importar prisma en cualquier endpoint o archivo.*/
