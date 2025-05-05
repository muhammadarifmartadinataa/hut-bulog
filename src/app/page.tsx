'use client'
import { useState } from 'react'

export default function Home() {
  const [idKupon, setIdKupon] = useState('')
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleCek = async () => {
    const res = await fetch('/api/cek-kupon', {
      method: 'POST',
      body: JSON.stringify({ id_kupon: idKupon })
    })
    if (!res.ok) {
      setError('Kupon tidak ditemukan')
      setData(null)
      return
    }
    const json = await res.json()
    setData(json)
    setError('')
  }

  const handleSubmit = async () => {
    await fetch('/api/submit-kehadiran', {
      method: 'POST',
      body: JSON.stringify({ id_kupon: idKupon })
    })
    setSubmitted(true)
  }

  return (
    <main className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Registrasi Kehadiran Kupon</h1>
      <input
        type="text"
        value={idKupon}
        onChange={(e) => setIdKupon(e.target.value)}
        placeholder="Masukkan ID Kupon"
        className="border px-3 py-2 w-full mb-2"
      />
      <button onClick={handleCek} className="bg-blue-500 text-white px-4 py-2 mb-4">
        Cek Kupon
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {data && (
        <div className="border p-4 mb-4">
          <p><strong>Nama:</strong> {data.nama}</p>
          <p><strong>Jabatan:</strong> {data.jabatan}</p>
          <p><strong>Unit Kerja:</strong> {data.unit_kerja}</p>
          <p><strong>Kehadiran:</strong> {data.kehadiran ? 'Hadir' : 'Belum Hadir'}</p>

          {!data.kehadiran && !submitted && (
            <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 mt-2">
              Submit Kehadiran
            </button>
          )}
          {submitted && <p className="text-green-600 mt-2">Kehadiran telah dicatat!</p>}
        </div>
      )}
    </main>
  )
}
