import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: '20px',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4
    },
  },
  variants: {
    outline: ({colorMode}) => ({
      border: '2px solid',
      borderColor: 'green.200',
      color: colorMode === 'dark' ? 'light.200' : 'dark.200',
    }),
    solid: {
      bg: 'green.200',
      color: 'light.200',
      transition: '1s',
      _hover: {
        bg: 'green.300',
      }
    },
  },
};

export { Button };