'use client'

import { useEffect, useState } from 'react'
import { Wheel } from 'react-custom-roulette'

interface Kupon {
  id: string
  id_kupon: string
  nama: string
  jabatan: string
  unit_kerja: string
  kehadiran: boolean
}

export default function SpinWheel() {
  const [kuponHadir, setKuponHadir] = useState<Kupon[]>([])
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)

  // Mengambil data kupon saat halaman dimuat
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/kupon')
      const data = await res.json()
      const hadir = data.filter((item: Kupon) => item.kehadiran === true)
      setKuponHadir(hadir)
    }

    fetchData()
  }, [])

  const data = kuponHadir.map((item) => ({
    option: item.id_kupon, // Menampilkan nomor kupon di roda
    id_kupon: item.id_kupon,
    nama: item.nama,
    jabatan: item.jabatan,
    unit_kerja: item.unit_kerja,
  }))

  const handleSpin = () => {
    const random = Math.floor(Math.random() * data.length)
    setPrizeNumber(random)
    setMustSpin(true)
  }

  const handleDeleteWinner = () => {
    // Menghapus pemenang terpilih dari kuponHadir
    const updatedKuponHadir = kuponHadir.filter(
      (kupon) => kupon.id_kupon !== data[prizeNumber].id_kupon
    )
    setKuponHadir(updatedKuponHadir)
    setMustSpin(false) // Berhentikan spin setelah pemenang terpilih dan dihapus
  }

  const winner = data[prizeNumber]

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Undian Hadiah</h2>

      {data.length === 0 ? (
        <p className="text-gray-500">Belum ada kupon hadir untuk diundi.</p>
      ) : (
        <>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
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

          {/* Menambahkan margin-top untuk jarak antara tombol Putar dan Pemenang */}
          {mustSpin === false && data.length > 0 && winner && (
            <div className="mt-8 max-w-sm mx-auto">
              <div className="bg-transparent p-6 rounded-lg shadow-lg backdrop-blur-md bg-opacity-30">
                <h3 className="text-xl font-semibold text-center text-blue-600 mb-4">Pemenang Undian</h3>
                <ul className="space-y-2 text-left text-white">
                  <li><strong>ID Kupon:</strong> {winner.id_kupon}</li>
                  <li><strong>Nama:</strong> {winner.nama}</li>
                  <li><strong>Jabatan:</strong> {winner.jabatan}</li>
                  <li><strong>Unit Kerja:</strong> {winner.unit_kerja}</li>
                </ul>
              </div>
            </div>
          )}

          {/* Tombol hapus pemenang */}
          {winner && (
            <button
              onClick={handleDeleteWinner}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Hapus Pemenang
            </button>
          )}
        </>
      )}
    </div>
  )
}
