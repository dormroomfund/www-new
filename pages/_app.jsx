import React from 'react';
import App, { Container } from 'next/app';
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
        <style jsx global>{`
          .App {
            display: none;
          }
        `}</style>
        <Component {...pageProps} />
      </Container>
    );
  }
}
