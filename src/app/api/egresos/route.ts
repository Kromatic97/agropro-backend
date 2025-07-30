import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type TipoPersona = 'Funcionario' | 'Proveedor';

type PersonaResponse = {
  id: number;
  nombre: string;
  tipoPersona: TipoPersona;
};

export async function GET() {
  try {
    const [funcionarios, proveedores] = await Promise.all([
      prisma.funcionario.findMany({
        include: { persona: true },
      }),
      prisma.proveedor.findMany({
        include: { persona: true },
      }),
    ]);

    const personas: PersonaResponse[] = [
      ...funcionarios.map((f): PersonaResponse => ({
        id: f.id,
        nombre: f.persona.nombre,
        tipoPersona: 'Funcionario',
      })),
      ...proveedores.map((p): PersonaResponse => ({
        id: p.id,
        nombre: p.persona.nombre,
        tipoPersona: 'Proveedor',
      })),
    ];

    return NextResponse.json(personas);
  } catch (error) {
    console.error('Error al obtener personas:', error);
    return NextResponse.json(
      { error: 'Error al obtener personas' },
      { status: 500 }
    );
  }
}

