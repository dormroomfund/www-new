import Document, { Head, Main, NextScript } from 'next/document';

import '../src/scss/App.scss';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="shortcut-icon" type="image/png" href="/static/favicon.ico" />
          <link rel="icon" type="image/png" href="/static/favicon.ico" />
          <title>Dorm Room Fund</title>

          <meta name="title" content="Dorm Room Fund" />
          <meta name="description" content="Dorm Room Fund is the strongest community of entrepreneurial students in the nation. Built by students and powered by First Round, we provide founders with a strong network of investors, world-class mentors, and a $20,000 check." />
          <meta property="og:title" content="Dorm Room Fund" />
          <meta property="og:url" content="https://www.dormroomfund.com" />
          <meta property="og:image" content="https://www.dormroomfund.com/static/media/drf-logo-black.63700ae2.svg" />
          <meta name="description" content="Dorm Room Fund is the strongest community of entrepreneurial students in the nation. Built by students and powered by First Round, we provide founders with a strong network of investors, world-class mentors, and a $20,000 check."/>
          <meta name="keywords" content="Dorm Room Fund" />
          <meta name="google-site-verification" content="nXnVMtqHxrViui7tiWjGPBbaFK8gbr096hgEwnYftH0" />

          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
