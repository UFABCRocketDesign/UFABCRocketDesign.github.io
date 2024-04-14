import '../styles/globals.scss'
import { Inter } from 'next/font/google'


import styles from '../styles/layout.module.scss';
import Body from '@/components/body';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UFBAC Rocket Design',
  description: 'Upgrades people! Upgrades',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">

      <Body>
        {children}
      </Body>

    </html>
  )
}
