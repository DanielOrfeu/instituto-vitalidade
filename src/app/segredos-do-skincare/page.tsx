"use client"

import { VStack, Text, Image, Stack, HStack, Card, CardBody, CardHeader, CardFooter, Button, Link, Accordion, AccordionItem, AccordionButton, Box, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import React from 'react'

const enum colors {
  "#ffffff",
  "#d1fdfb",
  "#10E1D5",
  "#05BEB0",
  "#029286",
  "#00584F",
  "#000000"
}

export default function SegredosSkinCare() {
  return (
    <Stack gap={0} background={colors["3"]}>
      <VStack p={"20px"} bgColor={colors["2"]} w={"100%"} color={colors["0"]} justifyContent={"center"} textAlign={"center"}>
        <Image alt="logo da empresa" src={"logo.png"} width={"100px"}></Image>
        <Text fontWeight={"bold"} fontSize={["3xl", "5xl"]} color={colors["5"]}>OS SEGREDOS DO</Text>
        <Text fontWeight={"bold"} fontSize={["3xl", "6xl"]}>SKINCARE:</Text>
        <Text fontWeight={"bold"} fontSize={["xl"]} color={colors["4"]}>LIBERTE SUA BELEZA INTERIOR</Text>
        <Text color={colors["5"]} fontSize={["md", "lg", "xl"]} w={["100%", "80%", "50%"]} wordBreak={"break-word"}>Você deseja ter uma pele radiante e saudável? O ebook "Os Segredos do Skincare" é o guia definitivo para você alcançar o brilho que sempre desejou. Aprenda os cuidados essenciais para transformar sua rotina e revelar a beleza interior que está esperando para ser liberada.</Text>
        <Text p={8} fontWeight={"bold"} fontSize={["2xl"]} color={colors["5"]}>Desbloqueie a verdadeira beleza que existe dentro de você com nosso ebook</Text>
        <Link href="https://pay.kiwify.com.br/AazOBTs" isExternal><Button fontSize={"xl"} m={5} p={10} color={colors["0"]} bgColor={colors["5"]}>COMPRAR AGORA</Button></Link>
      </VStack>
      <VStack p={"20px"} backgroundColor={colors["1"]} textAlign={"center"}>
        <Text fontWeight={"bold"} fontSize={["2xl"]} color={colors["5"]}>Mais de 80 páginas com os mais diversos temas, incluindo:</Text>
        <Stack
          flexDirection={"row"}
          flexFlow={"wrap"}
          justifyContent={"center"}
          wordBreak={"break-word"}
          p={[0, 10]}
        >
          <Card backgroundColor={colors["3"]} align={"center"} w={["100%", "100%", "70%", "40%", "20%"]} p={5}>
            <CardHeader p={0}>
              <Image alt="logo de alerta" w={["70px", "100px"]} src={"alert-logo.png"} />
            </CardHeader>
            <CardBody textAlign={"center"}>
              <Text color={colors["0"]}>A Importância dos Cuidados com a Pele: Descubra por que cuidar da sua pele é essencial para a sua saúde e autoestima.</Text>
            </CardBody>
          </Card>
          <Card backgroundColor={colors["3"]} align={"center"} w={["100%", "100%", "70%", "40%", "20%"]} p={5}>
            <CardHeader p={0}>
              <Image alt="logo referenciando cuidados" w={["70px", "100px"]} src={"heart-logo.png"} />
            </CardHeader>
            <CardBody textAlign={"center"}>
              <Text color={colors["0"]}>Tipos de Pele e Cuidados Recomendados: Descubra seu tipo de pele e aprenda as melhores práticas de cuidados específicas para você.</Text>
            </CardBody>
          </Card>
          <Card backgroundColor={colors["3"]} align={"center"} w={["100%", "100%", "70%", "40%", "20%"]} p={5}>
            <CardHeader p={0}>
              <Image alt="logo sobre pele" w={["70px", "100px"]} src={"skin-logo.png"} />
            </CardHeader>
            <CardBody textAlign={"center"}>
              <Text color={colors["0"]}>Rotina Diária de Skincare para uma Pele Radiante: Receba dicas práticas e conselhos especializados para criar uma rotina diária de cuidados com a pele que proporcionará resultados impressionantes.</Text>
            </CardBody>
          </Card>
          <Card backgroundColor={colors["3"]} align={"center"} w={["100%", "100%", "70%", "40%", "20%"]} p={5}>
            <CardHeader p={0}>
              <Image alt="segundo logo de alerta" w={["70px", "100px"]} src={"alert2-logo.png"} />
            </CardHeader>
            <CardBody textAlign={"center"}>
              <Text color={colors["0"]}>Disbiose: Em Que Pode Afetar A Minha Pele?: Descubra como a disbiose afeta sua pele e aprenda a restabelecer o equilíbrio necessário para uma pele saudável.</Text>
            </CardBody>
          </Card>
        </Stack>
      </VStack>

      <Stack
        p={"20px"}
        flexDirection={["column", "column", "row"]}
        justifyContent={"center"}
        textAlign={"center"}
        align={"center"}
      >
        <Image alt="ilustração" w={["50%", "30%"]} src="pc.png" />
        <Card backgroundColor={colors["5"]} w={["100%", "70%", "50%"]} p={"10px"}>
          <Text color={colors["1"]}>
            E muito mais! Este ebook exclusivo é o seu passaporte para uma pele deslumbrante e uma confiança renovada. Não perca a oportunidade de transformar sua rotina de cuidados com a pele e liberar sua beleza interior. Adquira agora "Os Segredos do Skincare" e comece sua jornada em direção a uma pele radiante e saudável!
          </Text>
          <CardFooter justifyContent={"center"}>
            <Link href="https://pay.kiwify.com.br/AazOBTs" isExternal><Button p={7} color={colors["5"]} bgColor={colors["0"]}>EU QUERO</Button></Link>
          </CardFooter>
        </Card>
      </Stack>
      <VStack p={"20px"} backgroundColor={colors["5"]} textAlign="center">
        <Text fontWeight={"extrabold"} fontSize={["3xl"]} color={colors["1"]}>Depoimentos de nossos clientes</Text>
        <Stack
          flexDirection={"row"}
          flexFlow={"wrap"}
          justifyContent={"center"}
          wordBreak={"break-word"}
          p={[0, 10]}
        >
          <Card backgroundColor={colors["3"]} align={"center"} w={["100%", "100%", "70%", "40%", "30%"]} p={5}>
            <CardBody textAlign={"center"}>
              <Text color={colors["0"]}>"Estou impressionada com as informações reveladas no ebook "Os Segredos do Skincare". Aprendi sobre a estrutura da pele, os diferentes tipos de pele e os cuidados recomendados para cada um deles. Agora, tenho uma rotina de skincare personalizada que realmente funciona. Minha pele nunca esteve tão saudável e bonita. Obrigada por compartilhar esses segredos!"</Text>
            </CardBody>
            <CardFooter>
              <Text fontWeight={"bold"} color={colors["0"]}>Luana, Estudante</Text>
            </CardFooter>
          </Card>
          <Card backgroundColor={colors["3"]} align={"center"} w={["100%", "100%", "70%", "40%", "30%"]} p={5}>
            <CardBody textAlign={"center"}>
              <Text color={colors["0"]}>""Eu sempre lutava contra problemas de pele, até que encontrei o ebook "Os Segredos do Skincare". Descobri como a disbiose estava afetando minha pele e aprendi a restaurar o equilíbrio necessário. As dicas práticas e a rotina diária recomendada me ajudaram a obter uma pele radiante e livre de problemas. Recomendo este livro para todos que desejam conquistar uma pele saudável e luminosa."</Text>
            </CardBody>
            <CardFooter>
              <Text fontWeight={"bold"} color={colors["0"]}>Mauro,  Analista de Dados</Text>
            </CardFooter>
          </Card>
          <Card backgroundColor={colors["3"]} align={"center"} w={["100%", "100%", "70%", "40%", "30%"]} p={5}>
            <CardBody textAlign={"center"}>
              <Text color={colors["0"]}>"O ebook "Os Segredos do Skincare" me ensinou a importância da consistência nos cuidados com a pele. Antes, eu pulava etapas e não seguia uma rotina regular. Agora, percebo como isso afetava minha pele. Com a rotina diária de skincare para uma pele radiante sugerida no livro, obtive resultados surpreendentes. Minha pele está mais suave, hidratada e com um brilho natural. Estou muito feliz com os resultados!"</Text>
            </CardBody>
            <CardFooter>
              <Text fontWeight={"bold"} color={colors["0"]}>Maria, Costureira</Text>
            </CardFooter>
          </Card>
        </Stack>
      </VStack>
      <VStack
        background={colors["1"]}
        justifyContent={"center"}
        textAlign={"center"}
        p={"20px"}
      >
        {/* <Text color={colors["5"]} fontWeight={"bold"} fontSize={["2xl", "5xl"]}>COMPRA GARANTIDA</Text>
        <Image alt="selo de garantia 7 dias" w={["150px", "200px"]} src="selo-7-dias.png" />
        <Text color={colors["5"]} fontSize={"xl"}>Oferecemos uma garantia de dinheiro de volta em 7 dias para sua tranquilidade. Invista em sua beleza agora e descubra os segredos para uma pele radiante sem nenhum risco!</Text> */}
        <Link href="https://pay.kiwify.com.br/AazOBTs" isExternal><Button fontSize={"xl"} m={5} p={10} color={colors["0"]} bgColor={colors["5"]}>COMPRAR AGORA</Button></Link>
      </VStack>

      <VStack
        background={colors["5"]}
        justifyContent={"center"}
        textAlign={"center"}
        p={"20px"}
      >
        <Text color={colors["0"]} fontWeight={"bold"} fontSize={["3xl"]}>Perguntas frequentes</Text>
        <Accordion defaultIndex={[0]} allowToggle w="100%">
          <AccordionItem color={colors["0"]}>
            <h2>
              <AccordionButton justifyContent={"center"}>
                <Text fontWeight={"bold"} fontSize={["xl"]}>
                  Nosso site é confiável?
                </Text>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Sim, o nosso site é confiável. Implementamos medidas de segurança e privacidade para garantir a proteção dos dados dos nossos usuários. 
              Utilizamos protocolos de criptografia para proteger as informações transmitidas entre o navegador do usuário e nosso servidor, o que ajuda 
              a evitar acesso não autorizado. Além disso, seguimos as melhores práticas da indústria para proteger contra ataques cibernéticos, como 
              firewalls e monitoramento constante.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem color={colors["0"]}>
            <h2>
              <AccordionButton justifyContent={"center"}>
                <Text fontWeight={"bold"} fontSize={["xl"]}>
                  Onde o pagamento é processado?
                </Text>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              O pagamento é processado pela Kiwify. A Kiwify é uma plataforma de processamento de pagamentos segura e confiável que utilizamos para 
              facilitar as transações em nosso site. Ela oferece uma camada adicional de segurança e proteção aos dados financeiros dos nossos clientes.
              A Kiwify utiliza tecnologias de criptografia avançada para proteger as informações sensíveis durante a transmissão. Isso significa que 
              seus dados financeiros, como detalhes do cartão de crédito, são criptografados e armazenados de forma segura. Nós, como empresa, não 
              armazenamos ou temos acesso direto às suas informações de pagamento.
              A Kiwify também está em conformidade com os padrões e regulamentações de segurança da indústria de pagamentos, o que garante a proteção 
              dos seus dados pessoais e financeiros. Ela é uma empresa reconhecida e confiável no setor de processamento de pagamentos online.
              Caso você tenha alguma dúvida específica sobre o processamento de pagamentos ou precise de assistência durante o processo, nossa equipe 
              de suporte está à disposição para ajudar.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem color={colors["0"]}>
            <h2>
              <AccordionButton justifyContent={"center"}>
                <Text fontWeight={"bold"} fontSize={["xl"]}>
                  Quando vou receber meu produto?
                </Text>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Assim que concluir o processo de compra, você terá acesso instantâneo ao seu produto através de uma área de membros. Após o pagamento ser processado 
            com sucesso, você receberá um email da plataforma Kiwify com título "Pagamento aprovado" e o nome do nosso ebook. Mais informações sobre o recebimento 
            do ebook você encontra <Link href='https://ajuda.kiwify.com.br/pt-br/article/como-acessar-o-produto-digital-que-comprei-18l0rrc/'>clicando aqui</Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Stack>
  )
}