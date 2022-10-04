import { Button, Flex, Heading } from '@chakra-ui/react';
import HomeImg from '../../../../public/home-image.png';
import Image from 'next/image';

export const Home = () => {
  return (
    <Flex
      w="80%"
      mx="10%"
      my="5%"
      align="center"
      flexDir={['column', 'column', 'column', 'row']}
      justifyContent={['center', 'center', 'center', 'space-between']}
    >
      <Flex flexDir="column">
        <Heading fontSize={['4xl', '5xl', '6xl', '7xl']}>Gerencie Suas Finanças,</Heading>
        <Heading color="green.200" fontSize={['4xl', '5xl', '6xl', '7xl']}>
          Rápido
        </Heading>
        <Button
          mt="2rem"
          h={['50%', '50%', '45%', '40%']}
          w={['50%', '50%', '45%', '40%']}
          fontSize={['lmd', '1xl', '1xl', '2xl']}
          fontWeight="black"
        >
          Comece Agora!
        </Button>
      </Flex>
      <Flex>
        <Image src={HomeImg} width="532px" height="512px" />
      </Flex>
    </Flex>
  );
};
