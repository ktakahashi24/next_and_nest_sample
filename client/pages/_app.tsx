import { AppProps } from 'next/app';
import Head from 'next/head';

import Header from '../layouts/header';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" /> */}
      {/* <link rel="manifest" href="/manifest.json" /> */}
    </Head>
    <Header />
    <div css='width: 90%; margin: 0 auto;'>
      <Component {...pageProps} />
    </div>
  </>
);

export default App