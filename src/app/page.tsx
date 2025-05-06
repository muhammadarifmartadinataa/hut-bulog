'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [kuponData, setKuponData] = useState<any[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchKuponData = async () => {
      try {
        const response = await fetch('/api/kupon') // API untuk semua kupon
        if (!response.ok) {
          throw new Error('Gagal memuat data kupon')
        }
        const data = await response.json()
        setKuponData(data)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError('Terjadi kesalahan yang tidak diketahui')
        }
      }
    }

    fetchKuponData()
  }, [])

  return (
    <main className="p-4 max-w-6xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Daftar Kupon yang Terdaftar</h1>
      {error && <p className="text-red-500">{error}</p>}

      {kuponData.length === 0 ? (
        <p className="text-gray-500">Belum ada kupon yang terdaftar.</p>
      ) : (
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border-b px-4 py-2 text-left">ID Kupon</th>
              <th className="border-b px-4 py-2 text-left">Nama</th>
              <th className="border-b px-4 py-2 text-left">Jabatan</th>
              <th className="border-b px-4 py-2 text-left">Unit Kerja</th>
              <th className="border-b px-4 py-2 text-left">Hadiah</th> {/* Menambahkan kolom Hadiah */}
            </tr>
          </thead>
          <tbody>
            {kuponData.map((kupon) => (
              <tr key={kupon.id}>
                <td className="border-b px-4 py-2">{kupon.id_kupon}</td>
                <td className="border-b px-4 py-2">{kupon.nama}</td>
                <td className="border-b px-4 py-2">{kupon.jabatan}</td>
                <td className="border-b px-4 py-2">{kupon.unit_kerja}</td>
                <td className="border-b px-4 py-2">{kupon.hadiah ? kupon.hadiah.hadiah : '-'}</td> {/* Menampilkan hadiah */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  )
}
