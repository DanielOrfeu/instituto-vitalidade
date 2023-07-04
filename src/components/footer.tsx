import { HStack, Icon, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { GrInstagram } from "react-icons/gr";
import { BiMap } from "react-icons/bi";
import { HiPhone } from "react-icons/hi";
import { Divider } from '@chakra-ui/react'

export default function Footer() {
    return (
        <VStack
            p={'20px'}
            w={'100%'}
            bgColor={'#06BEB0'}
            color={'white'}
            justifyContent={'center'}
            textAlign={'center'}
        >
            <HStack
                flexFlow={'wrap'}
                justifyContent={'center'}
            >   
                <HStack>
                    <Icon boxSize={8} as={GrInstagram} />
                    <Link href="https://www.instagram.com/instituto.vitalidade/" isExternal>
                        @instituto.vitalidade
                    </Link>
                </HStack>
                <HStack>
                    <Icon boxSize={8} as={HiOutlineMail} />
                    <Link href="mailto:contato@institutovitalidade.com.br" isExternal>
                        contato@institutovitalidade.com.br
                    </Link>
                </HStack>
            </HStack>
            <Divider/>
            <VStack>
                <Text>Instituto Vitalidade - Saúde e vida à cada página</Text>
                <Text>CNPJ: 50.744.268/0001-06</Text>
                <Text>Copyright © 2023 Todos os direitos reservados.</Text>
            </VStack>
        </VStack>
    )
}
