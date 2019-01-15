import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import smoothscroll from 'smoothscroll-polyfill';
import '../scss/App.scss';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    smoothscroll.polyfill();
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <style type="text/css">{`
          .App {
            display: none;
          }
        `}</style>
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}
