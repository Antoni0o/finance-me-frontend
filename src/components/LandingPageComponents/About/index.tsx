import { Flex, Heading, Highlight, Text, useColorMode } from '@chakra-ui/react';

export const About = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex w="100%" bgColor="green.200" overflowY="hidden">
      <Flex
        flexDir={['column', 'column', 'column', 'row']}
        mx="10%"
        my="5%"
        alignItems={['center', 'center', 'center', 'flex-start']}
        justifyContent={['center', 'center', 'center', 'space-between']}
        textAlign={['center', 'center', 'center', 'left']}
        overflowY="hidden"
      >
        <Heading
          fontSize={['1xl', '2xl', '2xl', '3.5rem']}
          w={['auto', 'auto', 'auto', '60%']}
        >
          Um Gerenciador de Finanças Para
          <Highlight
            query="Quem Tem Pressa"
            styles={{
              color: colorMode === 'dark' ? 'dark.200' : 'light.100',
              fontWeight: 'black',
            }}
          >
            &nbsp;Quem Tem Pressa
          </Highlight>
        </Heading>
        <Text
          w={['auto', 'auto', 'auto', '40%']}
          fontSize={['sm', 'sm', '1xl', '2xl']}
        >
          Vive com problemas para <b>gerenciar suas finanças?</b> Não consegue{' '}
          <b>manter o dinheiro até o final do mês?</b>
          <br />
          Esses problemas são muito comuns na atualidade, e você pode
          solucioná-los <b>usando a nossa plataforma!</b>
        </Text>
      </Flex>
    </Flex>
  );
};
