// import type { ReactElement } from 'react';
import Login from '@/components/Login';
import Head from 'next/head';
// import Layout from '@/components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Web-App</title>
        <meta name='title' content='Web-app' />
        <meta name='description' content='THIS IS A DESCRIPTION' />
        <meta name='keywords' content='THIS IS A CONTENT' />
        <meta property='og:type' content='website' />
      </Head>
      <Login />
    </>
  );
}

// Home.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>;
// };
