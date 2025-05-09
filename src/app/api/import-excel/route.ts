import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    // Mengambil data dari request body
    const kuponList = await req.json();

    // Validasi apakah data yang diterima berupa array
    if (!Array.isArray(kuponList)) {
      return NextResponse.json({ message: "Format data tidak valid" }, { status: 400 });
    }

    // Iterasi untuk setiap item kupon dalam kuponList
    for (const kupon of kuponList) {
      // Validasi apakah semua field yang diperlukan ada
      if (!kupon.id_kupon || !kupon.nama || !kupon.jabatan || !kupon.unit_kerja) {
        continue; // Skip data yang tidak lengkap
      }

      // Upsert (insert or update) data ke database
      await prisma.kupon.upsert({
        where: { id_kupon: kupon.id_kupon },
        update: {
          nama: kupon.nama,
          jabatan: kupon.jabatan,
          unit_kerja: kupon.unit_kerja,
          kehadiran: false, // Set kehadiran false saat di-import
        },
        create: {
          id_kupon: kupon.id_kupon,
          nama: kupon.nama,
          jabatan: kupon.jabatan,
          unit_kerja: kupon.unit_kerja,
          kehadiran: false, // Set kehadiran false saat di-import
        },
      });
    }

    // Jika sukses, beri respon sukses
    return NextResponse.json({ message: "Import berhasil" }, { status: 200 });
  } catch (error: unknown) {
    // Penanganan error
    if (error instanceof Error) {
      // Jika error adalah instance dari Error, akses message
      console.error("Import error:", error.message);
      return NextResponse.json({ message: "Terjadi kesalahan server", error: error.message }, { status: 500 });
    } else {
      // Jika error bukan instance dari Error (misalnya tipe lain), konversi menjadi string
      console.error("Terjadi kesalahan yang tidak terduga:", error);
      return NextResponse.json({ message: "Terjadi kesalahan yang tidak terduga", error: String(error) }, { status: 500 });
    }
  }
}
