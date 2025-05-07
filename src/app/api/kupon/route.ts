import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET() {
  try {
    const kuponData = await prisma.kupon.findMany({
      where: {
        kehadiran: true, // hanya yang hadir
      },
      include: {
        hadiah: true, // include hadiah (bisa null)
      },
    })

    return NextResponse.json(kuponData)
  } catch (error) {
    console.error('Error fetching kupon data:', error)
    return NextResponse.json({ error: 'Terjadi kesalahan mengambil kupon' }, { status: 500 })
  }
}
