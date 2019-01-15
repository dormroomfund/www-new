import { Component } from 'react';
import ScrollBackToTop from './ScrollBackToTop';
import alumni_data from '../static/data/alumni';
import linkedin_icon from '../static/img/linkedin-icon.svg';

export default class AlumniSection extends Component {
  render() {
    return (
      <div className="team-alumni-grid-wrapper">
        <ScrollBackToTop />
        <div className="team-divider-title">
          <a
            href="http://graduatefund.com"
            target="_blank"
            className="team-divider-title-link"
          >
            Alumni
          </a>
        </div>
        <hr className="team-divider" />
        <div className="team-alumni-description">
          <p>
            In the past five years, over 150 alumni have graduated from Dorm
            Room Fund. Our alumni have gone on to join top-flight VC firms like
            Accel, Bessemer, First Round, and Sequoia or lead teams at companies
            like AngelList, Amazon, Google, Facebook, and Stripe. Many Dorm Room
            Fund alumni have started their own companies, have participated in
            YC, and have been honored by Forbes 30 Under 30. We've even started
            a new fund run entirely by Dorm Room Fund alumni called{' '}
            <a
              href="http://graduatefund.com"
              target="_blank"
              className="bodylink"
            >
              Graduate Fund
            </a>
            , which empowers recent graduates to start new ventures.
          </p>
        </div>
        <div className="team-alumni-grid-container">
          <div className="team-alumni-grid" data-column="3">
            {alumni_data
              .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
              .map((c) => (
                <Alumni key={c.name} alumni={c} />
              ))}
          </div>
          <a href="#team-alumni" />
        </div>
      </div>
    );
  }
}

const Alumni = ({ alumni }) => (
  <div className="team-alumni-column">
    <div className="team-alumni-card-container">
      <div className="team-alumni-card">
        <div className="team-alumni-card-top-bar" />
        <div className="card-text">
          <div className="">
            <h5 className="team-alumni-card-name">
              {alumni.name}
              {alumni.linkedin != '' ? (
                <a
                  href={alumni.linkedin}
                  target="_blank"
                  className="team-alumni-card-link"
                >
                  <img className="icon" src={linkedin_icon} />
                </a>
              ) : null}
            </h5>
          </div>
          <div className="team-alumni-card-company">
            {alumni.role ? alumni.role + ', ' : ''}
            {alumni.company ? alumni.company : <br />}
          </div>
          <div className="team-alumni-card-school">
            {alumni.school ? alumni.school : <br />}
          </div>
        </div>
      </div>
    </div>
  </div>
);
