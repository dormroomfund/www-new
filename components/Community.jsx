import { Component } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const CommunityImage = dynamic(() => import('./CommunityImage'), {
  ssr: false,
});

export default class Community extends Component {
  render() {
    return (
      <div className="bg-colored-blue community-section">
        <div className="content">
          <div className="community-wrapper">
            <div>
              <h1 className="colored-section-header light-text">
                Built by students, powered by First Round.
              </h1>
              <p className="colored-section-subheader light-text">
                We&#39;re a student-run venture fund backed by First Round. We
                invest in startups where at least one person on the founding
                team is a student (undergraduate or graduate). Our investment
                team is run by student leaders, entrepreneurs, and innovators
                across the country.
              </p>
              <Link href="/team">
                <a className="colored-section-button button-rounded-white">
                  Our Team
                </a>
              </Link>
            </div>
          </div>
          <CommunityImage
            alt="The Dorm Room Fund family."
            className="community-image"
          />
        </div>
      </div>
    );
  }
}
