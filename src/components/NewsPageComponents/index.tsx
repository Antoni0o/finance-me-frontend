import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  useColorMode,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { LeftBar } from '../../theme/components/LeftBar';
import { NewsCard } from '../../theme/components/NewsCard';

export const NewsPageContent = () => {
  const { colorMode } = useColorMode();
  const [gridAreaLg, setGridAreaLg] = useState('4% 96%');
  const [gridAreaMd, setGridAreaMd] = useState('6% 94%');
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://finance-me-frontend.vercel.app/api/news').then((res) => {
      setNews(res.data.news);
    });
  }, []);

  return (
    <Grid
      gridTemplateColumns={{
        sm: '100%',
        md: '100%',
        lg: gridAreaMd,
        xl: gridAreaLg,
      }}
      gridTemplateRows={{
        sm: '10% 90%',
        md: '10% 90%',
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
      <GridItem>
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
        <Flex width="100%" marginTop="1rem" justifyContent="flex-end">
          <Box
            bg={colorMode === 'dark' ? 'dark.200' : 'green.150'}
            w="100%"
            h="80vh"
            borderRadius="20px 0 0 20px"
            p="1rem"
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
                sm: '75%',
                md: '100%',
                lg: '100%',
                xl: '100%',
              }}
              gridTemplateColumns={{
                sm: 'repeat(1, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)',
                xl: 'repeat(5, 1fr)',
                xl2: 'repeat(6, 1fr)',
              }}
              gap={{
                sm: '1%',
                md: '1%',
                lg: '5% 1%',
                xl: '5% 1%',
              }}
            >
              {news &&
                news.map((notice, index) => {
                  if (index < 15) {
                    return (
                      <GridItem>
                        <NewsCard
                          imageUrl={notice.urlToImage}
                          title={notice.title}
                          subtitle={notice.description}
                          completeNoticeUrl={notice.url}
                        />
                      </GridItem>
                    );
                  }
                })}
            </Grid>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};
