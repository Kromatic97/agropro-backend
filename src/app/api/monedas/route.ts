// src/app/api/monedas/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
   const monedas = await prisma.moneda.findMany({
    select: {
    id: true,
    nombre: true,
    },
    });
    
    return NextResponse.json(monedas);
  } catch (error) {
    console.error('Error al obtener monedas:', error);
    return NextResponse.json({ error: 'Error al obtener monedas' }, { status: 500 });
  }
}


export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre } = body

    const nuevaMoneda = await prisma.moneda.create({
      data: { nombre }
    })

    return NextResponse.json(nuevaMoneda, { status: 201 })
  } catch (error) {
    console.error('Error al crear moneda:', error)
    return NextResponse.json(
      { error: 'Error al crear moneda' },
      { status: 500 }
    )
  }
}
