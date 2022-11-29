import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { Router } from 'next/router';
import { useRef } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { api } from '../../../api';

interface ITransactionCardProps {
  id: string;
  description: string;
  type: string;
  amount: string;
} 

export const TransactionCard = ({amount, description, type, id}: ITransactionCardProps) => {
  const { colorMode } = useColorMode();
  const deleteTransactionModal = useDisclosure();
  const deleteTransactionRef = useRef();

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
              {description}
            </Heading>
            <Heading
              fontSize={{
                sm: '1rem',
                md: '1.2rem',
                lg: '1.2rem',
                xl: '1.6rem',
              }}
            >
              {type}
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
                  {type === 'expense' ? 'Saída' : 'Entrada'}
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
            <Button variant="outline" mr={3} onClick={deleteTransactionModal.onClose}>
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
                window.location.reload();
                api.delete(`/transactions/${id}`);
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
