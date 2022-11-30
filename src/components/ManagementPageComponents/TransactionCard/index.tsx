import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Td,
  Text,
  Tr,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { Router } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { api } from '../../../api';

interface ITransactionCardProps {
  id: string;
  description: string;
  type: string;
  amount: string;
}

export const TransactionCard = ({
  amount,
  description,
  type,
  id,
}: ITransactionCardProps) => {
  const { colorMode } = useColorMode();
  const deleteTransactionModal = useDisclosure();
  const deleteTransactionRef = useRef();
  const [finalAmount, setFinalAmount] = useState(amount);
  
  useEffect(() => {
    if(type === 'expense') {
      setFinalAmount("-" + Number(amount).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }));
    } else {
      setFinalAmount(Number(amount).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }));
    }
  }, [])

  return (
    <>
      <Box 
        bg={colorMode === 'dark' ? 'dark.300' : 'green.100'}
        fontWeight="bold"
        borderRadius="20px"
        p="1rem"
        display={['none', 'none', 'block', 'block']}
      >
        <Grid gridTemplateColumns="50% 20% 20% 10%" alignItems="center">
        <GridItem
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
          {description}
        </GridItem>
        <GridItem
          textAlign="end"
          fontSize={{
            sm: '1rem',
            md: '1.2rem',
            lg: '1.2rem',
            xl: '1.6rem',
          }}
        >
          {type === 'expense' ? <>Saída</> : <>Entrada</>}
        </GridItem>
        <GridItem
          textAlign="end"
          fontSize={{
            sm: '1rem',
            md: '1.2rem',
            lg: '1.2rem',
            xl: '1.6rem',
          }}
          color={type === 'expense' ? 'red.100' : 'green.300'}
        >
          {finalAmount}
        </GridItem>
        <GridItem
          textAlign="end"
        >
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
            onClick={deleteTransactionModal.onOpen}
          />
        </GridItem>
        </Grid>
      </Box>
      <Accordion allowToggle display={['block', 'block', 'none', 'none']}>
        <AccordionItem
          bg={colorMode === 'dark' ? 'dark.300' : 'green.100'}
          borderRadius="20px"
        >
          <h2>
            <AccordionButton>
              <Box
                maxWidth="100%"
                flex="1"
                textAlign="left"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {description}
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
              <Flex flexDirection="column">
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
                  {type === 'expense' ? 'Saída' : 'Entrada'}
                </Heading>
              </Flex>
              <Flex flexDirection="column">
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
                  {amount}
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
                onClick={deleteTransactionModal.onOpen}
              />
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Modal
        finalFocusRef={deleteTransactionRef}
        isOpen={deleteTransactionModal.isOpen}
        onClose={deleteTransactionModal.onClose}
        isCentered
      >
        <ModalOverlay ref={deleteTransactionRef} />
        <ModalContent>
          <ModalHeader>Deletar Transação</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Tem certeza que deseja deletar a transação?</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={deleteTransactionModal.onClose}
            >
              Cancelar
            </Button>
            <Button
              variant="solid"
              bg="red.100"
              _hover={{
                opacity: '88%',
                bg: 'red.100',
              }}
              onClick={() => {
                api.delete(`/transactions/${id}`).then(() => {
                  window.location.reload();
                });
              }}
            >
              Sim, Deletar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
