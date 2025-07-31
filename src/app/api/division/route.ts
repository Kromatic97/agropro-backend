import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre } = body;

    const nuevaDivision = await prisma.division.create({
      data: { nombre },
    });

    return NextResponse.json(nuevaDivision, { status: 201 });
  } catch (error) {
    console.error("Error al crear división:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
