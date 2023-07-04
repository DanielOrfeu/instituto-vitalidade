'use client'

import Footer from '@/components/footer'
import { ChakraProvider, Stack, VStack } from '@chakra-ui/react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700',],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <title>Instituto Vitalidade</title>
        <meta name="description" content='Saúde e vida à cada página'></meta>
      </head>
      <body className={poppins.className}>
        <ChakraProvider resetCSS>
          <Stack bgColor={'red'} overflowX={'hidden'} gap={0}>
            <VStack>
              {children}
            </VStack>
            <Footer></Footer>
          </Stack>
        </ChakraProvider>
      </body>
    </html>
  )
}
