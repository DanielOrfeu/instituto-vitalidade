'use client'
import { VStack, Image, Text } from '@chakra-ui/react'
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

export default function Home() {
  return (
    <VStack textAlign={"center"}>
      <VStack backgroundColor={colors["2"]} w={'100%'} p={10}>
        <Image alt="logo da empresa" src={"logo.png"} width={"150px"}></Image>
        <Text fontWeight={"bold"} fontSize={'5xl'} color={colors["5"]}>Instituto Vitalidade</Text>
        <Text fontWeight={"bold"} fontSize={'2xl'} color={colors["5"]}>Saúde e vida à cada página</Text>
      </VStack>
      <VStack p={10}>
        <Text fontWeight={"bold"} fontSize={["3xl", "4xl"]} color={colors["5"]}>Quem somos</Text>
        <Text fontSize={["xl"]} color={colors["5"]}>
          Somos uma equipe apaixonada por bem-estar e autocuidado, dedicados a transformar vidas por meio de nossos e-books.
          Contamos com uma equipe completa contendo esteticista, massoterapeuta, desenvolvedor e design que contribui com
          conhecimentos para criar conteúdos valiosos sobre cuidados com a pele, massagens, saúde, alimentação saudável e
          muito mais. 🌿 <br /> Confie em nós para encontrar e-books que vão potencializar sua saúde e vitalidade.
          Junte-se a nós nessa jornada de bem-estar!🌻
        </Text>
        <Text fontWeight={"bold"} fontSize={["3xl", "4xl"]} color={colors["5"]}>Missão</Text>
        <Text fontSize={["xl"]} color={colors["5"]}>
          Capacitar indivíduos a descobrir seu potencial máximo e aprimorar seu estilo de vida por meio da leitura e do
          aprendizado contínuo. Acreditamos no poder transformador dos eBooks, que oferecem acesso instantâneo a um vasto
          acervo de conhecimentos em diversos campos.
        </Text>
        <Text fontWeight={"bold"} fontSize={["3xl", "4xl"]} color={colors["5"]}>Visão</Text>
        <Text fontSize={["xl"]} color={colors["5"]}>
          Nossa visão é ser a principal referência no mercado de vendas de e-books, sendo reconhecidos como uma empresa que
          valoriza a importância da leitura e do conhecimento como ferramentas essenciais para o crescimento humano. Queremos
          estabelecer relacionamentos duradouros com nossos clientes, fornecendo um serviço excepcional, uma seleção
          diversificada de títulos relevantes e uma experiência de compra personalizada.
        </Text>
        <Text fontWeight={"bold"} fontSize={["3xl", "4xl"]} color={colors["5"]}>Valores</Text>
        <Text fontWeight={"bold"} fontSize={["2xl"]} color={colors["3"]}>Paixão pela leitura</Text>
        <Text fontSize={["xl"]} color={colors["5"]}>
          Acreditamos no poder transformador da leitura e nos dedicamos a compartilhar essa paixão com nossos clientes, 
          colaboradores e comunidade.
        </Text>
        <Text fontWeight={"bold"} fontSize={["2xl"]} color={colors["3"]}>Integridade</Text>
        <Text fontSize={["xl"]} color={colors["5"]}>
          Operamos com os mais altos padrões éticos, transparência e respeito, promovendo a confiança mútua em todos os nossos
          relacionamentos.
        </Text>
        <Text fontWeight={"bold"} fontSize={["2xl"]} color={colors["3"]}>Excelência</Text>
        <Text fontSize={["xl"]} color={colors["5"]}>
          Buscamos constantemente a excelência em tudo o que fazemos, desde a seleção cuidadosa dos livros até o atendimento
          excepcional ao cliente.
        </Text>
        <Text fontWeight={"bold"} fontSize={["2xl"]} color={colors["3"]}>Diversidade e inclusão</Text>
        <Text fontSize={["xl"]} color={colors["5"]}>
          Valorizamos e respeitamos a diversidade de perspectivas, experiências e autores, oferecendo uma ampla variedade de
          livros que representem e sirvam a todos os públicos.
        </Text>
        <Text fontWeight={"bold"} fontSize={["2xl"]} color={colors["3"]}>Inovação</Text>
        <Text fontSize={["xl"]} color={colors["5"]}>
          Abraçamos a inovação, buscando constantemente novas maneiras de aprimorar a experiência de compra de nossos clientes,
          explorando tecnologias e ideias criativas.
        </Text>
        <Text fontWeight={"bold"} fontSize={["2xl"]} color={colors["3"]}>Responsabilidade social</Text>
        <Text fontSize={["xl"]} color={colors["5"]}>
          Comprometemo-nos a contribuir para o bem-estar da comunidade, apoiando projetos e iniciativas sociais relacionados à
          leitura, educação e acesso à informação.
        </Text>
      </VStack>
    </VStack>
  )
}


