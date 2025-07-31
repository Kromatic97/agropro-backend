import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const tipos = await prisma.tipoEgreso.findMany({
      select: {
        id: true,
        nombre: true,
      },
      orderBy: {
        nombre: 'asc',
      },
    });

    return NextResponse.json(tipos);
  } catch (error) {
    console.error('Error al obtener tipos de egreso:', error);
    return NextResponse.json({ error: 'Error al obtener tipos de egreso' }, { status: 500 });
  }
}
