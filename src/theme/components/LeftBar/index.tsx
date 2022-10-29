import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import Logo from '/public/logo.png';
import { AiOutlineHome } from 'react-icons/ai';
import { BiWallet, BiNews, BiExit } from 'react-icons/bi';
import { IoMdMoon } from 'react-icons/io';
import { BsFillPersonFill, BsSunFill } from 'react-icons/bs';
import Image from 'next/image';
import { useAuth } from '../../../hooks/useAuth';
import { useState } from 'react';

export const LeftBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const  [isOpen, setIsOpen] = useState(false);
  const { signOut } = useAuth();

  return (
    <Box
      bg={colorMode === 'dark' ? 'dark.200' : 'green.150'}
      w="100%"
      h="93vh"
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
      borderRadius="20px"
      boxShadow="xl"
      py="1rem"
    >
      <Flex w="100%" justifyContent="center">
        <Image src={Logo} width="96px" height="96px" />
      </Flex>
      <Flex w="100%" mt="4rem" flexDirection="column">
        {isOpen === true ? (
            <>
            <Button
            justifyContent="left"
            w="100%"
            h="20%"
            borderRadius="0"
            variant="ghost"
            fontSize="2.6rem"
            fontWeight="bold"
            _hover={{
              bg: 'green.200',
            }}
            leftIcon={<AiOutlineHome />}
          >
            Home
          </Button><Button
            justifyContent="left"
            w="100%"
            h="20%"
            borderRadius="0"
            variant="ghost"
            fontSize="2.6rem"
            fontWeight="bold"
            _hover={{
              bg: 'green.200',
            }}
            leftIcon={<BiWallet />}
          >
              Gerenciamento
            </Button><Button
              justifyContent="left"
              w="100%"
              h="20%"
              borderRadius="0"
              variant="ghost"
              fontSize="2.6rem"
              fontWeight="bold"
              _hover={{
                bg: 'green.200',
              }}
              leftIcon={<BiNews />}
            >
              Notícias
            </Button><Divider
              my="1rem" /><Button
                leftIcon={<BsFillPersonFill />}
                justifyContent="left"
                w="100%"
                h="20%"
                borderRadius="0"
                variant="ghost"
                fontSize="2.6rem"
                fontWeight="bold"
                _hover={{
                  bg: 'green.200',
                }}
              >
              Editar Perfil
            </Button><Button
              leftIcon={<BiExit />}
              justifyContent="left"
              w="100%"
              h="20%"
              borderRadius="0"
              variant="ghost"
              fontSize="2.6rem"
              fontWeight="bold"
              _hover={{
                bg: 'green.200',
              }}
              onClick={() => {
                signOut();
              } }
            >
              Sair
            </Button>
            </>
        ) : (
          <IconButton
            aria-label='Home'
            variant="ghost"
            color={colorMode === "dark" ? "light.200" : "dark.200"}
            icon={<AiOutlineHome />}
          ></IconButton>
        )
        }
      </Flex>
    </Box>
  );
};
