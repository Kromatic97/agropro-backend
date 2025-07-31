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



export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre } = body

    const nuevoTipo = await prisma.tipoEgreso.create({
      data: {
        nombre,
      },
    })

    return NextResponse.json(nuevoTipo, { status: 201 })
  } catch (error) {
    console.error('Error al crear tipo de egreso:', error)
    return NextResponse.json(
      { error: 'Error al crear tipo de egreso' },
      { status: 500 }
    )
  }
}
