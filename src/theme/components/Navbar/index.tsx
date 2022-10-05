import { Button, Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { DarkModeSwitch } from '../DarkModeSwitch';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import Logo from '../../../../public/logo.png';
import { useState } from 'react';
import { useRouter } from 'next/router';

interface INavbarProps {
  color: string;
}

export const Navbar = ({ color }: INavbarProps) => {
  const { colorMode } = useColorMode();
  const [display, setDisplay] = useState('none');
  const router = useRouter();

  return (
    <>
      <Flex color={color} justifyContent="center">
        <Flex
          as='div'
          w="80%"
          my="1rem"
          mx="2rem"
          align="center"
          gap="1rem"
          justifyContent="space-between"
        >
          <Flex>
            <Image src={Logo} width="64px" height="64px" />
          </Flex>
          <Flex align="center" gap="1rem">
            <Flex gap="1rem" display={['none', 'none', 'flex', 'flex']}>
              <Button as="a" variant="ghost">
                Sobre
              </Button>
              <Button as="a" variant="ghost">
                Equipe
              </Button>
              <Button as="a" variant="ghost">
                Desenvolvimento
              </Button>
            </Flex>
            <IconButton
              variant="ghost"
              aria-label="Open Menu"
              fontSize="32px"
              color="green.200"
              icon={<HamburgerIcon />}
              display={['flex', 'flex', 'none', 'none']}
              onClick={() => setDisplay('flex')}
            />
            <DarkModeSwitch />
            <Flex gap="1rem" display={['none', 'none', 'flex', 'flex']}>
              <Button onClick={() => {
                router.push('/login');
              }}>Entre</Button>
              <Button onClick={() => {
                router.push('/sign-up');
              }}>Cadastre-se</Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          display={display}
          w="100vw"
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
          zIndex={20}
          bgColor={colorMode === 'dark' ? 'dark.100' : 'light.100'}
        >
          <Flex justify="flex-end">
            <IconButton
              variant="ghost"
              aria-label="Fechar Menu"
              mt={2}
              mr={2}
              fontSize="18px"
              icon={<CloseIcon />}
              onClick={() => setDisplay('none')}
            />
          </Flex>
          <Flex flexDir="column" align="center" gap="2rem">
            <Button as="a" variant="ghost">
              Sobre
            </Button>
            <Button as="a" variant="ghost">
              Equipe
            </Button>
            <Button as="a" variant="ghost">
              Desenvolvimento
            </Button>
            <Flex gap="1rem" flexDir="column">
              <Button onClick={() => {
                router.push('/login');
              }}>Entre</Button>
              <Button onClick={() => {
                router.push('/sign-up');
              }}>Cadastre-se</Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
