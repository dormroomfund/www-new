import React from 'react';
import App, { Container } from 'next/app';

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
        <ScrollToTop>
          <Component {...pageProps} />
        </ScrollToTop>
      </Container>
    );
  }
}
