import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { tipo, referenciaId, detalleEgresoId } = body;

    const nuevoObjetoGasto = await prisma.objetoGasto.create({
      data: {
        tipo,
        referenciaId,
        detalleEgresoId,
      },
    });

    return NextResponse.json(nuevoObjetoGasto, { status: 201 });
  } catch (error) {
    console.error('Error al crear objeto de gasto:', error);
    return NextResponse.json(
      { error: 'Error al crear objeto de gasto' },
      { status: 500 }
    );
  }
}
