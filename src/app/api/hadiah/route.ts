import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { id_kupon, nama, jabatan, hadiah } = body

    if (!id_kupon || !nama || !jabatan || !hadiah) {
      return NextResponse.json({ error: 'Data tidak lengkap.' }, { status: 400 })
    }

    // Simpan ke tabel Hadiah
    const result = await prisma.hadiah.create({
      data: {
        id_kupon,
        nama,
        hadiah,
      },
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Gagal menyimpan hadiah:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat menyimpan data.' },
      { status: 500 }
    )
  }
}
