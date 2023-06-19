import '../styles/globals.scss'
import { Inter } from 'next/font/google'

import Header from '../components/header'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UFBAC Rocket Design - Upgrades people! Upgrades',
  description: 'Upgrades people! Upgrades',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  )
}
