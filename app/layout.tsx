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
      {/* h-screen + flex-col + overflow-hidden makes the layout constant */}
      <body className="h-screen overflow-hidden bg-black text-white antialiased flex flex-col">
        
        {/* Fixed Header */}
        <Navbar />

        {/* flex-1: Fills the remaining space between Nav and Footer
            overflow-hidden: Prevents the main page from having a scrollbar
        */}
        <main className="flex-1 overflow-hidden">
          {children}
        </main>

        {/* Fixed Footer */}
        <Footerbar />
        
        {/* 🚨 THE SECOND {children} WAS REMOVED FROM HERE TO FIX THE DUPLICATION 🚨 */}
      </body>
    </html>
  )
}