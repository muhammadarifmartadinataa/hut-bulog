'use client'

import { useState } from 'react'

export default function DaftarKupon() {
  const [idKupon, setIdKupon] = useState('')
  const [nama, setNama] = useState('')
  const [jabatan, setJabatan] = useState('')
  const [unitKerja, setUnitKerja] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const inputClass =
    "w-full bg-transparent text-white px-3 py-2 rounded border border-white focus:outline-none appearance-none"
  const inputStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(4px)",
  }

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
    <main className="p-4 max-w-md mx-auto text-white">
      <h1 className="text-xl font-bold mb-4">Daftar Kupon</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="id_kupon" className="block mb-1">ID Kupon</label>
          <input
            type="text"
            id="id_kupon"
            value={idKupon}
            onChange={(e) => setIdKupon(e.target.value)}
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="nama" className="block mb-1">Nama</label>
          <input
            type="text"
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="jabatan" className="block mb-1">Jabatan</label>
          <select
            id="jabatan"
            value={jabatan}
            onChange={(e) => setJabatan(e.target.value)}
            required
            className={inputClass}
            style={inputStyle}
          >
            <option value="" disabled>Pilih Jabatan</option>
            <option value="Karyawan">Karyawan</option>
            <option value="Keluarga">Keluarga</option>
          </select>
        </div>
        <div>
          <label htmlFor="unit_kerja" className="block mb-1">Unit Kerja</label>
          <select
            id="unit_kerja"
            value={unitKerja}
            onChange={(e) => setUnitKerja(e.target.value)}
            required
            className={inputClass}
            style={inputStyle}
          >
            <option value="" disabled>Pilih Unit Kerja</option>
            <option value="PT KOPEL">PT Kopel</option>
            <option value="PT Korp">PT Korp</option>
            <option value="Kanwil Lampung">Kanwil Lampung</option>
            <option value="UB Jastasma">UB Jastasma</option>
            <option value="JPL Lampung">JPL Lampung</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className={`w-full py-2 rounded bg-blue-600 text-white ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
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
