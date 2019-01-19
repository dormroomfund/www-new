import { Component } from 'react';

export default class Value extends Component {
  render() {
    return (
      <div className="value-section">
        <div className="content">
          <h2>So, what do Dorm Room Fund founders receive?</h2>
          <p className="value-section-subheader">
            We&#39;re designed to help student founders go from the earliest
            stage to the seed stage and beyond.
          </p>
          <div className="value-section-cards content">
            <div className="col-4 m-col-12">
              <div className="value-section-card">
                <h3>Community</h3>
                <p className="value-section-text">
                  300+ fellow founders, 50+ mentors, dozens of intimate events
                  with industry leaders and investors.
                </p>
              </div>
            </div>
            <div className="col-4 m-col-12">
              <div className="value-section-card">
                <h3>Mentors</h3>
                <p className="value-section-text">
                  Access to world-class advisors, including the founders of
                  Buzzfeed, Venmo, YouTube, and Quora.
                </p>
              </div>
            </div>
            <div className="col-4 m-col-12">
              <div className="value-section-card">
                <h3>$20,000</h3>
                <p className="value-section-text">
                  We invest $20,000 through a{' '}
                  <a
                    className="bodylink"
                    target="_blank"
                    href="https://medium.com/@joshephraim/complete-guide-to-understanding-safes-how-we-invest-at-dorm-room-fund-bbb37855ec4e"
                  >
                    SAFE
                  </a>
                  —the most founder-friendly terms that exist.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
