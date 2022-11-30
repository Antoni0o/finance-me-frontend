import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  useColorMode,
  useToast,
} from '@chakra-ui/react';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import { RegistrationContainer } from '../../theme/components/registrationContainer';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { api } from '../../api';

type AppError = {
  statusCode: number;
  message: Array<string>;
  error: string;
};

export const SignUpContent = () => {
  const { colorMode } = useColorMode();
  const toast = useToast();
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [pass, setPass] = useState('');
  const [isPassInvalid, setIsPassInvalid] = useState(false);
  const [confirmPass, setConfirmPass] = useState('');
  const [isConfirmPassInvalid, setIsConfirmPassInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const currentHour = new Date();

    if (
      Number(currentHour.getHours()) <= 11 &&
      Number(currentHour.getHours()) >= 6
    ) {
      setMessage('Olá, Bom Dia!');
    } else if (
      Number(currentHour.getHours()) <= 18 &&
      Number(currentHour.getHours()) >= 12
    ) {
      setMessage('Olá, Boa Tarde!');
    } else if (
      Number(currentHour.getHours()) <= 23 &&
      Number(currentHour.getHours()) >= 19
    ) {
      setMessage('Olá, Boa Noite!');
    } else if (
      Number(currentHour.getHours()) <= 5 &&
      Number(currentHour.getHours()) >= 0
    ) {
      setMessage('Olá, Boa Noite!');
    }
  }, []);

  return (
    <RegistrationContainer>
      <Flex cursor="pointer">
        <Image
          src={Logo}
          width="64px"
          height="64px"
          onClick={() => {
            router.push('/');
          }}
        />
      </Flex>
      <Heading
        fontWeight="light"
        letterSpacing="-0.1rem"
        fontSize={{
          sm: '2rem',
          md: '2.2rem',
          lg: '2.4rem',
          xl: '3.2rem',
        }}
        my={{
          sm: '0.4rem',
          md: '0.4rem',
          lg: '0.6rem',
          xl: '1rem',
        }}
      >
        {message}
      </Heading>
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
          Seu Nome
        </FormLabel>
        <Input
          isInvalid={isNameInvalid}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          variant="outline"
          focusBorderColor="green.300"
          errorBorderColor="red.100"
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
          Seu E-mail
        </FormLabel>
        <Input
          isInvalid={isEmailInvalid}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          variant="outline"
          focusBorderColor="green.300"
          errorBorderColor="red.100"
        />
      </FormControl>
      <FormControl
        mb={{
          sm: '0.4rem',
          md: '0.6rem',
          lg: '0.6rem',
          xl: '0.8rem',
        }}
        display="flex"
        flexDirection={{
          sm: 'column',
          md: 'column',
          lg: 'row',
        }}
        justifyContent="space-between"
      >
        <Flex flexDirection="column">
          <FormLabel
            color={colorMode === 'dark' ? 'light.200' : 'dark.200'}
            opacity="66%"
          >
            Sua Senha
          </FormLabel>
          <Input
            isInvalid={isPassInvalid}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            variant="outline"
            focusBorderColor="green.300"
            errorBorderColor="red.100"
          />
        </Flex>
        <Flex flexDirection="column">
          <FormLabel
            color={colorMode === 'dark' ? 'light.200' : 'dark.200'}
            opacity="66%"
          >
            Confirme Sua Senha
          </FormLabel>
          <Input
            isInvalid={isConfirmPassInvalid}
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            type="password"
            variant="outline"
            focusBorderColor="green.300"
            errorBorderColor="red.100"
          />
        </Flex>
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
          setIsNameInvalid(false);
          setIsEmailInvalid(false);
          setIsPassInvalid(false);
          setIsLoading(true);

          if (confirmPass != pass) {
            setIsConfirmPassInvalid(true);

            toast({
              title: 'Não foi possível criar o usuário',
              description: 'As senhas são diferentes!',
              status: 'error',
              position: 'top-right',
              isClosable: true,
            });

            setTimeout(() => {
              setIsLoading(false);
            }, 1000);
          } else {
            api
              .post('/users', {
                name,
                email,
                password: pass,
              })
              .then(() => {
                toast({
                  title: 'Usuário criado com sucesso!',
                  status: 'success',
                  position: 'top-right',
                  isClosable: true,
                });
                setTimeout(() => {
                  router.push('/login');
                }, 2000);
              })
              .catch((e) => {
                setTimeout(() => {
                  setIsLoading(false);
                }, 1000);

                if (e.response.data.message instanceof Array<string>) {
                  e.response.data.message.map((error: string) => {
                    if (error.includes('name')) {
                      setIsNameInvalid(true);
                    }

                    if (error.includes('email')) {
                      setIsEmailInvalid(true);
                    }

                    if (error.includes('password')) {
                      setIsPassInvalid(true);
                    }
                  });
                }

                if (!Array.isArray(e.response.data.message)) {
                  toast({
                    title: 'Não foi possível criar o usuário',
                    description: 'Este e-mail já está sendo usado!',
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
                    description: 'Verifique as informações e tente novamente',
                    status: 'error',
                    position: 'top-right',
                    isClosable: true,
                  });
                }

                if (e.response.status === 500) {
                  toast({
                    title:
                      'Não foi possível criar o usuário, problema no servidor',
                    description:
                      'Pedimos desculpas pelo ocorrido, tente novamente mais tarde!',
                    status: 'error',
                    position: 'top-right',
                    isClosable: true,
                  });
                }
              });
          }
        }}
      >
        Entrar
      </Button>
      <Text
        align="center"
        opacity="66%"
        mb={{
          sm: '0.4rem',
          md: '0.6rem',
          lg: '0.6rem',
          xl: '0.6rem',
        }}
      >
        Já tem uma conta?
        <Link
          onClick={(e) => {
            e.preventDefault();
            router.push('/login');
          }}
          color="green.200"
        >
          &nbsp;Entre
        </Link>
      </Text>
    </RegistrationContainer>
  );
};
