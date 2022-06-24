import { AppProps } from 'next/app';
import React from 'react';

import lightTheme from '../theme';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../components/shared/Layout';
import wrapper from '../store/configure';
import GlobalStyle from '../theme/globalStyle';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="나덕경 블로그" />
        <title>duck_blog</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
