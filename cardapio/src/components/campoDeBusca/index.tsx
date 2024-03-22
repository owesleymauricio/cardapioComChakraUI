import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import Lupa from '../../../public/assets/lupa.png';

const CampoDeBusca = ({ textoBuscaDigitado, handleBusca }:any) => {
  return (
    <Box display="flex" alignItems="center">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={
            <div
              style={{
                width: "24px", // largura da imagem
                height: "24px", // altura da imagem
                backgroundImage: `url(assets/lupa.png)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            />
          }
        />
        <Input
          border={'1px solid gray'}
         
          type="text"
          value={textoBuscaDigitado}
          onChange={(event) => handleBusca(event.target.value)}
          placeholder="Pesquise aqui um dos pratos do nosso cardápio"
          _placeholder={{ color: 'gray.500' }}
          focusBorderColor="transparent"
        />
      </InputGroup>
    </Box>
  );
};

export default CampoDeBusca;
