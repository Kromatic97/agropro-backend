// prisma/seed.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.entidad.create({
    data: { nombre: 'PARAPORT' }
  });

  await prisma.entidad.create({
    data: { nombre: 'PETER' }
  });

  await prisma.entidad.create({
    data: { nombre: 'THOMAS' }
  });

  console.log('✅ Datos cargados correctamente');
}

main()
  .catch((e) => {
    console.error('❌ Error al cargar datos:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
