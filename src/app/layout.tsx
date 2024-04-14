import '../styles/globals.scss'
import { Inter } from 'next/font/google'

import Header from '../components/header'
import Footer from '../components/footer'

import styles from '../styles/layout.module.scss';

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

      <body className={`${inter.className} ${styles.body}`}>
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  )
}
