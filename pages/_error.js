import React, { Component } from 'react';

import Layout from '../src/layout';

export default class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <Layout>
        <div className="content">
          <div className="error-wrapper">
            <h1 className="oops-text">Oops!</h1>
            <p className="error-description-text">
              {this.props.statusCode === 404
                ? "We can't seem to find the page you're looking for."
                : 'Something went wrong while loading that page.'}
            </p>
            <p className="error-description-code">
              Error code: {this.props.statusCode}
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}
