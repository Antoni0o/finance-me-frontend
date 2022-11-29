import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { EditProfilePageContent } from '../src/components/EditProfilePageComponents';
import { useAuth } from '../src/hooks/useAuth';

const EditProfilePage: NextPage = () => {
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
