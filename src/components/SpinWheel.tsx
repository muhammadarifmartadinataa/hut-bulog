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
  const [prizeNumber, setPrizeNumber] = useState(0)
  const [hadiah, setHadiah] = useState('') // State untuk nama hadiah yang dipilih

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/kupon-hadiah') // API untuk kupon yang belum mendapat hadiah
      const data = await res.json()
      setKuponHadir(data)
    }

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
    const random = Math.floor(Math.random() * data.length)
    setPrizeNumber(random)
    setMustSpin(true)
  }

  const handleWinnerSave = async () => {
    const winner = data[prizeNumber]

    if (!hadiah) {
      alert('Harap pilih hadiah terlebih dahulu!')
      return
    }

    // Kirim data pemenang ke API hadiah untuk disimpan
    await fetch('/api/hadiah', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_kupon: winner.id_kupon,
        nama: winner.nama,
        jabatan: winner.jabatan,
        hadiah: hadiah, // Mengirim hadiah yang dipilih
      }),
    })

    // Mengupdate kupon yang menang
    const updatedKuponHadir = kuponHadir.filter(
      (kupon) => kupon.id_kupon !== winner.id_kupon
    )
    setKuponHadir(updatedKuponHadir)
    setMustSpin(false)
  }

  const winner = data[prizeNumber]

  return (
    <div className="flex items-center justify-center min-h-screen"> {/* Flex container untuk menempatkan di tengah */}
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

            {/* Menampilkan form untuk memilih hadiah */}
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

                  {/* Form untuk memilih hadiah */}
                  <div className="mt-4">
                    <label htmlFor="hadiah" className="block text-white mb-2">Pilih Hadiah:</label>
                    <input
                      type="text"
                      id="hadiah"
                      value={hadiah}
                      onChange={(e) => setHadiah(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder="Masukkan nama hadiah"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Tombol simpan */}
            {winner && (
              <button
                onClick={handleWinnerSave}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Simpan Pemenang
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}
