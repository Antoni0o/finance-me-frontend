import { Button, Center, Input, ModalBody, ModalCloseButton, ModalContent, ModalHeader, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

export const ForgotPasswordModalContent = () => {
  const { colorMode } = useColorMode();
  const [email, setEmail] = useState('');

  return (
    <ModalContent
      h={{
        sm: '40vh',
        md: '30vh',
        lg: '30vh',
        xl: '30vh'
      }}
      w={{
        sm: '90vh',
        md: '50vh',
        lg: '50vh',
        xl: '50vh'
      }}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      bg={colorMode === 'dark' ? 'dark.100' : 'light.200'}
      color={colorMode === "dark" ? "light.200" : "dark.200"}
    >
      <ModalCloseButton
        _focus={{
          boxShadow: colorMode === 'dark' ? 'light.200' : 'dark.100'
        }}
      />
      <ModalHeader
        fontSize='2.6rem'
      >
        Esqueceu a senha?
      </ModalHeader>

      <Center>
        <ModalBody
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Input
            placeholder='Seu E-mail'
            w='100%'
            mb='1rem'
            focusBorderColor="green.300"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Button
            type='submit'
            variant="solid"
            w='100%'
            borderRadius='10px'
          >
            Enviar
          </Button>
        </ModalBody>
      </Center>
    </ModalContent>
  );
}