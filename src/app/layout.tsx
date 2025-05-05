import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'HUT BULOG',
  description: 'Aplikasi Registrasi Kupon',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  )
}
