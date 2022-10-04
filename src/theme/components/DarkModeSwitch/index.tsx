import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <>
      <IconButton
        variant='ghost'
        aria-label='Change Theme'
        color='green.200'
        fontSize='24px'
        icon={isDark ? <SunIcon /> : <MoonIcon/>}
        onClick={toggleColorMode}
      />
    </>
  );
}