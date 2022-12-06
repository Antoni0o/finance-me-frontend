import { NextPage } from 'next';
import Head from 'next/head';
import { LoginContent } from '../src/components/LoginPageComponents';

const loginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>FinanceMe - Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LoginContent />
    </>
  );
};

export default loginPage;
