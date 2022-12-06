import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { userAgent } from 'next/server';
import { useEffect } from 'react';
import { HomePageContent } from '../src/components/HomePageComponents';
import { useAuth } from '../src/hooks/useAuth';

interface IHomePageProps {
  userId: string;
}

const HomePage: NextPage = ({ userId }: IHomePageProps) => {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>FinanceMe - Notícias</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {user?.id && (
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
          <HomePageContent userId={userId} />
        </Flex>
      )}
    </>
  );
};

export default HomePage;
