'use client'

import { useState } from 'react'

export default function DaftarKupon() {
  const [idKupon, setIdKupon] = useState('')
  const [nama, setNama] = useState('')
  const [jabatan, setJabatan] = useState('')
  const [unitKerja, setUnitKerja] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const res = await fetch('/api/daftar-kupon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_kupon: idKupon,
        nama: nama,
        jabatan: jabatan,
        unit_kerja: unitKerja
      })
    })

    if (res.ok) {
      setMessage('Kupon berhasil didaftarkan!')
      
      // Reset form fields after successful submission
      setIdKupon('')
      setNama('')
      setJabatan('')
      setUnitKerja('')
    } else {
      setMessage('Gagal mendaftarkan kupon. Coba lagi.')
    }

    setIsLoading(false)
  }

  return (
    <main className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Daftar Kupon</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="id_kupon" className="block">ID Kupon</label>
          <input
            type="text"
            id="id_kupon"
            value={idKupon}
            onChange={(e) => setIdKupon(e.target.value)}
            required
            className="border px-3 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="nama" className="block">Nama</label>
          <input
            type="text"
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
            className="border px-3 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="jabatan" className="block">Jabatan</label>
          <input
            type="text"
            id="jabatan"
            value={jabatan}
            onChange={(e) => setJabatan(e.target.value)}
            required
            className="border px-3 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="unit_kerja" className="block">Unit Kerja</label>
          <input
            type="text"
            id="unit_kerja"
            value={unitKerja}
            onChange={(e) => setUnitKerja(e.target.value)}
            required
            className="border px-3 py-2 w-full"
          />
        </div>
        <div>
          <button
            type="submit"
            className={`w-full py-2 bg-blue-600 text-white ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Mendaftar...' : 'Daftarkan Kupon'}
          </button>
        </div>
      </form>

      {message && <p className="mt-4 text-center">{message}</p>}
    </main>
  )
}
