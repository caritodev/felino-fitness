import { StateProvider } from '../context/Context';
import { withRouter } from 'next/router';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <html lang="es-CO"/>
        <title>Felino Fitness</title>
        <meta name="description" content='Lo mejor para tu mascota' />
        <meta name="google" content="notranslate" />
        <meta httpEquiv="content-language" content="es-CO"/>
      </Head>
      <ThemeProvider theme={theme}>
        <StateProvider>
            <Component {...pageProps} translate="no" />
        </StateProvider>
      </ThemeProvider>
    </>
  );
  return <></>;
}

export default withRouter(MyApp);
