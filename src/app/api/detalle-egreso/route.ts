// src/app/api/detalle-egresos/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      egresoId,
      divisionId,
      objetoGastoId,
      ivaId,
      descripcion,
      cantidad,
      precioUnitario
    } = body;

    const monto = cantidad * precioUnitario;

    const nuevoDetalle = await prisma.detalleEgreso.create({
      data: {
        egresoId,
        divisionId,
        objetoGastoId,
        ivaId,
        descripcion,
        cantidad,
        precioUnitario,
        monto
      }
    });

    return NextResponse.json(nuevoDetalle, { status: 201 });
  } catch (error) {
    console.error('Error al crear detalle de egreso:', error);
    return NextResponse.json(
      { error: 'Error al crear detalle de egreso' },
      { status: 500 }
    );
  }
}

