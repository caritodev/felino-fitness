import { StateProvider } from '../context/Context';
import { withRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <html lang="es-CO"/>
        <title>felino-fitness</title>
        <meta name="description" content='Lo mejor para tu mascota' />
        <meta name="google" content="notranslate" />
        <meta httpEquiv="content-language" content="es-CO"/>
      </Head>
        <StateProvider>
            <Component {...pageProps} translate="no" />
        </StateProvider>
    </>
  );
  return <></>;
}

export default withRouter(MyApp);
