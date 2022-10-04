import { ComponentStyleConfig } from "@chakra-ui/react";

const Input: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '20px'
  },
  sizes: {
    sm: {
      px: 2,
      py: 2
    },
    md: {
      px: 4,
      py: 4
    },
    variants: {
      outline: ({colorMode}) => ({
        border: '4px solid',
        borderColor: 'dark.200',
        opacity: '66%',
      }),
    },
  }
}