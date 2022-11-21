import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  useColorMode,
} from '@chakra-ui/react';
import { useState } from 'react';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { LeftBar } from '../../theme/components/LeftBar';
import { TransactionAmounts } from '../../theme/components/TransactionAmounts';
import { TransactionCard } from './TransactionCard';

export const ManagementPageContent = () => {
  const { colorMode } = useColorMode();
  const [gridAreaLg, setGridAreaLg] = useState('8% 92%');
  const [gridAreaMd, setGridAreaMd] = useState('12% 88%');

  return (
    <Grid
      gridTemplateColumns={{
        sm: '100%',
        md: '100%',
        lg: gridAreaMd,
        xl: gridAreaLg,
      }}
      gridTemplateRows={{
        sm: '16% 90%',
        md: '16% 90%',
        lg: '100%',
        xl: '100%',
      }}
      w="100%"
      transition="0.2s"
    >
      <GridItem
        onMouseEnter={() => {
          setGridAreaLg('30% 70%');
          setGridAreaMd('30% 70%');
        }}
        onMouseLeave={() => {
          setGridAreaLg('8% 92%');
          setGridAreaMd('12% 88%');
        }}
      >
        <LeftBar />
      </GridItem>
      <GridItem
        margin={{
          sm: '1rem',
          md: '1.2rem',
          lg: '1.4rem',
          xl: '2rem',
        }}
      >
        <TransactionAmounts />
        <Flex
          w="100%"
          justifyContent="flex-end"
          mt={{
            sm: '1rem',
            md: '1.2rem',
            lg: '1.4rem',
            xl: '2rem',
          }}
          flexDirection={['column', 'column', 'row', 'row']}
        >
          <Button
            fontSize="1.6rem"
            p={{
              sm: '0.6rem 1.2rem',
              md: '1rem 1.4rem',
              lg: '1.2rem 1.8rem',
              xl: '1.6rem 2rem',
            }}
            borderRadius="100px"
            leftIcon={<RiMoneyDollarCircleFill />}
          >
            Adicionar Transação
          </Button>
        </Flex>
        <Flex width="100%" marginTop="1rem">
          <Box
            bg={colorMode === 'dark' ? 'dark.200' : 'green.150'}
            w="100%"
            h="64vh"
            borderRadius="20px 0 0 20px"
            p="1rem"
            mb="1rem"
            boxShadow="xl"
            display="flex"
            justifyContent={['center', 'center', 'flex-start', 'flex-start']}
            overflowY="scroll"
            sx={{
              scrollbarWidth: 'thin',
              scrollbarColor: colorMode === 'dark' ? 'light.100' : 'dark.100',
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor:
                  colorMode === 'dark' ? 'dark.200' : 'green.150',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor:
                  colorMode === 'dark' ? 'light.100' : 'green.200',
                borderRadius: '10px',
                border:
                  '4px solid' + colorMode === 'dark' ? 'dark.200' : 'green.150',
              },
            }}
          >
            <Flex flexDirection="column" width="100%" gap="0.6rem">
              <TransactionCard />
              <TransactionCard />
              <TransactionCard />
              <TransactionCard />
              <TransactionCard />
              <TransactionCard />
              <TransactionCard />
              <TransactionCard />
              <TransactionCard />
              <TransactionCard />
              <TransactionCard />
              <TransactionCard />
            </Flex>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};
