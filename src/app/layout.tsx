import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'KuponQu',
  description: 'Aplikasi Registrasi Kupon',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/images/background.jpg')" }} // Ganti path sesuai file kamu
      >
        <Navbar />
        <main className="px-4 flex-grow bg-black/60 backdrop-blur-md">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
