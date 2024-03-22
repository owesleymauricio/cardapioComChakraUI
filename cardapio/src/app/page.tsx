'use client'
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";

import { useState } from "react";
import {
  FiltrarProdutos,
  BuscarProdutos,
  ProdutosEntradas,
} from "../service";

import Cards from '@/components/cards'
import Categorias from '@/components/categorias'
import CampoDeBusca from '@/components/campoDeBusca';
import Capa from "@/components/capa";


export default function Home() {
 

  const [dadosFiltrados, setDadosFiltrados] = useState(ProdutosEntradas);
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");
  const [botaoClicado, setBotaoClicado] = useState("Entradas");

  const handleBusca = (textoDigitado: any) => {
    setTextoBuscaDigitado(textoDigitado);
    if (textoDigitado.length >= 3) {
      setDadosFiltrados(BuscarProdutos(textoDigitado));
    }
    setBotaoClicado("");
  };

  const handleFiltro = (categoria: any) => {
    setTextoBuscaDigitado("");
    setDadosFiltrados(FiltrarProdutos(categoria));
    setBotaoClicado(categoria);
  };

  return (
    <Flex
    flexDir={'column'}
    maxW={'1200px'}
    mt={'20px'}
    mb={'20px'}
    mr={'auto'}
    ml={'auto'}
    >
      <Capa/>


      <Box as="main" px={4} py={8} maxW="800px" mx="auto">
        <Categorias
          handleFiltro={handleFiltro}
          botaoClicado={botaoClicado}
        />
        <CampoDeBusca
          textoBuscaDigitado={textoBuscaDigitado}
          handleBusca={handleBusca}
        />
        <Box as="section" mt={8}>
          <Heading
          textAlign={'center'}
          as="h2" fontSize="2xl" mb={4}>Cardápio</Heading>
          <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>
            {dadosFiltrados.map((produto) => (
              <Cards  key={produto.id} produto={produto} />
            ))}
          </Box>
        </Box>
      </Box>

     
    </Flex>
  );
}
