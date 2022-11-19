import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import Logo from '/public/logo.png';
import MenuButtonDark from '/public/menuButtonDark.png';
import MenuButtonLight from '/public/menuButtonLight.png';
import { AiOutlineHome } from 'react-icons/ai';
import { BiWallet, BiNews, BiExit } from 'react-icons/bi';
import { BsFillPersonFill, BsSunFill } from 'react-icons/bs';
import Image from 'next/image';
import { useAuth } from '../../../hooks/useAuth';
import { useState } from 'react';
import { LeftBarThemeSwitcher } from './leftBarThemeSwitcher';
import { IoMdMoon } from 'react-icons/io';
import { colors } from '../../config/colors';
import { CloseIcon } from '@chakra-ui/icons';

export const LeftBar = () => {
  const { colorMode } = useColorMode();
  const [isDesktopLeftBarOpen, setIsDesktopLeftBarOpen] = useState(false);
  const [isMobileLeftBarOpen, setIsMobileLeftBarOpen] = useState(false);
  const { signOut } = useAuth();

  return (
    <>
      <Flex 
        width='100%'
        display={['flex', 'flex', 'none', 'none']}
      >
        <Flex
          margin='1rem'
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          height="3rem"
        > 
          <Image
            src={Logo}
            width="48px"
            height="48px"
          ></Image>
          <Image
            src={colorMode === 'dark' ? MenuButtonLight : MenuButtonDark}
            onClick={() => {
              setIsMobileLeftBarOpen(true);
            }}
            width="40%"
            height="40%"
          ></Image>
        </ Flex >
        {isMobileLeftBarOpen && (
          <>
          <Flex
            flexDirection='column'
            zIndex='1'
            position='absolute'
            w='100vw'
            h='100vh'
            bg={colorMode === 'dark' ? 'dark.200' : 'light.200'}
          >
            <Flex justifyContent='flex-end'>
              <IconButton
                variant="ghost"
                aria-label="Fechar Menu"
                mt={2}
                mr={2}
                fontSize="18px"
                icon={<CloseIcon />}
                onClick={() => setIsMobileLeftBarOpen(false)}
              />
          </Flex>
            <Button
              justifyContent="left"
              alignItems="center"
              w="100%"
              h="20%"
              borderRadius="0"
              variant="ghost"
              fontSize={{
                sm: '1.4rem',
                md: '1.6rem',
                lg: '1.8rem',
                xl: '2.6rem',
              }}
              fontWeight="bold"
              _hover={{
                bg: 'green.200',
              }}
              leftIcon={<AiOutlineHome />}
            >
              Home
            </Button>
            <Button
              justifyContent="left"
              w="100%"
              h="20%"
              borderRadius="0"
              variant="ghost"
              fontSize={{
                sm: '1.4rem',
                md: '1.6rem',
                lg: '1.8rem',
                xl: '2.6rem',
              }}
              fontWeight="bold"
              _hover={{
                bg: 'green.200',
              }}
              leftIcon={<BiWallet />}
            >
              Gerenciamento
            </Button>
            <Button
              justifyContent="left"
              w="100%"
              h="20%"
              borderRadius="0"
              variant="ghost"
              fontSize={{
                sm: '1.4rem',
                md: '1.6rem',
                lg: '1.8rem',
                xl: '2.6rem',
              }}
              fontWeight="bold"
              _hover={{
                bg: 'green.200',
              }}
              leftIcon={<BiNews />}
            >
              Notícias
            </Button>
            <LeftBarThemeSwitcher />
            <Divider my="1rem" />
            <Button
              leftIcon={<BsFillPersonFill />}
              justifyContent="left"
              w="100%"
              h="20%"
              borderRadius="0"
              variant="ghost"
              fontSize={{
                sm: '1.4rem',
                md: '1.6rem',
                lg: '1.8rem',
                xl: '2.6rem',
              }}
              fontWeight="bold"
              _hover={{
                bg: 'green.200',
              }}
            >
              Editar Perfil
            </Button>
            <Button
              leftIcon={<BiExit />}
              justifyContent="left"
              w="100%"
              h="20%"
              borderRadius="0"
              variant="ghost"
              fontSize={{
                sm: '1.4rem',
                md: '1.6rem',
                lg: '1.8rem',
                xl: '2.6rem',
              }}
              fontWeight="bold"
              _hover={{
                bg: 'green.200',
              }}
              onClick={() => {
                signOut();
              }}
            >
              Sair
            </Button>
          </ Flex>
          </>
        )}
      </Flex>
      <Flex display={['none', 'none', 'flex', 'flex']} margin='2rem'>
        <Box
          bg={colorMode === 'dark' ? 'dark.200' : 'green.150'}
          w="100%"
          h="93vh"
          onMouseEnter={() => {
            setIsDesktopLeftBarOpen(true);
          }}
          onMouseLeave={() => {
            setIsDesktopLeftBarOpen(false);
          }}
          borderRadius="20px"
          boxShadow="xl"
          py="1rem"
        >
          <Flex w="100%" justifyContent="center">
            <Image src={Logo} width="48px" height="48px" />
          </Flex>
          <Flex w="100%" mt="4rem" flexDirection="column" transition="0.3s">
            {isDesktopLeftBarOpen === true ? (
              <>
                <Button
                  justifyContent="left"
                  alignItems="center"
                  w="100%"
                  h="20%"
                  borderRadius="0"
                  variant="ghost"
                  fontSize={{
                    sm: '1.4rem',
                    md: '1.6rem',
                    lg: '1.8rem',
                    xl: '2.6rem',
                  }}
                  fontWeight="bold"
                  _hover={{
                    bg: 'green.200',
                  }}
                  leftIcon={<AiOutlineHome />}
                >
                  Home
                </Button>
                <Button
                  justifyContent="left"
                  w="100%"
                  h="20%"
                  borderRadius="0"
                  variant="ghost"
                  fontSize={{
                    sm: '1.4rem',
                    md: '1.6rem',
                    lg: '1.8rem',
                    xl: '2.6rem',
                  }}
                  fontWeight="bold"
                  _hover={{
                    bg: 'green.200',
                  }}
                  leftIcon={<BiWallet />}
                >
                  Gerenciamento
                </Button>
                <Button
                  justifyContent="left"
                  w="100%"
                  h="20%"
                  borderRadius="0"
                  variant="ghost"
                  fontSize={{
                    sm: '1.4rem',
                    md: '1.6rem',
                    lg: '1.8rem',
                    xl: '2.6rem',
                  }}
                  fontWeight="bold"
                  _hover={{
                    bg: 'green.200',
                  }}
                  leftIcon={<BiNews />}
                >
                  Notícias
                </Button>
                <LeftBarThemeSwitcher />
                <Divider my="1rem" />
                <Button
                  leftIcon={<BsFillPersonFill />}
                  justifyContent="left"
                  w="100%"
                  h="20%"
                  borderRadius="0"
                  variant="ghost"
                  fontSize={{
                    sm: '1.4rem',
                    md: '1.6rem',
                    lg: '1.8rem',
                    xl: '2.6rem',
                  }}
                  fontWeight="bold"
                  _hover={{
                    bg: 'green.200',
                  }}
                >
                  Editar Perfil
                </Button>
                <Button
                  leftIcon={<BiExit />}
                  justifyContent="left"
                  w="100%"
                  h="20%"
                  borderRadius="0"
                  variant="ghost"
                  fontSize={{
                    sm: '1.4rem',
                    md: '1.6rem',
                    lg: '1.8rem',
                    xl: '2.6rem',
                  }}
                  fontWeight="bold"
                  _hover={{
                    bg: 'green.200',
                  }}
                  onClick={() => {
                    signOut();
                  }}
                >
                  Sair
                </Button>
              </>
            ) : (
              <Flex 
                justifyContent="center" 
                flexDirection="column"
                alignItems="center"
              >
                <IconButton
                  aria-label="Home"
                  fontSize={["1rem", "1rem", "1rem", "2rem"]}
                  variant="ghost"
                  color={colorMode === 'dark' ? 'light.200' : 'dark.200'}
                  icon={<AiOutlineHome />}
                ></IconButton>
                <IconButton
                  aria-label="Gerenciamento"
                  fontSize={["1rem", "1rem", "1rem", "2rem"]}
                  mt="1rem"
                  variant="ghost"
                  color={colorMode === 'dark' ? 'light.200' : 'dark.200'}
                  icon={<BiWallet />}
                ></IconButton>
                <IconButton
                  aria-label="Notícias"
                  fontSize={["1rem", "1rem", "1rem", "2rem"]}
                  mt="1rem"
                  mx={["0rem", "0rem", "0rem", "2rem"]}
                  variant="ghost"
                  color={colorMode === 'dark' ? 'light.200' : 'dark.200'}
                  icon={<BiNews />}
                ></IconButton>
                <IconButton
                  aria-label="Tema"
                  fontSize={["1rem", "1rem", "1rem", "2rem"]}
                  mt="1rem"
                  variant="ghost"
                  color={colorMode === 'dark' ? 'light.200' : 'dark.200'}
                  icon={colorMode === 'dark' ? <BsSunFill /> : <IoMdMoon />}
                ></IconButton>
                <Divider my="1rem" />
                <IconButton
                  aria-label="Editar Perfil"
                  fontSize={["1rem", "1rem", "1rem", "2rem"]}
                  mt="1rem"
                  mx={["0rem", "0rem", "0rem", "2rem"]}
                  variant="ghost"
                  color={colorMode === 'dark' ? 'light.200' : 'dark.200'}
                  icon={<BsFillPersonFill />}
                ></IconButton>
                <IconButton
                  aria-label="Sair"
                  fontSize={["1rem", "1rem", "1rem", "2rem"]}
                  mt="1rem"
                  variant="ghost"
                  color={colorMode === 'dark' ? 'light.200' : 'dark.200'}
                  icon={<BiExit />}
                ></IconButton>
              </ Flex>
            )}
          </Flex>
        </Box>
      </Flex>
    </>
  );
};
