import { Inter } from 'next/font/google'
import './globals.css'
import AppBar from '@/Components/appbar'
import Footer from '@/Components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PRK Global 360',
  description: 'Management Company',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     

      <main>
          <AppBar/>
          {children}
          <Footer/>
       
        </main>
    </html>
  )
}
