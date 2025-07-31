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


export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre } = body

    const nuevaEntidad = await prisma.entidad.create({
      data: { nombre }
    })

    return NextResponse.json(nuevaEntidad, { status: 201 })
  } catch (error) {
    console.error('Error al crear entidad:', error)
    return NextResponse.json(
      { error: 'Error al crear entidad' },
      { status: 500 }
    )
  }
}
