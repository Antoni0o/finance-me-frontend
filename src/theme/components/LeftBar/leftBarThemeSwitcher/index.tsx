import { Button, useColorMode } from '@chakra-ui/react';
import { BsSunFill } from 'react-icons/bs';
import { IoMdMoon } from 'react-icons/io';

export const LeftBarThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      {colorMode === 'dark' ? (
        <Button
          justifyContent="left"
          w="100%"
          h="20%"
          borderRadius="0"
          variant="ghost"
          fontSize={{
            sm: "1.4rem",
            md: "1.6rem",
            lg: "1.8rem",
            xl: "2.6rem"
          }}
          fontWeight="bold"
          _hover={{
            bg: 'green.200',
          }}
          leftIcon={<BsSunFill />}
          onClick={(e) => {
            e.preventDefault();

            toggleColorMode();
          }}
        >
          Modo Claro
        </Button>
      ) : (
        <Button
          justifyContent="left"
          w="100%"
          h="20%"
          borderRadius="0"
          variant="ghost"
          fontSize={{
            sm: "1.4rem",
            md: "1.6rem",
            lg: "1.8rem",
            xl: "2.6rem"
          }}
          fontWeight="bold"
          _hover={{
            bg: 'green.200',
          }}
          leftIcon={<IoMdMoon />}
          onClick={(e) => {
            e.preventDefault();

            toggleColorMode();
          }}
        >
          Modo Noturno
        </Button>
      )}
    </>
  );
};
