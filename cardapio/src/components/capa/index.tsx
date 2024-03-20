import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react'

function Capa() {
    return (
        <Box as='section'
        borderRadius={'8px'}
        bg={'#DAA520'}
        w={'100%'}
        position="relative"
        maxWidth={'1200px'} 
        margin={'auto'} // Para centralizar a caixa pai horizontalmente
        >
            <Box
           
                backgroundImage='assets/banner.png'
                backgroundSize="100%"
                width="100%"
                height="400px"
                position="relative"
                zIndex={1}
                marginLeft={'auto'}
                marginRight={'auto'}
            >
                 <Box
                 position="absolute"
                  top="50%" 
                  width="100%" textAlign="center"
                 display={'flex'}
                 justifyContent={'center'}
                 alignItems={'center'}
                 flexDir={'column'}
                >
                    <Heading
                    fontWeight={'bold'}
                    as="h1"
                     size={{base: '2xl', md: '4xl'}}
                    whiteSpace={{ base: 'unset', md: 'nowrap' }} // Alterando a propriedade white-space para 'unset' em telas menores
                    textShadow={'1px 2px 1px #000'}
                    color={'#FFD700'}
                    >
                    Restaurante
                    </Heading>
                    <Text
                    color={'#FFD700'}
                    >
                    De pratos clássicos a criações surpreendentes,
                    <br/>
                     nosso cardápio é um requinte de sabores refinados
                    </Text>
                </Box>
            
            </Box>
           

        </Box>
    )
}

export default Capa;