"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [kuponData, setKuponData] = useState<any[]>([]);
  const [error, setError] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<"all" | "with" | "without">(
    "all"
  );

  useEffect(() => {
    const fetchKuponData = async () => {
      try {
        const response = await fetch("/api/kupon"); // API untuk semua kupon yang hadir
        if (!response.ok) {
          throw new Error("Gagal memuat data kupon");
        }
        const data = await response.json();
        setKuponData(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Terjadi kesalahan yang tidak diketahui");
        }
      }
    };

    fetchKuponData();
  }, []);

  const filteredKuponData = kuponData.filter((kupon) => {
    if (filterStatus === "with") return kupon.hadiah !== null;
    if (filterStatus === "without") return kupon.hadiah === null;
    return true;
  });

  return (
    <main className="p-4 max-w-6xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Daftar Kupon yang Terdaftar</h1>
      {error && <p className="text-red-500">{error}</p>}

      <div className="mb-4 space-x-2">
        <button
          className={`px-3 py-1 rounded border ${
            filterStatus === "all"
              ? "bg-blue-100 text-black"
              : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setFilterStatus("all")}
        >
          Semua
        </button>
        <button
          className={`px-3 py-1 rounded border ${
            filterStatus === "with"
              ? "bg-green-100 text-black"
              : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setFilterStatus("with")}
        >
          Sudah Dapat Hadiah
        </button>
        <button
          className={`px-3 py-1 rounded border ${
            filterStatus === "without"
              ? "bg-red-100 text-black"
              : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setFilterStatus("without")}
        >
          Belum Dapat Hadiah
        </button>
      </div>

      {filteredKuponData.length === 0 ? (
        <p className="text-gray-500">Tidak ada kupon yang sesuai filter.</p>
      ) : (
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border-b px-4 py-2 text-left">ID Kupon</th>
              <th className="border-b px-4 py-2 text-left">Nama</th>
              <th className="border-b px-4 py-2 text-left">Jabatan</th>
              <th className="border-b px-4 py-2 text-left">Unit Kerja</th>
              <th className="border-b px-4 py-2 text-left">Hadiah</th>
            </tr>
          </thead>
          <tbody>
            {filteredKuponData.map((kupon) => (
              <tr key={kupon.id}>
                <td className="border-b px-4 py-2">{kupon.id_kupon}</td>
                <td className="border-b px-4 py-2">{kupon.nama}</td>
                <td className="border-b px-4 py-2">{kupon.jabatan}</td>
                <td className="border-b px-4 py-2">{kupon.unit_kerja}</td>
                <td className="border-b px-4 py-2">
                  {kupon.hadiah ? kupon.hadiah.hadiah : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
