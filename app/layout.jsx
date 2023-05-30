import {Inter} from '@next/font/google'

import '@/styles/reset.css'
import '@/styles/global.css'

import Header from '@/components/header'
import Footer from '@/components/footer'

const interFontFamily = Inter({subsets: ['latin']})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFontFamily.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='container'>
        <Header />
          <main>{children}</main>
        <Footer />
     </body>
    </html>
  )
}
