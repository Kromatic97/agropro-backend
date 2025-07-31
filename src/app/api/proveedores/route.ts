import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre } = body;

    // 1. Crear persona
    const nuevaPersona = await prisma.persona.create({
      data: {
        nombre,
      },
    });

    // 2. Crear proveedor asociado a esa persona
    const nuevoProveedor = await prisma.proveedor.create({
      data: {
        id: nuevaPersona.id,
      },
      include: {
        persona: true,
      },
    });

    return NextResponse.json(nuevoProveedor, { status: 201 });
  } catch (error) {
    console.error("Error al crear proveedor:", error);
    return NextResponse.json(
      { error: "Error al crear proveedor" },
      { status: 500 }
    );
  }
}
