import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
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
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { api } from '../../api';
import { LeftBar } from '../../theme/components/LeftBar';

export const EditProfilePageContent = () => {
  const { colorMode } = useColorMode();
  const [gridAreaLg, setGridAreaLg] = useState('8% 92%');
  const [gridAreaMd, setGridAreaMd] = useState('12% 88%');
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [confirmOldPassword, setConfirmOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();
  const deleteUserModal = useDisclosure();
  const updatePassModal = useDisclosure();
  const [email, setEmail] = useState('');
  const updatePassRef = useRef();
  const deleteUserRef = useRef();

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
          sm: '10% 90%',
          md: '10% 90%',
          lg: '100%',
          xl: '100%',
        }}
        w="100%"
        transition="0.2s"
      >
        <GridItem
          onMouseEnter={() => {
            setGridAreaLg('30% 70%');
            setGridAreaMd('30% 70%');
          }}
          onMouseLeave={() => {
            setGridAreaLg('8% 92%');
            setGridAreaMd('12% 88%');
          }}
        >
          <LeftBar />
        </GridItem>
        <GridItem
          margin={{
            sm: '1rem',
            md: '1.2rem',
            lg: '1.4rem',
            xl: '2rem',
          }}
        >
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
            <Heading>Editar Perfil</Heading>
          </Flex>
          <Flex width="100%" marginTop="1rem" justifyContent="flex-end">
            <Box
              bg={colorMode === 'dark' ? 'dark.200' : 'green.150'}
              w={{
                sm: '100%',
                md: '90%',
                lg: '90%',
                xl: '90%',
              }}
              h="82vh"
              borderRadius="20px 0 0 20px"
              p="1rem"
              mb="1rem"
              boxShadow="xl"
              overflowY="scroll"
              overflowX="hidden"
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
                  opacity="80%"
                >
                  E-mail atual:
                </FormLabel>
                <Input
                  bg={colorMode === 'dark' ? 'dark.100' : 'white.100'}
                  value="email@email.com"
                  type="email"
                  variant="outline"
                  focusBorderColor="green.300"
                  disabled
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
                <Divider borderColor="dark.100" opacity="66%" my="0.4rem" />

                <FormLabel
                  color={colorMode === 'dark' ? 'light.200' : 'dark.200'}
                  opacity="80%"
                >
                  Novo E-mail:
                </FormLabel>
                <Input
                  bg={colorMode === 'dark' ? 'dark.100' : 'white.100'}
                  isInvalid={isEmailInvalid}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  variant="outline"
                  focusBorderColor="green.300"
                  errorBorderColor="red.100"
                />
              </FormControl>

              <Button
                isLoading={isLoading}
                w="100%"
                h="3rem"
                mb={{
                  sm: '0.4rem',
                  md: '0.6rem',
                  lg: '0.6rem',
                  xl: '0.8rem',
                }}
                borderRadius="10px"
                fontSize="2xl"
                variant="solid"
                onClick={() => {
                  setIsEmailInvalid(false);
                  setIsLoading(true);

                  api
                    .patch('/users', {
                      email,
                    })
                    .then(() => {
                      toast({
                        title: 'E-mail alterado com sucesso!',
                        status: 'success',
                        position: 'top-right',
                        isClosable: true,
                      });
                    })
                    .catch((e) => {
                      setTimeout(() => {
                        setIsLoading(false);
                      }, 1000);

                      if (e.response.data.message instanceof Array<string>) {
                        e.response.data.message.map((error: string) => {
                          if (error.includes('email')) {
                            setIsEmailInvalid(true);
                          }
                        });
                      }

                      if (!Array.isArray(e.response.data.message)) {
                        toast({
                          title: 'Não foi Editar o E-mail',
                          description: 'Este E-mail já está sendo usado!',
                          status: 'error',
                          position: 'top-right',
                          isClosable: true,
                        });
                      }

                      if (
                        Array.isArray(e.response.data.message) &&
                        e.response.status === 400
                      ) {
                        toast({
                          title: 'Não foi possível criar o usuário',
                          description:
                            'Verifique as informações e tente novamente',
                          status: 'error',
                          position: 'top-right',
                          isClosable: true,
                        });
                      }
                    });
                }}
              >
                Alterar E-mail
              </Button>
              <Flex gap="0.5rem" alignItems="center" mb="0.6rem">
                <Divider borderColor="dark.100" opacity="66%" />
                <Text opacity="66%">Ou</Text>
                <Divider borderColor="dark.100" opacity="66%" />
              </Flex>
              <Button
                w="100%"
                h="3rem"
                mb={{
                  sm: '0.4rem',
                  md: '0.6rem',
                  lg: '0.6rem',
                  xl: '0.8rem',
                }}
                borderRadius="10px"
                fontSize="2xl"
                variant="solid"
                onClick={updatePassModal.onOpen}
              >
                Alterar Senha
              </Button>
              <Flex gap="0.5rem" alignItems="center" mb="0.6rem">
                <Divider borderColor="dark.100" opacity="66%" />
                <Text opacity="66%">Ou</Text>
                <Divider borderColor="dark.100" opacity="66%" />
              </Flex>
              <Button
                w="100%"
                h="3rem"
                mb={{
                  sm: '0.4rem',
                  md: '0.6rem',
                  lg: '0.6rem',
                  xl: '0.8rem',
                }}
                borderRadius="10px"
                fontSize="2xl"
                variant="solid"
                bg="red.100"
                onClick={deleteUserModal.onOpen}
              >
                Deletar Conta
              </Button>
            </Box>
          </Flex>
        </GridItem>
      </Grid>

      <Modal
        finalFocusRef={deleteUserRef}
        isOpen={deleteUserModal.isOpen}
        onClose={deleteUserModal.onClose}
        isCentered
      >
        <ModalOverlay ref={deleteUserRef} />
        <ModalContent>
          <ModalHeader>Deletar Usuário</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Tem certeza que deseja deletar o usuário?</Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" mr={3} onClick={deleteUserModal.onClose}>
              Cancelar
            </Button>
            <Button
              variant="solid"
              bg="red.100"
              _hover={{
                opacity: '88%',
                bg: 'red.100',
              }}
            >
              Sim, Deletar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        finalFocusRef={updatePassRef}
        isOpen={updatePassModal.isOpen}
        onClose={updatePassModal.onClose}
        isCentered
      >
        <ModalOverlay ref={updatePassRef} />
        <ModalContent>
          <ModalHeader>Alterar Senha</ModalHeader>
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
                mt="1rem"
                color={colorMode === 'dark' ? 'light.200' : 'dark.200'}
                opacity="80%"
              >
                Senha Antiga:
              </FormLabel>
              <Input
                bg={colorMode === 'dark' ? 'dark.100' : 'white.100'}
                isInvalid={isPasswordInvalid}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                type="password"
                variant="outline"
                focusBorderColor="green.300"
                errorBorderColor="red.100"
              />
              <FormLabel
                mt="1rem"
                color={colorMode === 'dark' ? 'light.200' : 'dark.200'}
                opacity="80%"
              >
                Repita a Senha Antiga:
              </FormLabel>
              <Input
                bg={colorMode === 'dark' ? 'dark.100' : 'white.100'}
                isInvalid={isPasswordInvalid}
                value={confirmOldPassword}
                onChange={(e) => setConfirmOldPassword(e.target.value)}
                type="password"
                variant="outline"
                focusBorderColor="green.300"
                errorBorderColor="red.100"
              />
              <FormLabel
                mt="1rem"
                color={colorMode === 'dark' ? 'light.200' : 'dark.200'}
                opacity="80%"
              >
                Nova Senha:
              </FormLabel>
              <Input
                bg={colorMode === 'dark' ? 'dark.100' : 'white.100'}
                isInvalid={isPasswordInvalid}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                type="password"
                variant="outline"
                focusBorderColor="green.300"
                errorBorderColor="red.100"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" mr={3} onClick={updatePassModal.onClose}>
              Cancelar
            </Button>
            <Button
              variant="solid"
            >
              Alterar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
