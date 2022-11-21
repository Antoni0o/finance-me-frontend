import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  useColorMode,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { LeftBar } from '../../theme/components/LeftBar';
import { NewsCard } from '../../theme/components/NewsCard';

export const NewsPageContent = () => {
  const { colorMode } = useColorMode();
  const [gridAreaLg, setGridAreaLg] = useState('8% 92%');
  const [gridAreaMd, setGridAreaMd] = useState('12% 88%');

  return (
    <Grid
      gridTemplateColumns={{
        sm: '100%',
        md: '100%',
        lg: gridAreaMd,
        xl: gridAreaLg
      }}
      gridTemplateRows={{
        sm: '10% 90%',
        md: '10% 90%',
        lg: '100%',
        xl: '100%'
      }}
      w="100%"
      transition="0.2s"
    >
      <GridItem
        onMouseEnter={() => {
          setGridAreaLg('30% 70%');
          setGridAreaMd('30% 70%');
        }}
        onMouseLeave={() => {
          setGridAreaLg('8% 92%');
          setGridAreaMd('12% 88%');
        }}
      >
        <LeftBar />
      </GridItem>
      <GridItem
        margin={{
          sm: '1rem',
          md: '1.2rem',
          lg: '1.4rem',
          xl: '2rem',
        }}
      >
        <Flex
          w="100%"
          justifyContent="flex-end"
          mt={{
            sm: '1rem',
            md: '1.2rem',
            lg: '1.4rem',
            xl: '2rem',
          }}
          flexDirection={['column', 'column', 'row', 'row']}
        >
          <Heading>Notícias Sobre Economia</Heading>
        </Flex>
        <Flex width="100%" marginTop="1rem" justifyContent='flex-end'>
          <Box
            bg={colorMode === 'dark' ? 'dark.200' : 'green.150'}
            w={{
              sm: '100%',
              md: '90%',
              lg: '90%',
              xl: '90%',
            }}
            h="82vh"
            borderRadius="20px 0 0 20px"
            p="1rem"
            mb="1rem"
            boxShadow="xl"
            overflowY="scroll"
            overflowX="hidden"
            sx={{
              scrollbarWidth: 'thin',
              scrollbarColor: colorMode === 'dark' ? 'light.100' : 'dark.100',
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor:
                  colorMode === 'dark' ? 'dark.200' : 'green.150',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor:
                  colorMode === 'dark' ? 'light.100' : 'green.200',
                borderRadius: '10px',
                border:
                  '4px solid' + colorMode === 'dark' ? 'dark.200' : 'green.150',
              },
            }}
          >
              <Grid 
              w={{
                sm: "100%",
                md: "100%",
                lg: "80%", 
                xl: "100%",
                'xl2': "100%"
              }}
              gridTemplateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(3, 1fr)", 
                xl: "repeat(3, 1fr)",
                'xl2': "repeat(4, 1fr)"
                }} 
                gap={{
                  sm: '30% 1rem',
                  md: '30% 1rem',
                  lg: '10rem 1rem',
                  xl: '20rem 1rem',
                }}>
                <GridItem w="100%" h="10rem">
                  <NewsCard
                    imageUrl="https://ichef.bbci.co.uk/news/800/cpsprodpb/1671E/production/_127243919_gettyimages-1130747337.jpg.webp"
                    title="As 6 empresas mais endividadas do mundo..."
                    subtitle="Um balanço saudável e contas equilibradas costumam ser o objetivo de qualquer ator econômico: um Estado, uma empresa ou até mesmo uma família."
                    completeNoticeUrl="https://www.bbc.com/portuguese/internacional-63338807"
                  />
                </GridItem>
                <GridItem w="100%" h="10rem">
                  <NewsCard
                    imageUrl="https://ichef.bbci.co.uk/news/800/cpsprodpb/1671E/production/_127243919_gettyimages-1130747337.jpg.webp"
                    title="As 6 empresas mais endividadas do mundo..."
                    subtitle="Um balanço saudável e contas equilibradas costumam ser o objetivo de qualquer ator econômico: um Estado, uma empresa ou até mesmo uma família."
                    completeNoticeUrl="https://www.bbc.com/portuguese/internacional-63338807"
                  />
                </GridItem>
                <GridItem w="100%" h="10rem">
                  <NewsCard
                    imageUrl="https://ichef.bbci.co.uk/news/800/cpsprodpb/1671E/production/_127243919_gettyimages-1130747337.jpg.webp"
                    title="As 6 empresas mais endividadas do mundo..."
                    subtitle="Um balanço saudável e contas equilibradas costumam ser o objetivo de qualquer ator econômico: um Estado, uma empresa ou até mesmo uma família."
                    completeNoticeUrl="https://www.bbc.com/portuguese/internacional-63338807"
                  />
                </GridItem>
                <GridItem w="100%" h="10rem">
                  <NewsCard
                    imageUrl="https://ichef.bbci.co.uk/news/800/cpsprodpb/1671E/production/_127243919_gettyimages-1130747337.jpg.webp"
                    title="As 6 empresas mais endividadas do mundo..."
                    subtitle="Um balanço saudável e contas equilibradas costumam ser o objetivo de qualquer ator econômico: um Estado, uma empresa ou até mesmo uma família."
                    completeNoticeUrl="https://www.bbc.com/portuguese/internacional-63338807"
                  />
                </GridItem>
                <GridItem w="100%" h="10rem">
                  <NewsCard
                    imageUrl="https://ichef.bbci.co.uk/news/800/cpsprodpb/1671E/production/_127243919_gettyimages-1130747337.jpg.webp"
                    title="As 6 empresas mais endividadas do mundo..."
                    subtitle="Um balanço saudável e contas equilibradas costumam ser o objetivo de qualquer ator econômico: um Estado, uma empresa ou até mesmo uma família."
                    completeNoticeUrl="https://www.bbc.com/portuguese/internacional-63338807"
                  />
                </GridItem>
                <GridItem w="100%" h="10rem">
                  <NewsCard
                    imageUrl="https://ichef.bbci.co.uk/news/800/cpsprodpb/1671E/production/_127243919_gettyimages-1130747337.jpg.webp"
                    title="As 6 empresas mais endividadas do mundo..."
                    subtitle="Um balanço saudável e contas equilibradas costumam ser o objetivo de qualquer ator econômico: um Estado, uma empresa ou até mesmo uma família."
                    completeNoticeUrl="https://www.bbc.com/portuguese/internacional-63338807"
                  />
                </GridItem>
                <GridItem w="100%" h="10rem">
                  <NewsCard
                    imageUrl="https://ichef.bbci.co.uk/news/800/cpsprodpb/1671E/production/_127243919_gettyimages-1130747337.jpg.webp"
                    title="As 6 empresas mais endividadas do mundo..."
                    subtitle="Um balanço saudável e contas equilibradas costumam ser o objetivo de qualquer ator econômico: um Estado, uma empresa ou até mesmo uma família."
                    completeNoticeUrl="https://www.bbc.com/portuguese/internacional-63338807"
                  />
                </GridItem>
                <GridItem w="100%" h="10rem">
                  <NewsCard
                    imageUrl="https://ichef.bbci.co.uk/news/800/cpsprodpb/1671E/production/_127243919_gettyimages-1130747337.jpg.webp"
                    title="As 6 empresas mais endividadas do mundo..."
                    subtitle="Um balanço saudável e contas equilibradas costumam ser o objetivo de qualquer ator econômico: um Estado, uma empresa ou até mesmo uma família."
                    completeNoticeUrl="https://www.bbc.com/portuguese/internacional-63338807"
                  />
                </GridItem>
                <GridItem w="100%" h="10rem">
                  <NewsCard
                    imageUrl="https://ichef.bbci.co.uk/news/800/cpsprodpb/1671E/production/_127243919_gettyimages-1130747337.jpg.webp"
                    title="As 6 empresas mais endividadas do mundo..."
                    subtitle="Um balanço saudável e contas equilibradas costumam ser o objetivo de qualquer ator econômico: um Estado, uma empresa ou até mesmo uma família."
                    completeNoticeUrl="https://www.bbc.com/portuguese/internacional-63338807"
                  />
                </GridItem>
                <GridItem w="100%" h="10rem">
                  <NewsCard
                    imageUrl="https://ichef.bbci.co.uk/news/800/cpsprodpb/1671E/production/_127243919_gettyimages-1130747337.jpg.webp"
                    title="As 6 empresas mais endividadas do mundo..."
                    subtitle="Um balanço saudável e contas equilibradas costumam ser o objetivo de qualquer ator econômico: um Estado, uma empresa ou até mesmo uma família."
                    completeNoticeUrl="https://www.bbc.com/portuguese/internacional-63338807"
                  />
                </GridItem>
                <GridItem w="100%" h="10rem">
                  <NewsCard
                    imageUrl="https://ichef.bbci.co.uk/news/800/cpsprodpb/1671E/production/_127243919_gettyimages-1130747337.jpg.webp"
                    title="As 6 empresas mais endividadas do mundo..."
                    subtitle="Um balanço saudável e contas equilibradas costumam ser o objetivo de qualquer ator econômico: um Estado, uma empresa ou até mesmo uma família."
                    completeNoticeUrl="https://www.bbc.com/portuguese/internacional-63338807"
                  />
                </GridItem>
                <GridItem w="100%" h="10rem">
                  <NewsCard
                    imageUrl="https://ichef.bbci.co.uk/news/800/cpsprodpb/1671E/production/_127243919_gettyimages-1130747337.jpg.webp"
                    title="As 6 empresas mais endividadas do mundo..."
                    subtitle="Um balanço saudável e contas equilibradas costumam ser o objetivo de qualquer ator econômico: um Estado, uma empresa ou até mesmo uma família."
                    completeNoticeUrl="https://www.bbc.com/portuguese/internacional-63338807"
                  />
                </GridItem>
                <GridItem w="100%" h="10rem">
                  <NewsCard
                    imageUrl="https://ichef.bbci.co.uk/news/800/cpsprodpb/1671E/production/_127243919_gettyimages-1130747337.jpg.webp"
                    title="As 6 empresas mais endividadas do mundo..."
                    subtitle="Um balanço saudável e contas equilibradas costumam ser o objetivo de qualquer ator econômico: um Estado, uma empresa ou até mesmo uma família."
                    completeNoticeUrl="https://www.bbc.com/portuguese/internacional-63338807"
                  />
                </GridItem>
              </Grid>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};
