import { Box, Image, Text } from '@chakra-ui/react';

const Cards = ({ produto }: any) => {
  return (
    <Box display="flex" alignItems="center" marginBottom="4">
      <Image height={'70px'} src={produto.imagem} alt={produto.nome} boxSize="200px" objectFit="cover" />
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
