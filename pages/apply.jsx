import { Component } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
export default class ApplyPage extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Dorm Room Fund - Apply</title>
          <script
            dangerouslySetInnerHTML={{
              __html: `https://static.airtable.com/js/embed/embed_snippet_v1.js`,
            }}
          />
        </Head>
        <iframe
          className="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shrIkIQTZqkdcS05v?backgroundColor=blue"
          frameBorder="0"
          onMouseWheel=""
          width="100%"
          height="4826"
          style={{
            background: 'transparent',
          }}
        />
      </div>
    );
  }
}
