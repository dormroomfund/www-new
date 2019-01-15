import { Component } from 'react';
import Link from 'next/link';
import founder from '../static/img/founders_compressed/blockstack2_o.jpg';

export default class FoundersSection extends Component {
  render() {
    return (
      <div className="bg-colored-blue founders-section">
        <div className="content">
          <div className="founders-wrapper">
            <div>
              <h1 className="colored-section-header light-text">
                Our founders, our family.
              </h1>
              <p className="colored-section-subheader light-text">
                Since our first investment in 2012, the majority of our founders
                have raised additional rounds of funding, running teams of up to
                100+ employees. By helping our founders learn the ins and outs
                of fundraising, launch strategy, growth, and hiring, we’re just
                as invested in your mission as you are.
              </p>
              <Link href="/companies">
                <a className="colored-section-button button-rounded-white">
                  Our Companies
                </a>
              </Link>
            </div>
          </div>
          <div className="founders-image-container">
            <img className="founders-image" src={founder} />
            <div className="founders-image-overlay">
              <p className="founders-image-caption light-text">
                Ryan Shea, Blockstack (Princeton &#39;12)
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
