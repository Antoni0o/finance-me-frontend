import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { About } from '../src/components/LandingPageComponents/About'
import { Home } from '../src/components/LandingPageComponents/Home'
import { Navbar } from '../src/theme/components/Navbar'

const LandingPage: NextPage = () => {
  return (
    <Flex
      flexDir='column'
      overflowY='hidden'
    >
      <Head>
        <title>FinanceMe - Notícias</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar color='green.200' />
      <Home />
      <About />
    </Flex>
  )
}

export default LandingPage
