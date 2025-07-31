import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const tipo = searchParams.get('tipo');

  if (tipo !== 'Proveedor' && tipo !== 'Funcionario') {
    return NextResponse.json({ error: 'tipo debe ser Proveedor o Funcionario' }, { status: 400 });
  }

  try {
    const personas = await prisma.persona.findMany({
      where: {
        ...(tipo === 'Proveedor' ? { proveedor: { isNot: null } } : {}),
        ...(tipo === 'Funcionario' ? { funcionario: { isNot: null } } : {}),
      },
      select: {
        id: true,
        nombre: true,
      },
    });

    return NextResponse.json(personas);
  } catch (error) {
    console.error('Error en GET /api/personas:', error);
    return NextResponse.json({ error: 'Error al obtener personas' }, { status: 500 });
  }
}
