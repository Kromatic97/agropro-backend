import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type TipoPersona = 'Funcionario' | 'Proveedor';

type PersonaResponse = {
  id: number;
  nombre: string;
  tipo: TipoPersona;
};

export async function GET() {
  try {
    const funcionarios = await prisma.funcionario.findMany({
      include: {
        persona: true,
      },
    });

    const proveedores = await prisma.proveedor.findMany({
      include: {
        persona: true,
      },
    });

    const funcionariosMap: PersonaResponse[] = funcionarios.map((f): PersonaResponse => ({
      id: f.id,
      nombre: f.persona.nombre,
      tipo: 'Funcionario',
    }));

    const proveedoresMap: PersonaResponse[] = proveedores.map((p): PersonaResponse => ({
      id: p.id,
      nombre: p.persona.nombre,
      tipo: 'Proveedor',
    }));

    const personas: PersonaResponse[] = [...funcionariosMap, ...proveedoresMap];

    return NextResponse.json(personas);
  } catch (error) {
    console.error('Error al obtener personas:', error);
    return NextResponse.json({ error: 'Error al obtener personas' }, { status: 500 });
  }
}
