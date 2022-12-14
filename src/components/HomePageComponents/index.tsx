import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  useColorMode,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { LeftBar } from '../../theme/components/LeftBar';
import { NewsCard } from '../../theme/components/NewsCard';
import { TransactionAmounts } from '../../theme/components/TransactionAmounts';
import { useRouter } from 'next/router';
import { api } from '../../api';
import { useAuth } from '../../hooks/useAuth';
import axios from 'axios';


interface IUserResponse {
  id: string;
  email: string;
}

interface IPageProps {
  userId: string;
}

export const HomePageContent = ({userId}: IPageProps) => {
  const { colorMode } = useColorMode();
  const [gridAreaLg, setGridAreaLg] = useState('4% 96%');
  const [gridAreaMd, setGridAreaMd] = useState('6% 94%');
  const [news, setNews] = useState([]);
  const router = useRouter();
  const {user} = useAuth();

  useEffect(() => {
    axios.get('https://finance-me-frontend.vercel.app/api/news').then((res) => {
      setNews(res.data.news);
    })
  }, [])

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
      p={{
        sm: '0',
        md: '0',
        lg: '2rem'
      }}
      gap="1rem"
      transition="0.2s"
      justifyContent='center'
    >
      <GridItem
        onMouseEnter={() => {
          setGridAreaLg('25% 75%');
          setGridAreaMd('25% 75%');
        }}
        onMouseLeave={() => {
          setGridAreaLg('4% 96%');
          setGridAreaMd('6% 94%');
        }}
      >
        <LeftBar />
      </GridItem>
      <GridItem m={{sm: "2rem", lg: "0"}}>
        <TransactionAmounts
          userId={user.id}
        />
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
          <Heading>Not??cias</Heading>
          <Box
            bg={colorMode === 'dark' ? 'dark.200' : 'green.150'}
            w="100%"
            borderRadius="20px 0 0 20px"
            gap="1rem"
            py="0.4rem"
            px={{
              sm: '10%',
              md: '4rem',
              lg: '2rem',
              xl: '4rem',
              xl2: '24rem',
            }}
            boxShadow="xl"
            display="flex"
            flexDirection={{
              sm: 'column',
              md: 'row',
              lg: 'row',
              xl: 'row',
            }}
            alignItems="center"
            justifyContent="center"
            overflowY={{
              sm: 'hidden',
              md: 'scroll',
              lg: 'scroll',
              xl: 'scroll',
            }}
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
            {news &&
              news.map((notice, index) => {
                if(index < 5) {
                  return (
                    <NewsCard
                    imageUrl={notice.urlToImage}
                    title={notice.title}
                    subtitle={notice.description}
                    completeNoticeUrl={notice.url}
                  />
                  )
                }
              })
            }
          </Box>
          <Flex
            w="100%"
            justifyContent={['center', 'center', 'flex-end', 'flex-end']}
            mt="0.6rem"
          >
            <Button
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