import type { Metadata } from 'next'
import { Archivo_Black, Montserrat } from 'next/font/google'
import './globals.css'

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-archivo-black',
  display: 'swap',
  preload: true,
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '500'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'ARTS Innovations - Revolutionizing Aviation with Blockchain & AI',
  description: 'Advanced software solutions for aircraft industry using blockchain and AI technologies powered by METRA platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body className={`${montserrat.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
