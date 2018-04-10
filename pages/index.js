import React, { Component } from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';

class Value extends Component {
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
                  We invest $20,000 through a SAFE—the most founder-friendly
                  terms that exist.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class FoundersSection extends Component {
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
              <Link href="/founders">
                <a className="colored-section-button button-rounded-white">
                  Our Founders
                </a>
              </Link>
            </div>
          </div>
          <div className="founders-image-container">
            <img
              className="founders-image"
              src="/static/img/founders_compressed/blockstack1.jpg"
            />
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

class Community extends Component {
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
          <img
            className="community-image"
            src="/static/img/community-photo.jpg"
          />
        </div>
      </div>
    );
  }
}

class Apply extends Component {
  render() {
    return (
      <div className="apply-section">
        <div className="content">
          <div className="apply-section-wrapper">
            <h2>Working on something big? Let&#39;s talk.</h2>
            <a
              href="https://dormroomfund.typeform.com/to/DsPlYB"
              className="apply-section-button button-rounded-blue"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    );
  }
}

class Hero extends Component {
  render() {
    return (
      <div>
        <div className="hero-container">
          <div className="content">
            <div className="hero-wrapper">
              <h1 className="hero-header">
                Hi. We&#39;re Dorm Room Fund—the best way for student founders
                to grow their startup.
              </h1>
              <p className="hero-subheader">
                Built by students and powered by First Round, we provide
                founders with a strong network of investors, world-class
                mentors, and a $20,000 check.
              </p>
            </div>
          </div>
          <object
            className="ramp"
            data="/static/img/ramp.svg"
            type="image/svg+xml"
          />
          <object
            className="ramp-mobile"
            data="/static/img/ramp-mobile.svg"
            type="image/svg+xml"
          />
        </div>
        <div className="section-logos">
          <div className="content">
            <div className="col-12">
              <div className="logos-wrapper">
                <h1>
                  We&#39;ve invested in 150 startups whove raised $300 million
                  from:
                </h1>
                <div className="logos">
                  <div className="content">
                    <div className="col-10 col-centered m-col-12">
                      <div className="content">
                        <div className="col-3 m-col-6">
                          <object
                            className="logo"
                            data="/static/img/investor-firstround.svg"
                            type="image/svg+xml"
                          />
                        </div>
                        <div className="col-3 m-col-6">
                          <object
                            className="logo"
                            data="/static/img/investor-gv.svg"
                            type="image/svg+xml"
                          />
                        </div>
                        <div className="col-3 m-col-6">
                          <object
                            className="logo"
                            data="/static/img/investor-sequoia.svg"
                          />
                        </div>
                        <div className="col-3 m-col-6">
                          <object
                            className="logo"
                            data="/static/img/investor-yc.svg"
                            type="image/svg+xml"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Resources extends Component {
  render() {
    return (
      <div className="resources-section">
        <div className="content">
          <div className="resources-section-wrapper">
            <h2 className="resources-section-header">
              Not ready yet? We&#39;d still love to help.
            </h2>
            <p className="email-title">
              Follow events, resources, and jobs in our portfolio:
            </p>
            <NameForm />
            <p className="medium-title">
              Our most recent posts on{' '}
              <a href="https://medium.com/@dormroomfund">
                <span className="gray-underline">Medium</span>
              </a>:
            </p>
            <div className="medium-content-links">
              <div className="content">
                <div className="col-4 m-col-12">
                  <a
                    target="_blank"
                    href="https://medium.com/@dormroomfund/drf4life-congrats-to-the-graduating-dorm-room-fund-partners-719f82ab3e03"
                  >
                    <div className="medium-card">
                      <img
                        className="medium-article"
                        src="/static/img/article-2.jpg"
                      />
                      <p className="medium-article-title">
                        #DRF4Life: Congrats to the Graduating Dorm Room Fund
                        Partners!
                      </p>
                    </div>
                  </a>
                </div>
                <div className="col-4 m-col-12">
                  <a
                    target="_blank"
                    href="https://medium.com/@dormroomfund/meet-the-seven-dorm-room-fund-startups-presenting-at-y-combinator-s17-demo-day-e6e731851726"
                  >
                    <div className="medium-card">
                      <img
                        className="medium-article"
                        src="/static/img/article-1.jpg"
                      />
                      <p className="medium-article-title">
                        Meet the Seven Dorm Room Fund Startups Presenting at Y
                        Combinator S17 Demo Day
                      </p>
                    </div>
                  </a>
                </div>
                <div className="col-4 m-col-12">
                  <a
                    target="_blank"
                    href="https://medium.com/@dormroomfund/the-26-students-powering-entrepreneurship-meet-dorm-room-funds-new-partners-2a2d83d7c9f0"
                  >
                    <div className="medium-card last">
                      <img
                        className="medium-article"
                        src="/static/img/article-3.jpg"
                      />
                      <p className="medium-article-title">
                        The 26 Students Powering Entrepreneurship — Meet Dorm
                        Room Fund’s New Partners
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      submitted: false,
      error: false,
      message: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.name || !this.state.email) {
      this.setState({
        error: true,
        message: 'Please fill out all required fields!'
      });
    } else if (!validateEmail(this.state.email)) {
      this.setState({
        error: true,
        message: 'Please use a valid email!'
      });
    } else if (!this.state.submitted) {
      var url =
        'https://script.google.com/macros/s/AKfycbxs4vTvuG_Ysmaim4qefVjNH0bM4cWsmorz-av0eaby-1aPSQ/exec';
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function() {
        console.log(xhr.status, xhr.statusText);
        console.log(xhr.responseText);
        return;
      };

      var data = {
        name: this.state.name,
        email: this.state.email
      };
      // url encode form data for sending as post data
      var encoded = Object.keys(data)
        .map(function(k) {
          return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
        })
        .join('&');
      xhr.send(encoded);
      this.setState({
        submitted: true,
        error: false
      });
    }
  }

  render() {
    return (
      <form className="resources-section-form">
        {!this.state.submitted ? (
          <div>
            <div className="container">
              <input
                className="name"
                name="name"
                placeholder="First Name"
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
              <input
                className="email"
                name="email"
                placeholder="Email Address"
                type="text"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
              <input
                type="submit"
                value="Sign Up"
                onClick={this.handleSubmit}
              />
            </div>
            <div
              className={
                'validation-message' + (this.state.error ? '' : 'hidden')
              }
            >
              <p>{this.state.message}</p>
            </div>
          </div>
        ) : (
          <h1>Thanks!</h1>
        )}
      </form>
    );
  }
}

export default () => (
  <Layout>
    <Hero />
    <Community />
    <Value />
    <FoundersSection />
    <Apply />
    <Resources />
  </Layout>
);
