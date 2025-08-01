import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { zafraId, participanteId, superficie, porcentaje } = body;

    if (!zafraId || !participanteId || superficie == null || porcentaje == null) {
      return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
    }

    // Verifica que no exista ya esa combinación
    const existe = await prisma.distribucionZafra.findUnique({
      where: {
        zafraId_participanteId: {
          zafraId,
          participanteId,
        },
      },
    });

    if (existe) {
      return NextResponse.json({ error: 'Ya existe una distribución para ese participante en la zafra' }, { status: 409 });
    }

    const nuevaDistribucion = await prisma.distribucionZafra.create({
      data: {
        zafraId,
        participanteId,
        superficie,
        porcentaje,
      },
    });

    return NextResponse.json(nuevaDistribucion, { status: 201 });

  } catch (error) {
    console.error('Error al crear distribución:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

// GET: listar distribuciones (opcionalmente filtradas por zafraId)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const zafraId = searchParams.get('zafraId');

    const where = zafraId ? { zafraId: parseInt(zafraId) } : {};

    const distribuciones = await prisma.distribucionZafra.findMany({
      where,
      include: {
        zafra: true,
        participante: true,
      },
      orderBy: { id: 'asc' },
    });

    return NextResponse.json(distribuciones);
  } catch (error) {
    console.error('Error al obtener distribuciones:', error);
    return NextResponse.json({ error: 'Error al obtener las distribuciones' }, { status: 500 });
  }
}