// src/api/kupon/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma' // Memastikan impor prisma sudah benar

export async function GET() {
  try {
    const kuponData = await prisma.kupon.findMany() // Ganti dengan query sesuai struktur model Prisma Anda
    return NextResponse.json(kuponData)
  } catch (error) {
    console.error('Error fetching kupon data: ', error)
    return NextResponse.error()
  }
}
