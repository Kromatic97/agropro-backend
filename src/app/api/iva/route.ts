import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { descripcion, porcentaje } = body

    const nuevoIva = await prisma.iva.create({
      data: {
        descripcion,
        porcentaje
      }
    })

    return NextResponse.json(nuevoIva, { status: 201 })
  } catch (error) {
    console.error('Error al crear IVA:', error)
    return NextResponse.json(
      { error: 'Error al crear IVA' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const ivas = await prisma.iva.findMany()
    return NextResponse.json(ivas, { status: 200 })
  } catch (error) {
    console.error('Error al obtener IVAs:', error)
    return NextResponse.json({ error: 'Error al obtener IVAs' }, { status: 500 })
  }
}