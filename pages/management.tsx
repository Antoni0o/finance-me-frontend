import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ManagementPageContent } from '../src/components/ManagementPageComponents';
import { useAuth } from '../src/hooks/useAuth';

const ManagementPage: NextPage = () => {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>FinanceMe - Gerenciamento</title>
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
          <ManagementPageContent />
        </Flex>
      )}
    </>
  );
};

export default ManagementPage;
