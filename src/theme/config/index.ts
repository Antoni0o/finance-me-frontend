import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { fonts } from "./fonts";
import { styles } from "./styles";
import { components } from "./components";
import { breakpoints } from "./breakpoints";

const overrides = {
  colors,
  styles,
  fonts,
  breakpoints,
  components
}

const theme = extendTheme(overrides)

export default theme;