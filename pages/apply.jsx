import { Component } from 'react';
import Head from 'next/head';
import { ReactTypeformEmbed } from 'react-typeform-embed';

export default class ApplyPage extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Dorm Room Fund - Apply</title>
        </Head>
        <ReactTypeformEmbed
          url={'https://dormroomfund.typeform.com/to/H90ZNU'}
        />
      </div>
    );
  }
}
