import { Box, Button, Flex, Heading, Image, useColorMode } from "@chakra-ui/react";
import { BiRightArrowAlt } from "react-icons/bi";

interface INewsCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  completeNoticeUrl: string;
}

export const NewsCard = ({ imageUrl, title, subtitle, completeNoticeUrl }: INewsCardProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === 'dark' ? 'dark.300' : 'green.100'}
      w="20rem"
      borderRadius="20px"
    >
      <Image
        src={imageUrl}
        borderRadius="20px 20px 0 0"
        w="100%"
        h="10rem"
        alt={title}
      />
      <Box p="1rem">
        <Heading fontSize="1.8rem">
          {title}
        </Heading>
        <Box>
          {subtitle}
        </Box>

        <Flex justifyContent="flex-end">
          <Button
            fontSize="1rem"
            p="0.6rem 0.8rem"
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
