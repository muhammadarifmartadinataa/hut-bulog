import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const { id_kupon } = await req.json()

  const kupon = await prisma.kupon.findUnique({ where: { id_kupon } })
  if (!kupon) return NextResponse.json({ error: 'Kupon tidak ditemukan' }, { status: 404 })

  return NextResponse.json(kupon)
}
