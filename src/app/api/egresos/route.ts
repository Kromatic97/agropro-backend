import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

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
      const funcionarios = await prisma.funcionario.findMany({
        include: { persona: true },
      });

      personas = funcionarios.map((f) => ({
        id: f.id,
        nombre: f.persona.nombre,
        tipo: 'Funcionario' as TipoPersona,
      }));
    } else if (tipo === 'Proveedor') {
      const proveedores = await prisma.proveedor.findMany({
        include: { persona: true },
      });

      personas = proveedores.map((p) => ({
        id: p.id,
        nombre: p.persona.nombre,
        tipo: 'Proveedor' as TipoPersona,
      }));
    } else {
      const [funcionarios, proveedores] = await Promise.all([
        prisma.funcionario.findMany({ include: { persona: true } }),
        prisma.proveedor.findMany({ include: { persona: true } }),
      ]);

      personas = [
        ...funcionarios.map((f) => ({
          id: f.id,
          nombre: f.persona.nombre,
          tipo: 'Funcionario' as TipoPersona,
        })),
        ...proveedores.map((p) => ({
          id: p.id,
          nombre: p.persona.nombre,
          tipo: 'Proveedor' as TipoPersona,
        })),
      ];
    }

    return NextResponse.json(personas);
  } catch (error) {
    console.error('Error al obtener personas:', error);
    return NextResponse.json({ error: 'Error al obtener personas' }, { status: 500 });
  }
}




