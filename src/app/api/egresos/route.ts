import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const egresos = await prisma.egreso.findMany({
      include: {
        persona: true,               // incluye Proveedor o Funcionario (según tipoPersona)
        entidad: true,
        moneda: true,
        condicion: true,
        tipoEgreso: true,
        detallesEgreso: {
          include: {
            division: true,
            objetoGasto: true,
            iva: true,
          },
        },
      },
      orderBy: {
        fecha: 'desc',
      },
    });

    return NextResponse.json(egresos);
  } catch (error) {
    console.error("ERROR EN GET /api/egresos:", error);
    return NextResponse.json(
      { error: 'Error al obtener los egresos' },
      { status: 500 }
    );
  }
}


// POST /api/egresos
// Tipo para cada detalle de egreso
type DetalleInput = {
  divisionId: number;
  objetoGastoId: number;
  ivaId: number;
  descripcion: string;
  cantidad: number;
  precioUnitario: number;
  monto: number;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fecha,
      tipoPersona,
      personaId,
      entidadId,
      tipoEgresoId,
      condicionId,
      monedaId,
      monto,
      descripcion,
      detalles,
    }: {
      fecha: string;
      tipoPersona: 'Proveedor' | 'Funcionario';
      personaId: number;
      entidadId: number;
      tipoEgresoId: number;
      condicionId: number;
      monedaId: number;
      monto: number;
      descripcion: string;
      detalles: DetalleInput[];
    } = body;

    // Validaciones
    if (!['Proveedor', 'Funcionario'].includes(tipoPersona)) {
      return NextResponse.json({ error: 'tipoPersona debe ser Proveedor o Funcionario' }, { status: 400 });
    }

    if (!fecha || !Array.isArray(detalles) || detalles.length === 0) {
      return NextResponse.json({ error: 'Debe incluir fecha y al menos un detalle' }, { status: 400 });
    }

    // Verificar existencia de persona
    if (tipoPersona === 'Proveedor') {
      const proveedor = await prisma.proveedor.findUnique({ where: { id: personaId } });
      if (!proveedor) return NextResponse.json({ error: 'Proveedor no encontrado' }, { status: 404 });
    } else if (tipoPersona === 'Funcionario') {
      const funcionario = await prisma.funcionario.findUnique({ where: { id: personaId } });
      if (!funcionario) return NextResponse.json({ error: 'Funcionario no encontrado' }, { status: 404 });
    }

    // Crear egreso con detalles
    const egreso = await prisma.egreso.create({
      data: {
        fecha: new Date(fecha),
        tipoPersona,
        personaId,
        entidadId,
        tipoEgresoId,
        condicionId,
        monedaId,
        monto,
        descripcion,
        detallesEgreso: {
          create: detalles.map((d) => ({
            divisionId: d.divisionId,
            objetoGastoId: d.objetoGastoId,
            ivaId: d.ivaId,
            descripcion: d.descripcion,
            cantidad: d.cantidad,
            precioUnitario: d.precioUnitario,
            monto: d.monto,
          })),
        },
      },
      include: {
        detallesEgreso: true,
      },
    });

    return NextResponse.json(egreso, { status: 201 });

  } catch (error) {
    console.error('Error al crear egreso:', error);
    return NextResponse.json({ error: 'Error al crear egreso' }, { status: 500 });
  }
}


