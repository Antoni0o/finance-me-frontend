import {
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

export const Transactions = () => {
  const { colorMode } = useColorMode();
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={10}>
      <GridItem
        h="10rem"
        p="1rem"
        bg={colorMode == 'dark' ? 'dark.200' : 'green.150'}
        borderRadius="xl"
        boxShadow="xl"
      >
        <Heading
          color={colorMode == 'dark' ? 'light.100' : 'dark.100'}
          fontSize="x-large"
        >
          ENTRADAS
        </Heading>
        <Flex mt="1.5rem" alignItems="center" justifyContent="space-between">
          <Heading fontSize="3rem">R$ XXXX,XX</Heading>
          <IconButton
            aria-label="Esconder valor"
            variant="ghost"
            w="3rem"
            h="3rem"
            borderRadius="50px"
            padding="0.4rem"
            fontSize="3rem"
            icon={<AiOutlineEyeInvisible />}
          ></IconButton>
        </Flex>
      </GridItem>
      <GridItem
        h="10rem"
        p="1rem"
        bg={colorMode == 'dark' ? 'dark.200' : 'green.150'}
        borderRadius="xl"
        boxShadow="xl"
      >
        <Heading
          color={colorMode == 'dark' ? 'light.100' : 'dark.100'}
          fontSize="x-large"
        >
          SAÍDAS
        </Heading>
        <Flex mt="1.5rem" alignItems="center" justifyContent="space-between">
          <Heading fontSize="3rem">R$ XXXX,XX</Heading>
          <IconButton
            aria-label="Esconder valor"
            variant="ghost"
            w="3rem"
            h="3rem"
            borderRadius="50px"
            padding="0.4rem"
            fontSize="3rem"
            icon={<AiOutlineEyeInvisible />}
          ></IconButton>
        </Flex>
      </GridItem>
      <GridItem
        h="10rem"
        p="1rem"
        bg={colorMode == 'dark' ? 'dark.200' : 'green.150'}
        borderRadius="xl"
        boxShadow="xl"
      >
        <Heading
          color={colorMode == 'dark' ? 'light.100' : 'dark.100'}
          fontSize="x-large"
        >
          SALDO
        </Heading>
        <Flex mt="1.5rem" alignItems="center" justifyContent="space-between">
          <Heading fontSize="3rem">R$ XXXX,XX</Heading>
          <IconButton
            aria-label="Esconder valor"
            variant="ghost"
            w="3rem"
            h="3rem"
            borderRadius="50px"
            padding="0.4rem"
            fontSize="3rem"
            icon={<AiOutlineEyeInvisible />}
          ></IconButton>
        </Flex>
      </GridItem>
    </Grid>
  );
};
