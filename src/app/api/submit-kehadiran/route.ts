import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const { id_kupon } = await req.json()

  const update = await prisma.kupon.update({
    where: { id_kupon },
    data: { kehadiran: true }
  })

  return NextResponse.json(update)
}
