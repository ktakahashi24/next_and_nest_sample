import { AppProps } from 'next/app';
import Head from 'next/head';

import Header from '../layouts/header';
import '../styles/reset.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
      {/* <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" /> */}
      {/* <link rel="manifest" href="/manifest.json" /> */}
    </Head>
    <Header />
    <div css='width: 100vw; height: 100vh'>
      <Component {...pageProps} />
    </div>
  </>
);

export default App;