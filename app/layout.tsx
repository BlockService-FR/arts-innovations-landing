import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space-grotesk',
  display: 'swap'
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-inter antialiased" suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
