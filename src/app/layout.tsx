import './globals.css'
import Navbar from './navbar/navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Remus Poon',
  description: 'Remus Poon Blog',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'icon',
      url: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png'
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className='bg-gray w-full overflow-x-hidden'>
        <Navbar />
        <main className='mt-[-4rem]'>
          {children}
        </main>
        </body>
    </html>
  )
}
