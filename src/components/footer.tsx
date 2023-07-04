import { VStack, Text } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
    return (
        <VStack
            p={'20px'}
            w={'100%'}
            bgColor={'#06BEB0'}
            color={'white'}
            justifyContent={'center'}
        >
            <Text>Instituto Vitalidade - Saúde e vida à cada página</Text>
            <Text>CNPJ: 50.744.268/0001-06</Text>
            <Text>Copyright © 2023 Todos os direitos reservados.</Text>
        </VStack>
    )
}
