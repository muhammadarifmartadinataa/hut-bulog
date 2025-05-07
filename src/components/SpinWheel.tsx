"use client";

import { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";

interface Kupon {
  id_kupon: string;
  nama: string;
  jabatan: string;
  unit_kerja: string;
}

export default function SpinWheel() {
  const [kuponHadir, setKuponHadir] = useState<Kupon[]>([]);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState<number | null>(null);
  const [hadiah, setHadiah] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/kupon-hadiah");
      const data = await res.json();
      if (Array.isArray(data)) {
        setKuponHadir(data);
      }
    } catch (err) {
      console.error("Gagal fetch data kupon hadir:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const data = kuponHadir.map((item) => ({
    option: item.id_kupon,
    id_kupon: item.id_kupon,
    nama: item.nama,
    jabatan: item.jabatan,
    unit_kerja: item.unit_kerja,
  }));

  const handleSpin = () => {
    if (!hadiah) {
      alert("Harap pilih hadiah terlebih dahulu!");
      return;
    }

    const random = Math.floor(Math.random() * data.length);
    setPrizeNumber(random);
    setMustSpin(true);
    setIsSaved(false);
  };

  const handleWinnerSave = async () => {
    if (prizeNumber === null) return;

    const winner = data[prizeNumber];

    await fetch("/api/hadiah", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_kupon: winner.id_kupon,
        nama: winner.nama,
        jabatan: winner.jabatan,
        hadiah: hadiah,
      }),
    });

    await fetchData();
    setMustSpin(false);
    setHadiah("");
    setIsSaved(true);
    setPrizeNumber(null);
  };

  const winner =
    prizeNumber !== null && !mustSpin && !isSaved ? data[prizeNumber] : null;

  return (
    <div className="flex items-start justify-center  bg-black text-white px-4 py-30">
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Kolom 1: Roda Spin */}
        <div className="flex-1 flex justify-center items-center">
          {data.length === 0 ? (
            <p className="text-gray-400">Belum ada kupon hadir untuk diundi.</p>
          ) : (
            <div style={{ width: 500, height: 500 }}>
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber ?? 0}
                data={data}
                backgroundColors={["#001F3F", "#7FDBFF"]}
                textColors={["#ffffff"]}
                fontSize={15} // Ukuran teks kecil agar muat banyak
                outerBorderColor="#ccc"
                outerBorderWidth={4}
                radiusLineColor="#eaeaea"
                radiusLineWidth={2}
                onStopSpinning={() => {
                  setMustSpin(false);
                }}
              />
            </div>
          )}
        </div>

        {/* Kolom 2: Kontrol + Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6 text-center">Undian Hadiah</h2>

          <div className="mb-4">
            <label htmlFor="hadiah" className="block mb-1 text-white">
              Pilih Hadiah
            </label>
            <select
              id="hadiah"
              value={hadiah}
              onChange={(e) => setHadiah(e.target.value)}
              className="w-full bg-transparent text-white px-3 py-2 rounded border border-white focus:outline-none appearance-none"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(4px)",
              }}
            >
              <option value="">-- Pilih hadiah --</option>
              <option value="Sepeda Listrik">Sepeda Listrik</option>
              <option value="Android TV 43">Android TV 43</option>
              <option value="Kulkas 1 pintu">Kulkas 1 pintu</option>
              <option value="Mesin Cuci">Mesin Cuci</option>
              <option value="Sepeda">Sepeda</option>
              <option value="Handphone">Handphone</option>
              <option value="Blender">Blender</option>
              <option value="Magic Com">Magic Com</option>
              <option value="Kipas Angin">Kipas Angin</option>
              <option value="Setrika">Setrika</option>
              <option value="Dispenser">Dispenser</option>
              <option value="Pemanggang Roti">Pemanggang Roti</option>
              <option value="Tumbler">Tumbler</option>
            </select>
          </div>

          <button
            onClick={handleSpin}
            className="w-full mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition transform hover:scale-105"
          >
            Putar Roda
          </button>

          {winner && (
            <div
              className="p-6 rounded-xl shadow-2xl animate-fadeIn border border-white/20 text-white"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <h3 className="text-xl font-semibold text-center text-blue-300 mb-4">
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
          )}
        </div>
      </div>
    </div>
  );
}
