import '../styles/globals.scss'

import Body from '@/components/body';

export const metadata = {
  title: 'UFABC Rocket Design',
  description: 'Site da equipe de foguetemodelismo da UFABC',
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
