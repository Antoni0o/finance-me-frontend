import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { NewsPageContent } from '../src/components/NewsPageComponents';
import { useAuth } from '../src/hooks/useAuth';

const NewsPage: NextPage = () => {
  // const { signed } = useAuth();
  // const router = useRouter();

  // useEffect(() => {
  //   if(!signed) {
  //     router.push('/');
  //   }
  // });

  return (
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
      <NewsPageContent />
    </Flex>
  );
};

export default NewsPage;
