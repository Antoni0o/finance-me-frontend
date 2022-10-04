import { Box, Container, Flex, Grid, Image, Img, useColorMode } from "@chakra-ui/react"
import { FC, ReactNode } from "react"
import RegistrationImgDark from "../../../../public/registration-image-dark.png";
import RegistrationImgLight from "../../../../public/registration-image-light.png";

type Props = {
  children: ReactNode
}

export const RegistrationContainer: FC<Props> = ({children}: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      bg={colorMode === "dark" ? "dark.200" : "green.100"}
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <Box
        w="90vw"
        h={{
          sm: "95vh",
          md: "90vh",
          lg: "85vh",
          xl: "85vh"
        }}
        pt={{
          sm: "0rem",
          md: "1rem",
          lg: "2rem",
          xl: "2rem"
        }}
        bg={colorMode === "dark" ? "dark.100" : "light.200"}
        color={colorMode === "dark" ? "light.200" : "dark.200"}
        borderRadius="20px"
      >
        <Grid
          h="100%"
          templateColumns={{
            sm: "100%",
            md: "100%",
            lg: "50% 50%",
            xl: "50% 50%"
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Container>
            {children}
          </Container>
          <Container
            display={{
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            }}
            justifyContent="center"
            alignItems="center"
          >
            {colorMode === "dark" ?
              <Img 
                display={{
                  sm: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                }}
                src="registration-image-dark.png"
              >
              </Img>
              :
              <Img 
                display={{
                  sm: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                }}
                src="registration-image-light.png"
              >
              </Img>
            }
          </Container>
        </Grid>
      </Box>
    </Flex>
  )
}