import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  useColorMode,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { LeftBar } from '../../theme/components/LeftBar';
import { NewsCard } from './newsCard';
import { Transactions } from './transactions';


export const HomePageContent = () => {
  const { colorMode } = useColorMode();
  const [ gridArea, setGridArea ] = useState("10% 90%");

  return (
    <Grid gridTemplateColumns={gridArea} w="100%" transition="0.2s">
      <GridItem
        margin="2rem"
        onMouseEnter={() => {
          setGridArea("30% 70%");
        }}
        onMouseLeave={() => {
          setGridArea("10% 90%");
        }}
      >
        <LeftBar />
      </GridItem>
      <GridItem
        margin={{
          sm: "1rem",
          md: "1.2rem",
          lg: "1.4rem",
          xl: "2rem"
        }}
      >
        <Transactions />
        <Flex
          w="100%"
          justifyContent="flex-end"
          mt={{
            sm: "1rem",
            md: "1.2rem",
            lg: "1.4rem",
            xl: "2rem"
          }}
        >
          <Button
            fontSize="2rem"
            p={{
              sm: "0.6rem 1.2rem",
              md: "1rem 1.4rem",
              lg: "1.2rem 1.8rem",
              xl: "1.6rem 2rem"
            }}
            borderRadius="100px"
            rightIcon={<BiRightArrowAlt />}
          >
          Gerenciar
        </Button>
        </Flex>
        <Flex
          flexDir="column"
        >
          <Heading>Notícias</Heading>
          <Box 
            bg={colorMode === "dark" ? "dark.200" : "green.150"} 
            w="100%" 
            h={{
              sm: "7rem",
              md: "16rem",
              lg: "20rem",
              xl:"33rem"
            }}
            borderRadius="20px" 
            p="1rem"
            boxShadow="xl" 
            display="flex" 
            alignItems="center"
          >
           <NewsCard
            imageUrl="https://ichef.bbci.co.uk/news/800/cpsprodpb/1671E/production/_127243919_gettyimages-1130747337.jpg.webp"
            title="As 6 empresas mais endividadas do mundo..."
            subtitle="Um balanço saudável e contas equilibradas costumam ser o objetivo de qualquer ator econômico: um Estado, uma empresa ou até mesmo uma família."
            completeNoticeUrl="https://www.bbc.com/portuguese/internacional-63338807"
           />
          </Box>
          <Flex
          w="100%"
          justifyContent="flex-end"
          mt={{
            sm: "1rem",
            md: "1.4rem",
            lg: "1.6rem",
            xl: "2rem"
          }}
        >
          <Button
            fontSize="2rem"
            p={{
              sm: "0.6rem 1.2rem",
              md: "1rem 1.4rem",
              lg: "1.2rem 1.8rem",
              xl: "1.6rem 2rem"
            }}
            borderRadius="100px"
            rightIcon={<BiRightArrowAlt />}
          >
          Ver mais
        </Button>
        </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};
