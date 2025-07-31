import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre } = body

    const nuevaCondicion = await prisma.condicion.create({
      data: {
        nombre,
      },
    })

    return NextResponse.json(nuevaCondicion, { status: 201 })
  } catch (error) {
    console.error('Error al crear condición:', error)
    return NextResponse.json(
      { error: 'Error al crear condición' },
      { status: 500 }
    )
  }
}
