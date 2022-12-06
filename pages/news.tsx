import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { NewsPageContent } from '../src/components/NewsPageComponents';

const NewsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>FinanceMe - Notícias</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex
        overflowX="hidden"
        overflowY={{
          sm: 'scroll',
          md: 'scroll',
          lg: 'hidden',
          xl: 'hidden',
        }}
        w="100vw"
        h="100vh"
      >
        <NewsPageContent />
      </Flex>
    </>
  );
};

export default NewsPage;
