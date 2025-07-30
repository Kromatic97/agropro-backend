import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const egresos = await prisma.egreso.findMany({
      include: {
        entidad: true,
        proveedor: true,
        funcionario: true,
        tipo_egreso: true,
        condicion: true,
        moneda: true,
      },
    });

    return NextResponse.json(egresos);
  } catch (error) {
    console.error("ERROR INTERNO EN /api/egresos:", JSON.stringify(error, null, 2));
    return NextResponse.json({ error: "Error al obtener egresos" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      tipoPersona,
      personaId,
      entidadId,
      tipoEgresoId,
      condicionId,
      monedaId,
      monto,
      descripcion
    } = body;

    // ✅ Validación básica
    if (!['Proveedor', 'Funcionario'].includes(tipoPersona)) {
      return NextResponse.json({ error: 'tipoPersona debe ser Proveedor o Funcionario' }, { status: 400 });
    }

    // ✅ Validar existencia según tipoPersona
    if (tipoPersona === 'Proveedor') {
      const proveedor = await prisma.proveedor.findUnique({ where: { id: personaId } });
      if (!proveedor) {
        return NextResponse.json({ error: 'Proveedor no encontrado' }, { status: 404 });
      }
    }

    if (tipoPersona === 'Funcionario') {
      const funcionario = await prisma.funcionario.findUnique({ where: { id: personaId } });
      if (!funcionario) {
        return NextResponse.json({ error: 'Funcionario no encontrado' }, { status: 404 });
      }
    }

    // ✅ Crear egreso
    const egreso = await prisma.egreso.create({
      data: {
        tipoPersona,
        personaId,
        entidadId,
        tipoEgresoId,
        condicionId,
        monedaId,
        monto,
        descripcion
      }
    });

    return NextResponse.json(egreso);

  } catch (error) {
    console.error('Error al crear egreso:', error);
    return NextResponse.json({ error: 'Error al crear egreso' }, { status: 500 });
  }
}



