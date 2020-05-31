import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <style type="text/css">{`
          html {
            display: none;
          }
          html.wf-active, html.wf-inactive {
            display: block;
          }
        `}</style>

          <meta name="title" content="Dorm Room Fund" />
          <meta
            name="description"
            content="Dorm Room Fund is the strongest community of entrepreneurial students in the nation. Built by students and powered by First Round, we provide founders with a strong network of investors, world-class mentors, and a $20,000 check."
          />
          <meta property="og:title" content="Dorm Room Fund" />
          <meta property="og:url" content="https://www.dormroomfund.com" />
          <meta
            property="og:image"
            content="https://www.dormroomfund.com/static/media/drf-logo-black.63700ae2.svg"
          />
          <meta name="keywords" content="Dorm Room Fund" />
          <meta
            name="google-site-verification"
            content="nXnVMtqHxrViui7tiWjGPBbaFK8gbr096hgEwnYftH0"
          />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <script>
            {`(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
               (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
               m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
               })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
               ga('create', 'UA-105612774-8', 'auto');
               ga('send', 'pageview');`}
          </script>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
