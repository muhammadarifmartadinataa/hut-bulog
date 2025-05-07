'use client'

import { useEffect, useState } from 'react'
import { Wheel } from 'react-custom-roulette'

interface Kupon {
  id_kupon: string
  nama: string
  jabatan: string
  unit_kerja: string
}

export default function SpinWheel() {
  const [kuponHadir, setKuponHadir] = useState<Kupon[]>([])
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState<number | null>(null)
  const [hadiah, setHadiah] = useState('')
  const [isSaved, setIsSaved] = useState(false)

  // Fetch data kupon hadir
  const fetchData = async () => {
    const res = await fetch('/api/kupon-hadiah')
    const data = await res.json()
    setKuponHadir(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const data = kuponHadir.map((item) => ({
    option: item.id_kupon,
    id_kupon: item.id_kupon,
    nama: item.nama,
    jabatan: item.jabatan,
    unit_kerja: item.unit_kerja,
  }))

  const handleSpin = () => {
    if (!hadiah) {
      alert('Harap pilih hadiah terlebih dahulu!')
      return
    }

    const random = Math.floor(Math.random() * data.length)
    setPrizeNumber(random)
    setMustSpin(true)
    setIsSaved(false)
  }

  const handleWinnerSave = async () => {
    if (prizeNumber === null) return

    const winner = data[prizeNumber]

    await fetch('/api/hadiah', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_kupon: winner.id_kupon,
        nama: winner.nama,
        jabatan: winner.jabatan,
        hadiah: hadiah,
      }),
    })

    await fetchData()
    setMustSpin(false)
    setHadiah('')
    setIsSaved(true)
    setPrizeNumber(null)
  }

  const winner =
    prizeNumber !== null && !mustSpin && !isSaved ? data[prizeNumber] : null

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Undian Hadiah</h2>

        {/* Dropdown hadiah */}
        <div className="mb-4">
          <label htmlFor="hadiah" className="block mb-1 text-white">
            Pilih Hadiah
          </label>
          <select
  id="hadiah"
  value={hadiah}
  onChange={(e) => setHadiah(e.target.value)}
  className="bg-white text-black px-3 py-2 rounded border border-gray-300"
>
  <option value="">-- Pilih hadiah --</option>
  <option value="Kipas Angin">Kipas Angin</option>
  <option value="Dispenser">Dispenser</option>
  <option value="TV LED">TV LED</option>
  <option value="Rice Cooker">Rice Cooker</option>
  <option value="Voucher Belanja">Voucher Belanja</option>
</select>
        </div>

        {/* Roda Spin */}
        {data.length === 0 ? (
          <p className="text-gray-400">
            Belum ada kupon hadir untuk diundi.
          </p>
        ) : (
          <>
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber ?? 0}
              data={data}
              backgroundColors={['#FFDDCC', '#CCEEFF']}
              textColors={['#333']}
              onStopSpinning={() => setMustSpin(false)}
            />

            <button
              onClick={handleSpin}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Putar Roda
            </button>

            {/* Pemenang muncul hanya jika sudah spin dan belum disimpan */}
            {winner && (
              <div className="mt-8 max-w-sm mx-auto">
                <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-center text-blue-600 mb-4">
                    Pemenang Undian
                  </h3>
                  <ul className="space-y-2 text-left">
                    <li>
                      <strong>ID Kupon:</strong> {winner.id_kupon}
                    </li>
                    <li>
                      <strong>Nama:</strong> {winner.nama}
                    </li>
                    <li>
                      <strong>Jabatan:</strong> {winner.jabatan}
                    </li>
                    <li>
                      <strong>Unit Kerja:</strong> {winner.unit_kerja}
                    </li>
                    <li>
                      <strong>Hadiah:</strong> {hadiah}
                    </li>
                  </ul>
                  <button
                    onClick={handleWinnerSave}
                    className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                  >
                    Simpan Pemenang
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
