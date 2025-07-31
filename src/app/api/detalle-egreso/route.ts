import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      egresoId,
      divisionId,
      objetoGastoId,
      ivaId,
      descripcion,
      monto
    } = body

    const nuevoDetalle = await prisma.detalleEgreso.create({
      data: {
        egresoId,
        divisionId,
        objetoGastoId,
        ivaId,
        descripcion,
        monto
      }
    })

    return NextResponse.json(nuevoDetalle, { status: 201 })
  } catch (error) {
    console.error('Error al crear detalle de egreso:', error)
    return NextResponse.json(
      { error: 'Error al crear detalle de egreso' },
      { status: 500 }
    )
  }
}
