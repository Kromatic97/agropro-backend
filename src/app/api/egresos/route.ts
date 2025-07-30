import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Obtener funcionarios y proveedores con su persona asociada
    const [funcionarios, proveedores] = await Promise.all([
      prisma.funcionario.findMany({ include: { persona: true } }),
      prisma.proveedor.findMany({ include: { persona: true } }),
    ]);

    // Mapear y combinar en una sola lista
    const personas = [
      ...funcionarios.map(f => ({
        id: f.id,
        nombre: f.persona.nombre,
        tipo: 'Funcionario',
      })),
      ...proveedores.map(p => ({
        id: p.id,
        nombre: p.persona.nombre,
        tipo: 'Proveedor',
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
