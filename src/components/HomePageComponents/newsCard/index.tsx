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
        sm: '20rem',
        md: '14rem',
        lg: '14rem',
        xl: '20rem',
      }}
      borderRadius="20px"
    >
      <Image
        src={imageUrl}
        borderRadius="20px 20px 0 0"
        w="100%"
        h={{
          sm: '10rem',
          md: '8rem',
          lg: '8rem',
          xl: '10rem',
        }}
        alt={title}
      />
      <Box
        p={{
          sm: '2rem',
          md: '0.8rem',
          lg: '0.8rem',
          xl: '2rem',
        }}
      >
        <Heading
          fontSize={{
            sm: '1.6rem',
            md: '1.2rem',
            lg: '1.2rem',
            xl: '1.6rem',
          }}
        >
          {title}
        </Heading>
        <Box
          fontSize={{
            sm: '1rem',
            md: '0.6rem',
            lg: '0.6rem',
            xl: '1rem',
          }}
        >
          {subtitle}
        </Box>

        <Flex justifyContent="flex-end">
          <Button
            fontSize={{
              sm: '1rem',
              md: '0.8rem',
              lg: '0.8rem',
              xl: '1rem',
            }}
            p={{
              md: '0.6rem 0.8rem',
              lg: '0.1rem 0.8rem',
              xl: '0.6rem 0.8rem',
            }}
            borderRadius="100px"
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
