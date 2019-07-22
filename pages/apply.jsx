import { Component } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// I,port component with no SSR
const ReactTypeformEmbed = dynamic(
  import('react-typeform-embed').then((mod) => mod.ReactTypeformEmbed),
  { ssr: false }
);

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
