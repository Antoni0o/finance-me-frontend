import { Flex, Grid, GridItem, Heading, useColorMode } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { api } from '../../../api';

interface ITransactionAmountsProps {
  userId: string
}

export interface IApiResponse {
  income: string;
  expense: string;
  amount: string;
}

export const TransactionAmounts = ({
  userId
}: ITransactionAmountsProps) => {
  const { colorMode } = useColorMode();
  const [amounts, setAmounts] = useState<IApiResponse>({
    amount: 'R$ XXX,XX',
    income: 'R$ XXX,XX',
    expense: 'R$ XXX,XX',
  });

  useEffect(() => {
    api.get(`/amounts/${userId}`).then((res) => {
      setAmounts(res.data);
    }); 
  }, [userId]);

  return (
    <Grid
      templateColumns={['100%', '100%', 'repeat(3, 1fr)', 'repeat(3, 1fr)']}
      templateRows={['repeat(3, 1fr)', 'repeat(3, 1fr)', '100%', '100%']}
      gap={10}
    >
      <GridItem
        p={{
          sm: '1rem',
          md: '0.6rem',
          lg: '0.6rem',
          xl: '1rem',
        }}
        bg={colorMode == 'dark' ? 'dark.200' : 'green.150'}
        borderRadius="xl"
        boxShadow="xl"
      >
        <Heading
          color={colorMode == 'dark' ? 'light.100' : 'dark.100'}
          fontSize={{
            sm: 'medium',
            md: 'large',
            lg: 'larger',
            xl: 'x-large',
          }}
        >
          ENTRADAS
        </Heading>
        <Flex
          mt={{
            md: '1rem',
            lg: '1rem',
            xl: '1.5rem',
          }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading
            fontSize={{
              sm: '1.6rem',
              md: '1.6rem',
              lg: '1.8rem',
              xl: '3rem',
            }}
            maxWidth="100%"
          >
            {amounts.income}
          </Heading>
        </Flex>
      </GridItem>
      <GridItem
        p={{
          sm: '1rem',
          md: '0.6rem',
          lg: '0.6rem',
          xl: '1rem',
        }}
        bg={colorMode == 'dark' ? 'dark.200' : 'green.150'}
        borderRadius="xl"
        boxShadow="xl"
      >
        <Heading
          color={colorMode == 'dark' ? 'light.100' : 'dark.100'}
          fontSize={{
            sm: 'medium',
            md: 'large',
            lg: 'larger',
            xl: 'x-large',
          }}
        >
          SAÍDAS
        </Heading>
        <Flex
          mt={{
            md: '1rem',
            lg: '1rem',
            xl: '1.5rem',
          }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading
            fontSize={{
              sm: '1.6rem',
              md: '1.6rem',
              lg: '1.8rem',
              xl: '3rem',
            }}
            maxWidth="100%"
          >
            {amounts.expense}
          </Heading>
        </Flex>
      </GridItem>
      <GridItem
        p={{
          sm: '1rem',
          md: '0.6rem',
          lg: '0.6rem',
          xl: '1rem',
        }}
        bg={colorMode == 'dark' ? 'dark.200' : 'green.150'}
        borderRadius="xl"
        boxShadow="xl"
      >
        <Heading
          color={colorMode == 'dark' ? 'light.100' : 'dark.100'}
          fontSize={{
            sm: 'medium',
            md: 'large',
            lg: 'larger',
            xl: 'x-large',
          }}
        >
          SALDO
        </Heading>
        <Flex
          mt={{
            md: '1rem',
            lg: '1rem',
            xl: '1.5rem',
          }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading
            fontSize={{
              sm: '1.6rem',
              md: '1.6rem',
              lg: '1.8rem',
              xl: '3rem',
            }}
            maxWidth="100%"
          >
            {amounts.amount}
          </Heading>
        </Flex>
      </GridItem>
    </Grid>
  );
};
