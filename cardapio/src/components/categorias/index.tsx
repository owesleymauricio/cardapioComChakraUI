import { Button, Flex, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/router';


const convertToBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Categorias = ({handleFiltro}: any) => {
  
  return (
    <Flex gap={2} alignItems="center" marginBottom="4">
      <Button
      color={'#000'}
        padding={'20px'}
        colorScheme='yellow'
        onClick={() => handleFiltro("Entradas")}
        marginBottom="2"
      >
        <Image height={'20px'} src='assets/entrada.png' alt="Ícone" marginRight="2" />Entradas
      </Button>

      <Button
       color={'#000'}
       padding={'20px'}
       colorScheme='yellow'
        onClick={() => handleFiltro("Massas")}
        marginBottom="2"
      >
        <Image height={'20px'} src='assets/massa.png' alt="Ícone" marginRight="2" />Massas
      </Button>

      <Button
        color={'#000'}
        padding={'20px'}
        colorScheme='yellow'
        onClick={() => handleFiltro("Carnes")}
        marginBottom="2"
      >
        <Image height={'20px'} src='assets/carne.png' alt="Ícone" marginRight="2" />Carnes
      </Button>

      <Button
        color={'#000'}
        padding={'20px'}
        colorScheme='yellow'
        onClick={() => handleFiltro("Bebidas")}
        marginBottom="2"
      >
        <Image height={'20px'} src='assets/bebidas.png' alt="Ícone" marginRight="2" />Bebidas
      </Button>

      <Button
        color={'#000'}
        padding={'20px'}
        colorScheme='yellow'
        onClick={() => handleFiltro("Saladas")}
        marginBottom="2"
      >
        <Image height={'20px'} src='assets/salada.png' alt="Ícone" marginRight="2" />Saladas
      </Button>

      <Button
       color={'#000'}
       padding={'20px'}
       colorScheme='yellow'
        onClick={() => handleFiltro("Sobremesas")}
        marginBottom="2"
      >
        <Image height={'20px'} src='assets/sobremesa.png' alt="Ícone" marginRight="2" />Sobremesas
      </Button>
    </Flex>
  );
};

export default Categorias;
