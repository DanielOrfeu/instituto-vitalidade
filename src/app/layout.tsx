'use client'

import Footer from '@/components/footer'
import { ChakraProvider, Stack, VStack } from '@chakra-ui/react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700',],
  subsets: ['latin'],
})

const enum colors {
  "#ffffff",
  "#d1fdfb",
  "#10E1D5",
  "#05BEB0",
  "#029286",
  "#00584F",
  "#000000"
}

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
          <Stack overflowX={'hidden'} gap={0} backgroundColor={colors['1']}>
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
