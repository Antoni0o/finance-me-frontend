import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ManagementPageContent } from '../src/components/ManagementPageComponents';
import { useAuth } from '../src/hooks/useAuth';

const ManagementPage: NextPage = () => {
  const { user } = useAuth();

  return (
    <>
      {user?.id && (
        <Flex
          overflowX="hidden"
          overflowY={{
            sm: 'scroll',
            md: 'scroll',
            lg: 'hidden',
            xl: 'hidden'
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