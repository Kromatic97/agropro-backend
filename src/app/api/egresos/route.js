// src/app/api/egresos/route.js
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server';


export async function GET() {
  try {
    const egresos = await prisma.egreso.findMany({
      include: {
        entidad: true,
        proveedor: true,
        funcionario: true,
        tipo_egreso: true,
        condicion: true,
        moneda: true,
      },
    })

    return Response.json(egresos)
  } catch (error) {
  console.error("ERROR INTERNO EN /api/egresos:", JSON.stringify(error, null, 2));

  return NextResponse.json({ error: "Error al obtener egresos" }, { status: 500 });
}
}

