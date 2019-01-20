import App, { Container } from 'next/app';
import React from 'react';
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
    import('smoothscroll-polyfill').then((smoothscroll) =>
      smoothscroll.polyfill()
    );
    import('intersection-observer');
    import('webfontloader').then((WebFont) =>
      WebFont.load({
        custom: {
          families: ['Circular Std', 'GT Walsheim'],
          urls: ['/static/font/fonts.css'],
        },
      })
    );
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
