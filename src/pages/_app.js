import '@/styles/globals.css'

// pages/_app.js
import {NextUIProvider} from '@nextui-org/react'

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
