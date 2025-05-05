'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Kiri - Logo dan Nama Aplikasi */}
      <Link href="/" passHref>
        <div className="flex items-center cursor-pointer">
          <img
            src="/logo.png" // Path ke gambar logo di folder public
            alt="Logo HUT BULOG"
            className="h-8 w-auto mr-4" // Styling logo
          />
          {/* <div className="text-xl font-bold">HUT BULOG</div> */}
        </div>
      </Link>

      {/* Kanan - Menu */}
      <div className="space-x-6">
        <Link href="/kehadiran" className="hover:underline">
          Kehadiran
        </Link>
        <Link href="/daftar-kupon" className="hover:underline">
          Daftar Kupon
        </Link>
        <Link href="/hadiah" className="hover:underline">
          Hadiah
        </Link>
      </div>
    </nav>
  )
}
