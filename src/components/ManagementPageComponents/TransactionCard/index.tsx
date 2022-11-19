import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';

export const TransactionCard = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        bg={colorMode === 'dark' ? 'dark.300' : 'green.100'}
        width="100%"
        padding="1rem"
        borderRadius="20px"
        display={['none', 'none', 'block', 'block']}
      >
        <Flex>
          <Flex justifyContent="space-around" alignItems="center" width="95%">
            <Heading
              maxWidth="60%"
              fontSize={{
                sm: '1rem',
                md: '1.2rem',
                lg: '1.2rem',
                xl: '1.6rem',
              }}
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              Transação Descrita em algumas palavras
              asdkajskdjaskdsajkdsakkdjaskdasdkjas
            </Heading>
            <Heading
              fontSize={{
                sm: '1rem',
                md: '1.2rem',
                lg: '1.2rem',
                xl: '1.6rem',
              }}
            >
              DESPESA
            </Heading>
            <Heading
              fontSize={{
                sm: '1rem',
                md: '1.2rem',
                lg: '1.2rem',
                xl: '1.6rem',
              }}
            >
              R$ 1000,00
            </Heading>
          </Flex>
          <IconButton
            color="red.100"
            fontSize={{
              sm: '1rem',
              md: '1.2rem',
              lg: '1.4rem',
              xl: '2rem',
            }}
            icon={<FiTrash2 />}
            variant="ghost"
            aria-label="Deletar Transação"
            _hover={{
              bg: 'none',
            }}
          />
        </Flex>
      </Box>
      <Accordion allowToggle display={['block', 'block', 'none', 'none']}>
        <AccordionItem
          bg={colorMode === 'dark' ? 'dark.300' : 'green.100'}
          borderRadius="20px"
        >
          <h2>
            <AccordionButton>
              <Box maxWidth="100%" flex="1" textAlign="left" whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis">
                Transação Descrita em algumas palavras
              asdkajskdjaskdsajkdsakkdjaskdasdkjas
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex
              gap="1rem"
              alignItems="flex-end"
              justifyContent="space-around"
            >
              <Flex
                flexDirection="column"
              >
                <Heading
                  fontSize={{
                    sm: '1rem',
                    md: '1.2rem',
                    lg: '1.2rem',
                    xl: '1.6rem',
                  }}
                >
                  Tipo:
                </Heading>
                <Heading
                  fontSize={{
                    sm: '1rem',
                    md: '1.2rem',
                    lg: '1.2rem',
                    xl: '1.6rem',
                  }}
                >
                  DESPESA
                </Heading>
              </Flex>
              <Flex
                flexDirection="column"
              >
                <Heading
                  fontSize={{
                    sm: '1rem',
                    md: '1.2rem',
                    lg: '1.2rem',
                    xl: '1.6rem',
                  }}
                >
                  Valor:
                </Heading>
                <Heading
                  fontSize={{
                    sm: '1rem',
                    md: '1.2rem',
                    lg: '1.2rem',
                    xl: '1.6rem',
                  }}
                >
                  R$ 1000,00
                </Heading>
              </Flex>
              <IconButton
                color="red.100"
                fontSize={{
                  sm: '1rem',
                  md: '1.2rem',
                  lg: '1.4rem',
                  xl: '2rem',
                }}
                icon={<FiTrash2 />}
                variant="ghost"
                aria-label="Deletar Transação"
                _hover={{
                  bg: 'none',
                }}
              />
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
