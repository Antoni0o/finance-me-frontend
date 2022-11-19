import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { ManagementPageContent } from '../src/components/ManagementPageComponents';

const ManagementPage: NextPage = () => {
  return (
    <Flex
      overflowX="hidden"
      overflowY={['scroll', 'scroll', 'hidden', 'hidden']}
      w="100vw"
      h="100vh"
    >
      <ManagementPageContent />
    </Flex>
  );
};

export default ManagementPage;