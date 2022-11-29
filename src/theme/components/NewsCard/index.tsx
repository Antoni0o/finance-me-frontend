import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import { BiRightArrowAlt } from 'react-icons/bi';

interface INewsCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  completeNoticeUrl: string;
}

export const NewsCard = ({
  imageUrl,
  title,
  subtitle,
  completeNoticeUrl,
}: INewsCardProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === 'dark' ? 'dark.300' : 'green.100'}
      w={{
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
      }}
      borderRadius="20px"
    >
      <Image
        src={imageUrl}
        borderRadius="20px 20px 0 0"
        w="100%"
        h={{
          sm: '6rem',
          md: '8rem',
          lg: '8rem',
          xl: '10rem',
        }}
        alt={title}
      />
      <Box
        p={{
          sm: '0.6rem',
          md: '0.8rem',
          lg: '0.8rem',
          xl: '2rem',
        }}
      >
        <Heading
          fontSize={{
            sm: '1rem',
            md: '1.2rem',
            lg: '1.2rem',
            xl: '1.6rem',
          }}
        >
          {title}
        </Heading>
        <Box
          fontSize={{
            sm: '0.6rem',
            md: '0.6rem',
            lg: '0.6rem',
            xl: '1rem',
          }}
        >
          {subtitle}
        </Box>

        <Flex
          justifyContent={{
            sm: 'center',
            md: 'flex-end',
            lg: 'flex-end',
          }}
        >
          <Button
            mt={{
              sm: '1rem',
            }}
            w="100%"
            fontSize={{
              sm: '1rem',
              md: '0.8rem',
              lg: '0.8rem',
              xl: '1rem',
            }}
            padding={{
              sm: '2%',
              md: '2%',
              lg: '5%',
              xl: '7%',
            }}
            borderRadius="50px"
            rightIcon={<BiRightArrowAlt />}
            as="a"
            href={completeNoticeUrl}
            target="_blank"
          >
            Matéria completa
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
