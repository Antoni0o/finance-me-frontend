import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { About } from '../src/components/LandingPageComponents/About'
import { Home } from '../src/components/LandingPageComponents/Home'
import { Navbar } from '../src/theme/components/Navbar'

const LandingPage: NextPage = () => {
  return (
    <Flex
      flexDir='column'
      overflowY='hidden'
    >
      <Navbar color='green.200' />
      <Home />
      <About />
    </Flex>
  )
}

export default LandingPage
