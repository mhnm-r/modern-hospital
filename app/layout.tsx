import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header/Header'
import HeaderNav from '@/components/HeaderNav/HeaderNav'
import Footer from '@/components/Footer/Footer'
import { Providers } from '@/src/components/Providers'

export const metadata: Metadata = {
  title: 'সীতাকুণ্ড মডার্ন হসপিটাল, চট্টগ্রাম',
  description: 'A Modern hospital offering advanced care through cutting-edge technology and world-class medical team',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <HeaderNav />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

