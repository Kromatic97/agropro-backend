import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre } = body;

    if (!nombre) {
      return NextResponse.json({ error: "Nombre es requerido" }, { status: 400 });
    }

    // 1. Crear persona
    const nuevaPersona = await prisma.persona.create({
      data: { nombre },
    });

    // 2. Crear funcionario usando el mismo ID
    const nuevoFuncionario = await prisma.funcionario.create({
      data: {
        id: nuevaPersona.id,
      },
    });

    // 3. Responder ambos
    return NextResponse.json({
      persona: nuevaPersona,
      funcionario: nuevoFuncionario,
    }, { status: 201 });

  } catch (error) {
    console.error("Error al crear funcionario:", error);
    return NextResponse.json({ error: "Error interno al crear funcionario" }, { status: 500 });
  }
}
