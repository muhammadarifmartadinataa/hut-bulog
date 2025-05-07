'use client';

import { useState, useEffect } from 'react';

export default function Kehadiran() {
  const [idKupon, setIdKupon] = useState('');
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (idKupon.trim().length >= 3) {
        handleCek();
      } else {
        setData(null);
        setError('');
      }
    }, 500); // Delay 500ms setelah user berhenti mengetik

    return () => clearTimeout(timer); // Batalkan jika user masih mengetik
  }, [idKupon]);

  const handleCek = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/cek-kupon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_kupon: idKupon }),
      });

      if (!res.ok) {
        setError('Kupon tidak ditemukan');
        setData(null);
      } else {
        const json = await res.json();
        setData(json);
        setError('');
        setSubmitted(false);
      }
    } catch (err) {
      setError('Terjadi kesalahan');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    await fetch('/api/submit-kehadiran', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id_kupon: idKupon }),
    });

    setSubmitted(true);
    handleCek(); // refresh data
  };

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

      {isLoading && <p className="text-gray-500 mb-2">Memuat data kupon...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {data && (
        <div className="border p-4 mb-4">
          <p><strong>Nama:</strong> {data.nama}</p>
          <p><strong>Jabatan:</strong> {data.jabatan}</p>
          <p><strong>Unit Kerja:</strong> {data.unit_kerja}</p>
          <p><strong>Kehadiran:</strong> {data.kehadiran ? 'Hadir' : 'Belum Hadir'}</p>

          {!data.kehadiran && !submitted && (
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 mt-2"
            >
              Submit Kehadiran
            </button>
          )}

          {submitted && (
            <p className="text-green-600 mt-2">Kehadiran telah dicatat!</p>
          )}
        </div>
      )}
    </main>
  );
}
