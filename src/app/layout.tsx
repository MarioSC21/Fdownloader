import type { Metadata } from 'next'
import { lora } from '@/fonts/fonts'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'Fdownloader - Descargador de videos de Facebook',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${lora.className} antialiased`}>
        <Toaster richColors position='top-right' />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
