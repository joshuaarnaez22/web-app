import { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { theme } from '@/theme';
// import Layout from '@/components/Layout';
import { ChakraProvider } from '@chakra-ui/react';
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider theme={theme}>
      {/* <Layout> */}
      {getLayout(<Component {...pageProps} />)}
      {/* </Layout> */}
    </ChakraProvider>
  );
}
