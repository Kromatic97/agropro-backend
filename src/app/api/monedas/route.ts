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
