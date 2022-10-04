import { mode } from "@chakra-ui/theme-tools";

import { IGlobalStyleProps } from "../types/IGlobalStyleProps";

const styles = {
  global: (props: IGlobalStyleProps) => ({
    body: {
      color: mode('dark.200', 'light.200')(props),
      bg: mode('light.200', 'dark.200')(props),
    },
  }),
};

export { styles };