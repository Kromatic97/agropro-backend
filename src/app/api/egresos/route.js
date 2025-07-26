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

export async function POST(req) {
  try {
    const data = await req.json();

    const nuevo = await prisma.egreso.create({
      data: {
        fecha: new Date(),
        entidadId: data.entidadId,
        persona_id: data.persona_id,
        tipoEgresoId: data.tipoEgresoId,
        condicionId: data.condicionId,
        monedaId: data.monedaId,
        monto: data.monto,
        descripcion: data.descripcion,
      },
    });

    return Response.json(nuevo);
  } catch (error) {
    console.error("Error al crear egreso:", error);
    return NextResponse.json({ error: "Error al crear egreso" }, { status: 500 });
  }
}


