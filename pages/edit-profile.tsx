import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { EditProfilePageContent } from '../src/components/EditProfilePageComponents';
import { useAuth } from '../src/hooks/useAuth';

const EditProfilePage: NextPage = () => {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>FinanceMe - Editar Perfil</title>
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
          <EditProfilePageContent />
        </Flex>
      )}
    </>
  );
};

export default EditProfilePage;
