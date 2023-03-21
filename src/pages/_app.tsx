
import type { AppProps } from 'next/app'
import { CartContextProvider } from '../contexts/CartContext'
import { SearchContextProvider } from '../contexts/SearchContext'
import { globalStyles } from '../styles/global'



globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <SearchContextProvider>
        <Component {...pageProps} />
      </SearchContextProvider>
    </CartContextProvider>
  )
}
