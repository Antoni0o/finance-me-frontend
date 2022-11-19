import {
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

export const TransactionAmounts = () => {
  const { colorMode } = useColorMode();
  return (
    <Grid templateColumns={["100%", "100%", "repeat(3, 1fr)", "repeat(3, 1fr)"]} templateRows={["repeat(3, 1fr)", "repeat(3, 1fr)", "100%", "100%"]} gap={10}>
      <GridItem
        h={{
          sm: '7rem',
          md: '7rem',
          lg: '7rem',
          xl: '10rem',
        }}
        p={{
          sm: '1rem',
          md: '0.6rem',
          lg: '0.6rem',
          xl: '1rem',
        }}
        bg={colorMode == 'dark' ? 'dark.200' : 'green.150'}
        borderRadius="xl"
        boxShadow="xl"
      >
        <Heading
          color={colorMode == 'dark' ? 'light.100' : 'dark.100'}
          fontSize={{
            sm: 'medium',
            md: 'large',
            lg: 'larger',
            xl: 'x-large',
          }}
        >
          ENTRADAS
        </Heading>
        <Flex
          mt={{
            md: '1rem',
            lg: '1rem',
            xl: '1.5rem',
          }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading
            fontSize={{
              sm: '2rem',
              md: '1.6rem',
              lg: '1.8rem',
              xl: '3rem',
            }}
          >
            R$ XXXX,XX
          </Heading>
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
        h={{
          sm: '7rem',
          md: '7rem',
          lg: '7rem',
          xl: '10rem',
        }}
        p={{
          sm: '1rem',
          md: '0.6rem',
          lg: '0.6rem',
          xl: '1rem',
        }}
        bg={colorMode == 'dark' ? 'dark.200' : 'green.150'}
        borderRadius="xl"
        boxShadow="xl"
      >
        <Heading
          color={colorMode == 'dark' ? 'light.100' : 'dark.100'}
          fontSize={{
            sm: 'medium',
            md: 'large',
            lg: 'larger',
            xl: 'x-large',
          }}
        >
          SAÍDAS
        </Heading>
        <Flex
          mt={{
            md: '1rem',
            lg: '1rem',
            xl: '1.5rem',
          }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading
            fontSize={{
              sm: '2rem',
              md: '1.6rem',
              lg: '1.8rem',
              xl: '3rem',
            }}
          >
            R$ XXXX,XX
          </Heading>
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
        h={{
          sm: '7rem',
          md: '7rem',
          lg: '7rem',
          xl: '10rem',
        }}
        p={{
          sm: '1rem',
          md: '0.6rem',
          lg: '0.6rem',
          xl: '1rem',
        }}
        bg={colorMode == 'dark' ? 'dark.200' : 'green.150'}
        borderRadius="xl"
        boxShadow="xl"
      >
        <Heading
          color={colorMode == 'dark' ? 'light.100' : 'dark.100'}
          fontSize={{
            sm: 'medium',
            md: 'large',
            lg: 'larger',
            xl: 'x-large',
          }}
        >
          SALDO
        </Heading>
        <Flex
          mt={{
            md: '1rem',
            lg: '1rem',
            xl: '1.5rem',
          }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading
            fontSize={{
              sm: '2rem',
              md: '1.6rem',
              lg: '1.8rem',
              xl: '3rem',
            }}
          >
            R$ XXXX,XX
          </Heading>
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