import { HStack, Icon, Link, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { SiWhatsapp, SiInstagram, SiMinutemailer} from "react-icons/si";
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
                    <Link href="https://api.whatsapp.com/send?phone=5521976492422" isExternal>
                        <HStack>
                            <Icon boxSize={8} as={SiWhatsapp} />
                            <Text>+55 21 97649-2422 </Text>
                        </HStack>
                    </Link>
                </HStack>
                <HStack>
                    <Link href="https://www.instagram.com/instituto.vitalidade/" isExternal>
                        <HStack>
                            <Icon boxSize={8} as={SiInstagram} />
                            <Text>@instituto.vitalidade</Text>
                        </HStack>

                    </Link>
                </HStack>
                <HStack>
                    <Link href="mailto:contato@institutovitalidade.com.br" isExternal>
                            <HStack>
                                <Icon boxSize={8} as={SiMinutemailer} />
                                <Text>contato@institutovitalidade.com.br</Text>
                            </HStack>
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
