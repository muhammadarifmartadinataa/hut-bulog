'use client'; // ✅ Ini wajib ditambahkan

import { useState, useEffect } from "react";

export default function Home() {
  const [kuponData, setKuponData] = useState<any[]>([]);
  const [error, setError] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<"all" | "with" | "without">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchKuponData = async () => {
      try {
        const response = await fetch("/api/kupon");
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

  const totalPages = Math.ceil(filteredKuponData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageData = filteredKuponData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main className="p-10 max-w-6xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Daftar Kupon yang Terdaftar</h1>
      {error && <p className="text-red-500">{error}</p>}

      {/* Filter tombol */}
      <div className="mb-4 space-x-2">
        <button
          className="px-3 py-1 rounded border"
          onClick={() => { setFilterStatus("all"); setCurrentPage(1); }}
        >
          Semua
        </button>
        <button
          className="px-3 py-1 rounded border"
          onClick={() => { setFilterStatus("with"); setCurrentPage(1); }}
        >
          Sudah Dapat Hadiah
        </button>
        <button
          className="px-3 py-1 rounded border"
          onClick={() => { setFilterStatus("without"); setCurrentPage(1); }}
        >
          Belum Dapat Hadiah
        </button>
      </div>

      {currentPageData.length === 0 ? (
        <p className="text-gray-500">Tidak ada kupon yang sesuai filter.</p>
      ) : (
        <>
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
              {currentPageData.map((kupon) => (
                <tr key={kupon.id}>
                  <td className="border-b px-4 py-2">{kupon.id_kupon}</td>
                  <td className="border-b px-4 py-2">{kupon.nama}</td>
                  <td className="border-b px-4 py-2">{kupon.jabatan}</td>
                  <td className="border-b px-4 py-2">{kupon.unit_kerja}</td>
                  <td className="border-b px-4 py-2">{kupon.hadiah ? kupon.hadiah.hadiah : "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex justify-center items-center space-x-2">
            <button
              className="px-3 py-1 rounded border disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded border ${currentPage === i + 1 ? "bg-blue-500 text-white" : ""}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="px-3 py-1 rounded border disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </main>
  );
}
