import App, { Container } from 'next/app';
import React from 'react';
import '../scss/App.scss';

if (process.browser) {
  import('smoothscroll-polyfill').then((smoothscroll) =>
    smoothscroll.polyfill()
  );
  import('webfontloader').then((WebFont) =>
    WebFont.load({
      custom: {
        families: ['Circular Std', 'GT Walsheim'],
        urls: ['/static/font/fonts.css'],
      },
    })
  );
}

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {}

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
