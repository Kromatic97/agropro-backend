import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// POST /api/participantes – Crear un participante
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { codigo, nombre } = body;

    if (!codigo || !nombre) {
      return NextResponse.json({ error: 'Código y nombre son requeridos' }, { status: 400 });
    }

    const participante = await prisma.participanteLanzamiento.create({
      data: { codigo, nombre },
    });

    return NextResponse.json(participante, { status: 201 });
  } catch (error) {
    console.error('Error al crear participante:', error);
    return NextResponse.json({ error: 'Error al crear participante' }, { status: 500 });
  }
}

// GET /api/participantes – Listar todos los participantes
export async function GET() {
  try {
    const participantes = await prisma.participanteLanzamiento.findMany({
      orderBy: { codigo: 'asc' },
    });

    return NextResponse.json(participantes);
  } catch (error) {
    console.error('Error al obtener participantes:', error);
    return NextResponse.json({ error: 'Error al obtener participantes' }, { status: 500 });
  }
}
