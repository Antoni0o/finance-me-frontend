import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { HomePageContent } from '../src/components/HomePageComponents';
import { useAuth } from '../src/hooks/useAuth';

const HomePage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("@financeme:token");
    if(!token) {
      router.push('/');
    }
  }, []);

  return (
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
      <HomePageContent />
    </Flex>
  );
};

export default HomePage;
