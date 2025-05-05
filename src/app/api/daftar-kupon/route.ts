// src/app/api/daftar-kupon/route.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { id_kupon, nama, jabatan, unit_kerja } = body

    if (!id_kupon || !nama || !jabatan || !unit_kerja) {
      return new Response('Semua field harus diisi', { status: 400 })
    }

    // Simpan ke database
    const newKupon = await prisma.kupon.create({
      data: {
        id_kupon,
        nama,
        jabatan,
        unit_kerja
      }
    })

    return new Response(JSON.stringify(newKupon), { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response('Gagal mendaftarkan kupon', { status: 500 })
  }
}
