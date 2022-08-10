import type { ReactElement } from 'react';
import Login from '@/components/Login';
import Layout from '@/components/Layout';
import { Head } from 'next/document';

export default function Home() {
  return (
    <>
      <Head>
        <title>Web-app</title>
        <meta name='description' content='Sort description of your website' />
        <meta name='keywords' content='keyword1,keyword2,...' />
        <meta name='og:title' property='og:title' content='Your Open Graph Title' />
        <meta name='robots' content='index, follow' />
        <link href='URL' rel='canonical' />
      </Head>
      <Login />
    </>
  );
}

// Home.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>;
// };
