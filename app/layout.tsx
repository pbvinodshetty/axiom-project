import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from './components/navbar/Navbar'
import { Footerbar } from './components/footer/footerbar'



export const metadata: Metadata = {
  title: 'AXIOM',
  description: 'Trading dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">
        <Navbar />

        <main className="pb-12">
          {children}
        </main>
        <Footerbar />
        {children}
      </body>
    </html>
  )
}


 