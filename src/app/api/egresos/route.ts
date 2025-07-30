import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

type TipoPersona = 'Funcionario' | 'Proveedor';

type PersonaResponse = {
  id: number;
  nombre: string;
  tipo: TipoPersona;
};

export async function GET(req: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(req.url);
    const tipo = searchParams.get('tipo') as TipoPersona | null;

    let personas: PersonaResponse[] = [];

    if (tipo === 'Funcionario') {
      const funcionarios: (Prisma.FuncionarioGetPayload<{
        include: { persona: true };
      }>)[] = await prisma.funcionario.findMany({
        include: { persona: true },
      });

      personas = funcionarios.map((f): PersonaResponse => ({
        id: f.id,
        nombre: f.persona.nombre,
        tipo: 'Funcionario',
      }));
    } else if (tipo === 'Proveedor') {
      const proveedores: (Prisma.ProveedorGetPayload<{
        include: { persona: true };
      }>)[] = await prisma.proveedor.findMany({
        include: { persona: true },
      });

      personas = proveedores.map((p): PersonaResponse => ({
        id: p.id,
        nombre: p.persona.nombre,
        tipo: 'Proveedor',
      }));
    } else {
      const [funcionarios, proveedores] = await Promise.all([
        prisma.funcionario.findMany({
          include: { persona: true },
        }) as Promise<Prisma.FuncionarioGetPayload<{ include: { persona: true } }>[]>,

        prisma.proveedor.findMany({
          include: { persona: true },
        }) as Promise<Prisma.ProveedorGetPayload<{ include: { persona: true } }>[]>,

      ]);

      personas = [
        ...funcionarios.map((f): PersonaResponse => ({
          id: f.id,
          nombre: f.persona.nombre,
          tipo: 'Funcionario',
        })),
        ...proveedores.map((p): PersonaResponse => ({
          id: p.id,
          nombre: p.persona.nombre,
          tipo: 'Proveedor',
        })),
      ];
    }

    return NextResponse.json(personas);
  } catch (error) {
    console.error('Error al obtener personas:', error);
    return NextResponse.json({ error: 'Error al obtener personas' }, { status: 500 });
  }
}




