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

  const handleWinnerSave = async (customHadiah?: string) => {
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
        hadiah: customHadiah || hadiah,
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
    <div className="flex items-start justify-center  text-white px-4 py-30">
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
                fontSize={15}
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
              <option value="Sepeda Listrik Eksotic">
                Sepeda Listrik Eksotic
              </option>
              <option value="Xiaomi Tab 7">Xiaomi Tab 7</option>
              <option value="Sepeda Listrik">Sepeda Listrik</option>
              <option value="Android TV 43">Android TV 43</option>
              <option value="Kulkas 2 Pintu (Sharp)">
                Kulkas 2 Pintu (Sharp)
              </option>
              <option value="Kulkas 2 Pintu (Polytron)">
                Kulkas 2 Pintu (Polytron)
              </option>
              <option value="Mesin Cuci Midea">Mesin Cuci Midea</option>
              <option value="Mesin Cuci">Mesin Cuci</option>
              <option value="Xiaomi TV A Pro">Xiaomi TV A Pro</option>
              <option value="Xiaomi redmi 13">Xiaomi redmi 13</option>
              <option value="Sepeda New Phoenix by Pacific">
                Sepeda New Phoenix by Pacific
              </option>
              <option value="Handphone Android">Handphone Android</option>
              <option value="Vacum Cleaner Sharp">Vacum Cleaner Sharp</option>
              <option value="Speaker Aktif GMC">Speaker Aktif GMC</option>
              <option value="Coffee Maker">Coffee Maker</option>
              <option value="Rice Cooker Philip">Rice Cooker Philip</option>
              <option value="Rice Cooker Samono">Rice Cooker Samono</option>
              <option value="Ricecooker Miyako">Ricecooker Miyako</option>
              <option value="Blender Cosmos">Blender Cosmos</option>
              <option value="Mini Blender Kels">Mini Blender Kels</option>
              <option value="Kipas angin Miyako">Kipas angin Miyako</option>
              <option value="Kompor Gas">Kompor Gas</option>
              <option value="Kompor Gas 2 Tungku">Kompor Gas 2 Tungku</option>
              <option value="Kompor Gas Win">Kompor Gas Win</option>
              <option value="Magic com">Magic com</option>
              <option value="Pemanggang roti">Pemanggang roti</option>
              <option value="Juicer">Juicer</option>
              <option value="Setrika Kels">Setrika Kels</option>
              <option value="Setrika Maspion">Setrika Maspion</option>
              <option value="Setrika Miyako">Setrika Miyako</option>
              <option value="Dispenser Miyako">Dispenser Miyako</option>
              <option value="Dispenser">Dispenser</option>
              <option value="Minyak Goreng">Minyak Goreng</option>
              <option value="Oilpot Stanles">Oilpot Stanles</option>
              <option value="Panci Calypso">Panci Calypso</option>
              <option value="Timbangan Hinomaru">Timbangan Hinomaru</option>
              <option value="Terminal 6">Terminal 6</option>
              <option value="Tumbler">Tumbler</option>
              <option value="DLL">DLL</option>
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

              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleWinnerSave()}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Simpan Pemenang
                </button>
                <button
                  onClick={() => handleWinnerSave("Hangus")}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Hanguskan Kupon
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
