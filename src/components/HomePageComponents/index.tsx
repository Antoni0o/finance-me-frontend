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
import { NewsCard } from '../../theme/components/NewsCard';
import { TransactionAmounts } from '../../theme/components/TransactionAmounts';
import { useRouter } from 'next/router';

export const HomePageContent = () => {
  const { colorMode } = useColorMode();
  const [gridAreaLg, setGridAreaLg] = useState('8% 92%');
  const [gridAreaMd, setGridAreaMd] = useState('12% 88%');
  const router = useRouter();

  return (
    <Grid
      gridTemplateColumns={{
        sm: '100%',
        md: '100%',
        lg: gridAreaMd,
        xl: gridAreaLg,
      }}
      gridTemplateRows={{
        sm: '16% 90%',
        md: '16% 90%',
        lg: '100%',
        xl: '100%',
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
        <TransactionAmounts />
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
          <Button
            fontSize="1.6rem"
            p={{
              sm: '0.6rem 1.2rem',
              md: '1rem 1.4rem',
              lg: '1.2rem 1.8rem',
              xl: '1.6rem 2rem',
            }}
            borderRadius="100px"
            rightIcon={<BiRightArrowAlt />}
            onClick={() => {
              router.push('/management');
            }}
          >
            Gerenciar
          </Button>
        </Flex>
        <Flex flexDir="column" marginTop={['1rem', '0', '0', '0']}>
          <Heading>Notícias</Heading>
          <Box
            bg={colorMode === 'dark' ? 'dark.200' : 'green.150'}
            w="100%"
            borderRadius="20px"
            p="1rem"
            boxShadow="xl"
            display="flex"
            alignItems="center"
            justifyContent={{
              sm: 'center',
              md: 'center',
              lg: 'flex-start',
              xl: 'flex-start'
            }}
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
            justifyContent={['center', 'center', 'flex-end', 'flex-end']}
            mt={{
              sm: '1rem',
              md: '1.4rem',
              lg: '1.6rem',
              xl: '2rem',
            }}
          >
            <Button
              marginBottom={['1rem', '1rem', '0', '0']}
              fontSize="1.6rem"
              width={['100%', '100%', 'auto', 'auto']}
              p={{
                sm: '0.6rem 1.2rem',
                md: '1rem 1.4rem',
                lg: '1.2rem 1.8rem',
                xl: '1.6rem 2rem',
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
