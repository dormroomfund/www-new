import { Component } from 'react';
import Link from 'next/link';

export default class Apply extends Component {
  render() {
    return (
      <div className="apply-section">
        <div className="content">
          <div className="apply-section-wrapper">
            <h2>Working on something big? Let&#39;s talk.</h2>
            <a
              href="https://airtable.com/shrIkIQTZqkdcS05v"
              target="_blank"
              rel="noopener noreferrer"
              className="apply-section-button button-rounded-blue"
            >
              Apply for Funding
            </a>
          </div>
        </div>
      </div>
    );
  }
}
