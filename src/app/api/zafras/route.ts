import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre } = body;

    if (!nombre) {
      return NextResponse.json({ error: 'El nombre de la zafra es requerido' }, { status: 400 });
    }

    const nuevaZafra = await prisma.zafra.create({
      data: { nombre },
    });

    return NextResponse.json(nuevaZafra, { status: 201 });
  } catch (error) {
    console.error('Error al crear zafra:', error);
    return NextResponse.json({ error: 'Error al crear la zafra' }, { status: 500 });
  }
}

// GET: Listar todas las zafras
export async function GET() {
  try {
    const zafras = await prisma.zafra.findMany({
      orderBy: { id: 'asc' },
    });

    return NextResponse.json(zafras);
  } catch (error) {
    console.error('Error al obtener zafras:', error);
    return NextResponse.json({ error: 'Error al obtener las zafras' }, { status: 500 });
  }
}