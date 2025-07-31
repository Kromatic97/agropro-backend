import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const entidades = await prisma.entidad.findMany({
      select: {
        id: true,
        nombre: true,
      },
    });

    return NextResponse.json(entidades);
  } catch (error) {
    console.error('Error al obtener entidades:', error);
    return NextResponse.json({ error: 'Error al obtener entidades' }, { status: 500 });
  }
}

