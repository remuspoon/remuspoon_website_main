import './globals.css'
import Navbar from './navbar/navbar'

export const metadata = {
  title: 'Remus Poon',
  description: 'Remus Poon Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray'>
        <Navbar />
        <main className='mt-[-5rem]'>
          {children}
        </main>
      </body>
    </html>
  )
}
