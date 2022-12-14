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
import { useAuth } from '../../hooks/useAuth';

export const LoginContent = () => {
  const { colorMode } = useColorMode();
  const toast = useToast();

  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();
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
    <>
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
            Seu E-mail
          </FormLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
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
            Sua Senha
          </FormLabel>
          <Input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            variant="outline"
            focusBorderColor="green.300"
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
            setIsLoading(true);

            signIn(email, pass);

            setTimeout(() => {
              setIsLoading(false);
            }, 1000);
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
          Não tem uma conta?
          <Link
            onClick={(e) => {
              e.preventDefault();
              router.push('/sign-up');
            }}
            color="green.200"
          >
            &nbsp;Cadastre-se
          </Link>
        </Text>
      </RegistrationContainer>
    </>
  );
};
