import { Box, Image, Text } from '@chakra-ui/react';

const Cards = ({ produto }: any) => {
  return (
    <Box
     border={'1px solid #A9A9A9'}
     borderRadius={'8px'}
      display="flex" 
      alignItems="center" 
      marginBottom="4"
      boxShadow='0px 10px 13px 0px black'
      >
      <Image 
      marginLeft={'3px'}
      src={produto.imagem} 
      alt={produto.nome}
      borderRadius={'8px'}
       boxSize="130px"
        objectFit="cover" />
      <Box marginLeft="4">
        <Text fontSize="xl" fontWeight="bold">{produto.nome}</Text>
        <Text fontSize="sm">{produto.categoria}</Text>
        <Text>{produto.descricao}</Text>
        <Text fontWeight="bold" marginTop="2">
          {new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(produto.preco)}
        </Text>
      </Box>
    </Box>
  );
};

export default Cards;
