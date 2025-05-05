'use client'

export default function DaftarKupon() {
  const cards = [
    { id: 1, title: 'Card 1', content: 'This is card 1' },
    { id: 2, title: 'Card 2', content: 'This is card 2' },
    { id: 3, title: 'Card 3', content: 'This is card 3' },
    { id: 4, title: 'Card 4', content: 'This is card 4' },
    { id: 5, title: 'Card 5', content: 'This is card 5' },
    { id: 6, title: 'Card 6', content: 'This is card 6' },
    // Tambahkan lebih banyak card jika diperlukan
  ]

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Daftar Kupon</h1>
      <div className="grid grid-cols-3 gap-4">
        {cards.map((card) => (
          <div key={card.id} className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
