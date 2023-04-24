import Header from '@/components/Header'
import Provider from './Provider'
import './globals.css'
import Navbar from '@/components/Navbar'
import Search from '@/components/Search'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Provider>
          <Header />
          <Navbar />
          <Search />
          {children}
        </Provider>
      </body>
    </html>
  )
}
