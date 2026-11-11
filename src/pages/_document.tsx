import {Head, Html, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang='fr'>
      <Head>
        <link href='https://fonts.googleapis.com' rel='preconnect' />
        <link crossOrigin='anonymous' href='https://fonts.gstatic.com' rel='preconnect' />
        <link
          href='https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;500;700&family=Press+Start+2P&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='font-xp'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}