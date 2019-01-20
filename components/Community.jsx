import { Component } from 'react';
import Link from 'next/link';
import { LazyImage } from 'react-lazy-images';
import community_photo from '../static/img/community-photo.jpg';
import community_photo_lo from '../static/img/community-photo-lo.jpg';

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
          <LazyImage
            src={community_photo}
            alt="The Dorm Room Fund family."
            placeholder={({ imageProps, ref }) => (
              <img
                ref={ref}
                className="community-image"
                src={community_photo_lo}
                alt={imageProps.alt}
              />
            )}
            actual={({ imageProps }) => (
              <img className="community-image" {...imageProps} />
            )}
          />
        </div>
      </div>
    );
  }
}
