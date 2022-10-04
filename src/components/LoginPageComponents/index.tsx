import { Button, Divider, Flex, FormControl, FormLabel, Heading, Input, Link, Text, useColorMode, useToast } from "@chakra-ui/react";
import { GrGoogle } from "react-icons/gr";
import Image from "next/image";
import Logo from '../../../public/logo.png';
import { RegistrationContainer } from "../../theme/components/registrationContainer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/useAuth";

export const LoginContent = () => {
  const { colorMode } = useColorMode();
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const { signIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const currentHour = new Date();
    console.log(currentHour.getHours());

    if(Number(currentHour.getHours()) <= 11 && Number(currentHour.getHours()) >= 6) {
      setMessage('Olá, Bom Dia!');
    } else if(Number(currentHour.getHours()) <= 18 && Number(currentHour.getHours()) >= 12) {
      setMessage('Olá, Boa Tarde!');
    } else if(Number(currentHour.getHours()) <= 23 && Number(currentHour.getHours()) >= 19) {
      setMessage('Olá, Boa Noite!');
    } else if(Number(currentHour.getHours()) <= 5 && Number(currentHour.getHours()) >= 0) {
      setMessage('Olá, Boa Noite!');
    }
  }, [])

  return (
    <RegistrationContainer>
      <Image src={Logo} width="64px" height="64px" />
      <Heading
        fontWeight="light"
        letterSpacing="-0.1rem"
        fontSize={{
          sm: "2rem",
          md: "2.2rem",
          lg: "2.4rem",
          xl: "3.2rem"
        }}
        my={{
          sm: "0.4rem",
          md: "0.4rem",
          lg: "0.6rem",
          xl: "1rem"
        }}
      >
        {message}
      </Heading>
      <FormControl
        mb={{
          sm: "0.4rem",
          md: "0.6rem",
          lg: "0.6rem",
          xl: "0.8rem"
        }}
      >
        <FormLabel
          color={colorMode === "dark" ? "light.200" : "dark.200"}
          opacity="66%"
        >
          Seu E-mail
        </FormLabel>
        <Input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          variant="outline"
          focusBorderColor="green.300"
        />
      </FormControl>
      <FormControl
        mb={{
          sm: "0.4rem",
          md: "0.6rem",
          lg: "0.6rem",
          xl: "0.8rem"
        }}
      >
        <FormLabel
          color={colorMode === "dark" ? "light.200" : "dark.200"}
          opacity="66%"
        >
          Sua Senha
        </FormLabel>
        <Input
          value={pass}
          onChange={e => setPass(e.target.value)}
          type="password"
          variant="outline"
          focusBorderColor="green.300"
        />
      </FormControl>
      <Text
        align='right'
        opacity="66%"
        mb={{
          sm: "0.4rem",
          md: "0.6rem",
          lg: "0.6rem",
          xl: "0.8rem"
        }}
      >
        Esqueceu A Senha?
        <Link
          onClick={(e) => {
            e.preventDefault();
            router.push('/esqueceu-a-senha');
          }}
          color="green.200"
        >
          &nbsp;Clique Aqui!
        </Link>
      </Text>

      <Button
        isLoading={isLoading}
        w="100%"
        h="3rem"
        mb={{
          sm: "0.4rem",
          md: "0.6rem",
          lg: "0.6rem",
          xl: "0.8rem"
        }}
        borderRadius="10px"
        fontSize="2xl"
        variant="solid"
        onClick={() => {
          setIsLoading(true);

          signIn(email, pass);
          
          setTimeout(() => {
            setIsLoading(false)
          }, 1000)
        }}
      >
        Entrar
      </Button>
      <Text
        align="center"
        opacity="66%"
        mb={{
          sm: "0.4rem",
          md: "0.6rem",
          lg: "0.6rem",
          xl: "0.6rem"
        }}
      >
        Não tem uma conta?
        <Link
          onClick={(e) => {
            e.preventDefault();
            router.push('/sign-in');
          }}
          color="green.200"
        >
          &nbsp;Cadastre-se
        </Link>
      </Text>
      <Flex
        gap="0.5rem"
        alignItems="center"
        mb="0.6rem"
      >
        <Divider
          color={colorMode === "dark" ? "light.200" : "dark.200"}
          opacity="66%"
        />
        <Text
          opacity="66%"
        >
          Ou
        </Text>
        <Divider
          color={colorMode === "dark" ? "light.200" : "dark.200"}
          opacity="66%"
        />
      </Flex>
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Link
          p="0.6rem"
          borderRadius="50px"
          border="1px solid"
          borderColor={colorMode === "dark" ? "light.200" : "dark.200"}
          opacity="50%"
          onClick={(e) => {
            e.preventDefault();
            router.push('/google-auth');
          }}
        >
          <GrGoogle
            color={colorMode === "dark" ? "light.200" : "dark.200"}
          />
        </Link>
      </Flex>
    </RegistrationContainer>
  );
}