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
    import('webfontloader').then((WebFont) =>
      WebFont.load({
        custom: {
          families: ['Circular Std', 'GT Walsheim'],
          urls: ['/static/font/fonts.css'],
        },
      })
    );

    smoothscroll.polyfill();
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
