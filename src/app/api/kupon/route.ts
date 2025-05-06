import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET() {
  try {
    // Ambil kupon yang hanya memiliki kehadiran true
    const kuponData = await prisma.kupon.findMany({
      where: {
        kehadiran: true, // Hanya ambil kupon yang hadir
      },
      include: {
        hadiah: true, // Sertakan data hadiah jika ada
      },
    })

    return NextResponse.json(kuponData)
  } catch (error) {
    console.error('Error fetching kupon data: ', error)
    return NextResponse.json({ error: 'Terjadi kesalahan mengambil kupon' }, { status: 500 })
  }
}
