import Header from '@/components/Header'
import Footer from '@/components/Footer/Footer'
import MyOrder from '@/components/MyOrder/MyOrder'
import { ProductsProvider } from '@/context'
import './globals.css'
import ToggleMenu from '@/components/ToggleMenu/ToggleMenu'

export const metadata = {
  title: 'E-Commerce App',
  description: 'E-Commerce App with Netxjs 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProductsProvider>
          <Header/>          
          <MyOrder/>
          {children}
          <Footer/>
        </ProductsProvider>
      </body>
    </html>
  )
}
