"use client";

import { useState, useEffect, useRef } from "react";
import * as XLSX from "xlsx";
import { FiUpload, FiDownload } from "react-icons/fi";

export default function Home() {
  const [kuponData, setKuponData] = useState<any[]>([]);
  const [error, setError] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "with" | "without" | "hangus" | "hadir" | "tidak" | "withoutHadiahAndHadir"
  >("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 10;

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  /* ------------------------------------------------------------------
     Fetch data kupon di mount
  ------------------------------------------------------------------ */
  useEffect(() => {
    const fetchKuponData = async () => {
      try {
        const response = await fetch("/api/kupon");
        if (!response.ok) throw new Error("Gagal memuat data kupon");
        const data = await response.json();
        setKuponData(data);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("Terjadi kesalahan yang tidak diketahui");
      }
    };

    fetchKuponData();
  }, []);

  /* ------------------------------------------------------------------
     Handler: klik tombol file browser (import)
  ------------------------------------------------------------------ */
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  /* ------------------------------------------------------------------
     Handler: proses import Excel
  ------------------------------------------------------------------ */
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const data = new Uint8Array(event.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet);

      const preparedData = jsonData.map((item) => ({
        id_kupon: item.id_kupon,
        nama: item.nama,
        jabatan: item.jabatan,
        unit_kerja: item.unit_kerja,
        kehadiran: false,
      }));

      try {
        const res = await fetch("/api/import-excel", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(preparedData),
        });

        if (!res.ok) throw new Error("Gagal mengimpor data");

        const response = await fetch("/api/kupon");
        const data = await response.json();
        setKuponData(data);
        alert("Berhasil mengimpor data!");
      } catch (err) {
        console.error(err);
        alert("Terjadi kesalahan saat impor.");
      }
    };

    reader.readAsArrayBuffer(file);
  };

  /* ------------------------------------------------------------------
     Handler: proses export Excel
  ------------------------------------------------------------------ */
  const handleExportExcel = () => {
    const exportData = filteredKuponData.map((kupon) => ({
      "ID Kupon": kupon.id_kupon,
      Nama: kupon.nama,
      Jabatan: kupon.jabatan,
      "Unit Kerja": kupon.unit_kerja,
      Hadiah: kupon.hadiah?.hadiah || "-",
      Kehadiran: kupon.kehadiran ? "Hadir" : "Tidak Hadir",
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Kupon");

    XLSX.writeFile(workbook, "data-kupon.xlsx");
  };

  /* ------------------------------------------------------------------
     Filter & search logic
  ------------------------------------------------------------------ */
  const namaSudahDapatHadiah = new Set(
    kuponData
      .filter((k) => k.hadiah !== null)
      .map((k) => k.nama?.toLowerCase().trim())
  );

  const filteredKuponData = kuponData
    .filter((kupon) => {
      if (filterStatus === "with") return kupon.hadiah !== null;
      if (filterStatus === "without") return kupon.hadiah === null;
      if (filterStatus === "hangus") return kupon.hadiah?.hadiah === "Hangus";
      if (filterStatus === "hadir") return kupon.kehadiran === true;
      if (filterStatus === "tidak") return kupon.kehadiran === false;
      if (filterStatus === "withoutHadiahAndHadir")
        return (
          kupon.hadiah === null &&
          kupon.kehadiran === true &&
          kupon.jabatan?.toLowerCase().includes("karyawan") &&
          !namaSudahDapatHadiah.has(kupon.nama?.toLowerCase().trim())
        );
      return true;
    })
    .filter((kupon) => {
      const search = searchQuery.toLowerCase();
      return (
        kupon.nama?.toLowerCase().includes(search) ||
        kupon.jabatan?.toLowerCase().includes(search) ||
        kupon.id_kupon?.toLowerCase().includes(search) ||
        kupon.unit_kerja?.toLowerCase().includes(search)
      );
    });

  const totalPages = Math.ceil(filteredKuponData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageData = filteredKuponData.slice(startIndex, startIndex + itemsPerPage);

  /* ------------------------------------------------------------------
     Render
  ------------------------------------------------------------------ */
  return (
    <main className="p-4 sm:p-10 max-w-6xl mx-auto">
      {/* ---------- Header & Actions ---------- */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h1 className="text-xl font-bold mb-4 sm:mb-0 text-center sm:text-left">
          Daftar Kupon yang Terdaftar
        </h1>
        <div className="flex">
          {/* Import */}
          <button
            type="button"
            onClick={handleButtonClick}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <FiUpload />
            Import Excel
          </button>

          {/* Export */}
          <button
            type="button"
            onClick={handleExportExcel}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 ml-2"
          >
            <FiDownload />
            Export Excel
          </button>

          {/* Hidden input for file */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* ---------- Search ---------- */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Cari Nama / Jabatan / ID Kupon / Unit Kerja..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full sm:w-80 px-4 py-2 border rounded"
        />
      </div>

      {/* ---------- Filter Buttons ---------- */}
      <div className="mb-4 space-x-2">
        {[
          ["all", "Semua"],
          ["hadir", "Hadir"],
          ["tidak", "Tidak Hadir"],
          ["with", "Sudah Dapat Hadiah"],
          ["withoutHadiahAndHadir", "Belum Dapat Hadiah & Hadir"],
          ["hangus", "Hangus"],
        ].map(([status, label]) => (
          <button
            key={status}
            onClick={() => {
              setFilterStatus(status as any);
              setCurrentPage(1);
            }}
            className={`px-3 py-1 rounded border ${
              filterStatus === status ? "bg-blue-500 text-white" : ""
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ---------- Table ---------- */}
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
                <th className="border-b px-4 py-2 text-left">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((kupon, index) => (
                <tr key={kupon.id_kupon || index}>
                  <td className="border-b px-4 py-2">{kupon.id_kupon}</td>
                  <td className="border-b px-4 py-2">{kupon.nama}</td>
                  <td className="border-b px-4 py-2">{kupon.jabatan}</td>
                  <td className="border-b px-4 py-2">{kupon.unit_kerja}</td>
                  <td className="border-b px-4 py-2">
                    {kupon.hadiah ? kupon.hadiah.hadiah : "-"}
                  </td>
                  <td className="border-b px-4 py-2">
                    {kupon.kehadiran ? "Hadir" : "Tidak Hadir"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ---------- Pagination ---------- */}
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
                className={`px-3 py-1 rounded border ${
                  currentPage === i + 1 ? "bg-blue-500 text-white" : ""
                }`}
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
