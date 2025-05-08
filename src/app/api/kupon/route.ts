import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma'; // sesuaikan path prisma kamu

export async function GET() {
  try {
    const kuponData = await prisma.kupon.findMany({
      include: {
        hadiah: true,
      },
    });

    return NextResponse.json(kuponData);
  } catch (error) {
    console.error('Error fetching kupon data:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan mengambil kupon' },
      { status: 500 }
    );
  }
}
