import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { tipo, referenciaId, detalleEgresoId } = body;

    const nuevoObjeto = await prisma.objetoGasto.create({
      data: {
        tipo,
        referenciaId,
        detalleEgresoId,
      },
    });

    return NextResponse.json(nuevoObjeto, { status: 201 });
  } catch (error) {
    console.error("Error al crear Objeto de Gasto:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
