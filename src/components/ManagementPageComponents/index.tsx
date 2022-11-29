import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { api } from '../../api';
import { useAuth } from '../../hooks/useAuth';
import { LeftBar } from '../../theme/components/LeftBar';
import { TransactionAmounts } from '../../theme/components/TransactionAmounts';
import { User } from '../../types/User';
import { TransactionCard } from './TransactionCard';

export const ManagementPageContent = () => {
  const [transactionDescription, setTransactionDescription] = useState('');
  const [transactionType, setTransactionType] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');
  const { colorMode } = useColorMode();
  const [gridAreaLg, setGridAreaLg] = useState('4% 96%');
  const [gridAreaMd, setGridAreaMd] = useState('6% 94%');
  const [transactions, setTransactions] = useState([]);
  const {user} = useAuth();
  const createTransactionModal = useDisclosure();
  const createTransactionModalRef = useRef();
  const router = useRouter();

  useEffect(() => {
    api.get(`/users/${user.id}`).then((res) => {
      setTransactions(res.data.transactions);
    });
  }, [user]);

  return (
    <>
      <Grid
        gridTemplateColumns={{
          sm: '100%',
          md: '100%',
          lg: gridAreaMd,
          xl: gridAreaLg,
        }}
        gridTemplateRows={{
          sm: '16% 90%',
          md: '16% 90%',
          lg: '100%',
          xl: '100%',
        }}
        w="100%"
        p="2rem"
        gap="1rem"
        transition="0.2s"
      >
        <GridItem
          onMouseEnter={() => {
            setGridAreaLg('25% 75%');
            setGridAreaMd('25% 75%');
          }}
          onMouseLeave={() => {
            setGridAreaLg('4% 96%');
            setGridAreaMd('6% 94%');
          }}
        >
          <LeftBar />
        </GridItem>
        <GridItem>
          <TransactionAmounts
            userId={user.id}
          />
          <Flex
            w="100%"
            justifyContent="flex-end"
            mt={{
              sm: '1rem',
              md: '1.2rem',
              lg: '1.4rem',
              xl: '2rem',
            }}
            flexDirection={['column', 'column', 'row', 'row']}
          >
            <Button
              fontSize={{
                sm: '1rem',
                md: '1.6rem',
              }}
              p={{
                sm: '0.6rem 1.2rem',
                md: '1rem 1.4rem',
                lg: '1.2rem 1.8rem',
                xl: '1.6rem 2rem',
              }}
              borderRadius="100px"
              leftIcon={<RiMoneyDollarCircleFill />}
              onClick={createTransactionModal.onOpen}
            >
              Adicionar Transação
            </Button>
          </Flex>
          <Flex width="100%" marginTop="1rem">
            <Box
              bg={colorMode === 'dark' ? 'dark.200' : 'green.150'}
              w="100%"
              h="62vh"
              borderRadius="20px 0 0 20px"
              p="1rem"
              mb="1rem"
              boxShadow="xl"
              display="flex"
              justifyContent={['center', 'center', 'flex-start', 'flex-start']}
              overflowY="scroll"
              sx={{
                scrollbarWidth: 'thin',
                scrollbarColor: colorMode === 'dark' ? 'light.100' : 'dark.100',
                '&::-webkit-scrollbar': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor:
                    colorMode === 'dark' ? 'dark.200' : 'green.150',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor:
                    colorMode === 'dark' ? 'light.100' : 'green.200',
                  borderRadius: '10px',
                  border:
                    '4px solid' + colorMode === 'dark'
                      ? 'dark.200'
                      : 'green.150',
                },
              }}
            >
              <Flex flexDirection="column" width="100%" gap="0.6rem">
                {transactions.map((transaction, index) => (
                  <TransactionCard
                    key={index}
                    id={transaction.id}
                    description={transaction.description}
                    amount={transaction.amount}
                    type={transaction.type}
                  />
                ))}
              </Flex>
            </Box>
          </Flex>
        </GridItem>
      </Grid>

      <Modal
        finalFocusRef={createTransactionModalRef}
        isOpen={createTransactionModal.isOpen}
        onClose={createTransactionModal.onClose}
        isCentered
      >
        <ModalOverlay ref={createTransactionModalRef} />
        <ModalContent>
          <ModalHeader>Criar Transação</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl
              mb={{
                sm: '0.4rem',
                md: '0.6rem',
                lg: '0.6rem',
                xl: '0.8rem',
              }}
            >
              <FormLabel
                color={colorMode === 'dark' ? 'light.200' : 'dark.200'}
                opacity="66%"
              >
                Descrição da transação:
              </FormLabel>
              <Input
                value={transactionDescription}
                onChange={(e) => setTransactionDescription(e.target.value)}
                type="text"
                variant="outline"
                focusBorderColor="green.300"
              />
            </FormControl>
            <FormControl
              mb={{
                sm: '0.4rem',
                md: '0.6rem',
                lg: '0.6rem',
                xl: '0.8rem',
              }}
            >
              <FormLabel
                color={colorMode === 'dark' ? 'light.200' : 'dark.200'}
                opacity="66%"
              >
                Valor da transação:
              </FormLabel>
              <Input
                value={transactionAmount}
                onChange={(e) => setTransactionAmount(e.target.value)}
                type="number"
                variant="outline"
                focusBorderColor="green.300"
              />
            </FormControl>
            <FormControl
              mb={{
                sm: '0.4rem',
                md: '0.6rem',
                lg: '0.6rem',
                xl: '0.8rem',
              }}
            >
              <FormLabel
                color={colorMode === 'dark' ? 'light.200' : 'dark.200'}
                opacity="66%"
              >
                Tipo da transação:
              </FormLabel>
              <Select
                placeholder="Selecione o Tipo..."
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
              >
                <option value="expense">Despesa</option>
                <option value="income">Entrada</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={createTransactionModal.onClose}
            >
              Cancelar
            </Button>
            <Button
              variant="solid"
              onClick={() => {
                window.location.reload();

                api.post('/transactions', {
                  description: transactionDescription,
                  amount: Number(transactionAmount),
                  type: transactionType,
                });
              }}
            >
              Criar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
