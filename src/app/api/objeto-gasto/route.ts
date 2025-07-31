import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { tipo, referenciaId, descripcion } = body

    const nuevoObjeto = await prisma.objetoGasto.create({
      data: {
        tipo,
        referenciaId,
        descripcion
      }
    })

    return NextResponse.json(nuevoObjeto, { status: 201 })
  } catch (error) {
    console.error('Error al crear objeto de gasto:', error)
    return NextResponse.json(
      { error: 'Error al crear objeto de gasto' },
      { status: 500 }
    )
  }
}

