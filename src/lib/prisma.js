// src/lib/prisma.js

import { PrismaClient } from '@prisma/client'
const globalForPrisma = globalThis
const prisma = globalForPrisma.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
export default prisma


/*¿Qué hace este archivo?
Crea una instancia reutilizable de Prisma Client.
Evita múltiples conexiones en desarrollo (Hot Reload).
Nos permite importar prisma en cualquier endpoint o archivo.*/
