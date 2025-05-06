import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET() {
  try {
    // Mengambil data kupon yang hadir (kehadiran: true) dan belum memiliki hadiah (hadiah: null)
    const kuponHadirTanpaHadiah = await prisma.kupon.findMany({
      where: {
        kehadiran: true,  // Memfilter berdasarkan kehadiran yang true
        hadiah: null,     // Memastikan kupon belum mendapatkan hadiah
      },
      include: {
        hadiah: true,     // Sertakan data hadiah jika ada (akan null jika belum ada hadiah)
      },
    })

    return NextResponse.json(kuponHadirTanpaHadiah)
  } catch (error) {
    console.error('Error fetching kupon data: ', error)
    return NextResponse.json({ error: 'Terjadi kesalahan mengambil kupon' }, { status: 500 })
  }
}
