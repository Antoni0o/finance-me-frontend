import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import { HomePageContent } from "../src/components/HomePageComponents";

const HomePage: NextPage = () => {
  return (
    <Flex overflowX="hidden" overflowY={['scroll', 'scroll', 'hidden', 'hidden']} w="100vw" h="100vh">
      <HomePageContent/>
    </Flex>
  );
} 

export default HomePage;