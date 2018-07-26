import React, { Component } from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import smoothscroll from 'smoothscroll-polyfill';

import ScrollToTop from './ScrollToTop';
import ScrollBackToTop from './ScrollBackToTop';

import Privacy from './Privacy';

import drf_logo_black from './img/drf-logo-black.svg';
import drf_logo_small_black from './img/drf-logo-small-black.svg';
import drf_logo_white from './img/drf-logo-white.svg';
import drf_logo_small_white from './img/drf-logo-small-white.svg';

// Home page assets
import ramp from './img/ramp.svg';
import ramp_mobile from './img/ramp-mobile.svg';
import investor_firstround from './img/investor-firstround.svg';
import investor_gv from './img/investor-gv.svg';
import investor_sequoia from './img/investor-sequoia.svg';
import investor_yc from './img/investor-yc.svg';
import community_photo from './img/community-photo.jpg';

// Medium article previews
import article_1 from './img/article-1.jpg';
import article_2 from './img/article-2.jpg';
import article_3 from './img/article-3.jpg';

// Social
import twitter_icon from './img/twitter-icon.svg';
import medium_icon from './img/medium-icon.svg';
import kit_icon from './img/kit-icon.svg';
import linkedin_icon from './img/linkedin-icon.svg';

// Founder on home page
import founder from './img/founders_compressed/blockstack1.jpg';

// Founder features
import blockstack_founder from './img/founders_compressed/blockstack2.jpg';
import brooklinen_founder from './img/founders_compressed/brooklinen.jpg';
import fiscalnote_founder from './img/founders_compressed/fiscalnote.jpg';
import scholly_founder from './img/founders_compressed/scholly.jpg';

// Team and company data is dynamically loaded
import team_data from './team.json';
import company_data from './companies.json';
import alumni_data from './alumni.json';

import './css/App.css';

function blockMove(e) {
  e.preventDefault();
}

class App extends Component {
  componentDidMount() {
    smoothscroll.polyfill();
  }

  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/apply" component={ApplyPage} />
            <Route exact path="/privacy" component={Privacy} />
            <Route path="/companies" component={CompaniesPage} />
            <Route
              path="/team"
              render={() => <TeamPage showCurrent={true} />}
            />
            <Route
              path="/alumni"
              render={() => <TeamPage showCurrent={false} />}
            />

            <Route
              path="/muneeb-ali"
              render={() =>
                <FoundersFeature
                  name="Muneeb Ali"
                  photo={blockstack_founder}
                  company="Blockstack"
                  summary="A new internet for decentralized apps."
                  founders={['Muneeb Ali, Princeton', 'Ryan Shea, Princeton']}
                  milestones={[
                    'Y Combinator - 2014',
                    '$4M Series A led by USV - Jan. 2017',
                    '$25M Signature Fund - Aug. 2017',
                    'ICO - coming soon.'
                  ]}
                  bio={
                    'Over 20 years ago as a child in Pakistan, Muneeb was offered a challenge by his mom: excel on your exams, and you’ll receive a computer.\nLittle did he know, that challenge would change his life. In his TEDx talk, Muneeb told the audience that the day he first accessed the Internet, he fell in love.\n20 years later, he set out to build a new internet.\nToday, the world’s most influential entrepreneurs, investors, and engineers are raving about the world-changing impact that blockchain will have on our society—furthermore, they’ve all got their sights set on Muneeb and co-founder Ryan Shea.\nLeading the pack of the decentralized revolution, the Blockstack founders have gotten backed by some of the world’s most prominent VCs, built a platform for thousands of developers to build technology off of, and have raised a $25M fund to keep supporting the blockchain ecosystem.\nBy turning a PhD dissertation into perhaps one of the most important companies in decades to come, Muneeb embodies the true meaning of a dorm room entrepreneur.'
                  }
                />}
            />
            <Route
              path="/chris-gray"
              render={() =>
                <FoundersFeature
                  name="Chris Gray"
                  photo={scholly_founder}
                  company="Scholly"
                  summary="No more finding scholarships. Let the scholarships find you."
                  founders={[
                    'Christopher Gray, Drexel',
                    'Nicholas Pirollo, Drexel',
                    'Bryson Alef, Amherst'
                  ]}
                  milestones={[
                    'Viral Shark Tank Episode',
                    '$70M in scholarships raised',
                    'Featured in 40+ press outlets'
                  ]}
                  bio={
                    '8 years ago, Christopher Gray was on the verge of not attending college. Coming from a low-income background, he couldn’t afford the insane price tags associated with most American universities.\nHundreds of scholarship applications and $1.3 million in winnings later, Chris was headed to school.\nAfter realizing first-hand how horrible it is to apply to so many scholarships, Chris realized something: many scholarships go unnoticed and un-awarded, and students blindly apply to tons of scholarships that aren’t specific to their profile.\nScholarships can’t find applicants, and students can’t find the right scholarships for them.\nBy building Scholly, Chris set out on a mission to help students easily find scholarships for college.\nWith over 1 million users and over $70 million in scholarships raised, it’s safe to say that Chris has delivered on that mission.\nOn top of the countless students whose lives have been changed because of Scholly, Chris has been recognized as 2015 Ernst & Young Entrepreneur of the Year for Social Entrepreneurship, 2016 Forbes 30 Under 30, Oprah’s Inaugural Super Soul 100 Honorees, and a place on Oprah’s list of her favorite people.'
                  }
                />}
            />
            <Route
              path="/brooklinen"
              render={() =>
                <FoundersFeature
                  name="Rich Fulop & Vicki Fulop"
                  photo={brooklinen_founder}
                  company="Brooklinen"
                  summary="Luxury we can all afford to sleep in."
                  founders={['Rich Fulop, NYU Stern', 'Vicki Fulop, NYU']}
                  milestones={[
                    'Launch at NYU Stern - 2014',
                    '$236,888 raised on Kickstarter - 2014',
                    '$10M venture round - 2017'
                  ]}
                  bio={
                    'They weren’t textile industry experts, they weren’t supply chain veterans, and they didn’t know much about ecommerce.\nWhat Rich & Vicki Fulop did know was, people should be able to buy ridiculously comfortable sheets without having to spend an entire paycheck.\nThat conviction paid off, big time.\nIn 3 years, Brooklinen surpassed a $50M annual run rate and raised a $10M venture round from First Mark Capital.\nWhat started off as a Kickstarter project in an NYU dorm room is now a rapidly growing ecommerce powerhouse that has grown 10x every year since launch.'
                  }
                />}
            />
            <Route
              path="/tim-hwang"
              render={() =>
                <FoundersFeature
                  name="Tim Hwang"
                  photo={fiscalnote_founder}
                  company="FiscalNote"
                  summary="Reinventing government influence."
                  founders={['Tim Hwang, Princeton']}
                  milestones={[
                    'World Economic Forum Technology Pioneer',
                    '$10M Series C — Feb. 2016',
                    'Acquired VoterVoice — July 2017'
                  ]}
                  bio={
                    'As a field organizer for the Obama ’08 campaign and later elected to the Montgomery County Board of Education to oversee a $4B budget, Tim learned a thing or two about politics.\nSitting in a Motel 6 in Silicon Valley during his time as a student at Harvard Business School, Tim launched FiscalNote to improve the way organizations engage with government. By empowering organizations to have maximum impact on legislation and regulation, global powerhouses all around the world rely on FiscalNote.\nTo date, the team has raised over $40M in funding from prominent investors and has been recognized as a Technology Pioneer by the World Economic Forum. Tim has been profiled in countless publications and has been recognized as a Forbes 30 Under 30 & Inc. 30 Under 30.'
                  }
                />}
            />
            <Route component={NoMatchPage} status={404} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

/* Pages */

// 404 page
class NoMatchPage extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Dorm Room Fund</title>
        </Helmet>
        <Menu lightColor={false} />
        <div className="content">
          <div className="error-wrapper">
            <h1 className="oops-text">Oops!</h1>
            <p className="error-description-text">
              We can't seem to find the page you're looking for.
            </p>
            <p className="error-description-code">Error code: 404</p>
          </div>
        </div>
        <CustomFooter />
      </div>
    );
  }
}

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Dorm Room Fund</title>
        </Helmet>
        <Menu lightColor={false} />
        <Hero />
        <Community />
        <Value />
        <FoundersSection />
        <Apply />
        <Resources />
        <CustomFooter />
      </div>
    );
  }
}

class ApplyPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Dorm Room Fund - Apply</title>
        </Helmet>
        <ReactTypeformEmbed
          url={'https://dormroomfund.typeform.com/to/H90ZNU'}
        />
      </div>
    );
  }
}

class CompaniesPage extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Dorm Room Fund - Companies</title>
        </Helmet>
        <div className="founders">
          <Menu lightColor={true} />
          <div className="founders-hero-photo">
            <div className="content">
              <div className="founders-hero-wrapper">
                <h1 className="founders-header light-text">
                  Our companies are built by over 300 founders from 40
                  universities.
                </h1>
                <div className="founders-hero-grid">
                  <div className="left-part">
                    <div className="left-first-row">
                      <div className="left-first-row-first-half tile">
                        <Link to="/muneeb-ali">
                          <img className="tile-img" src={blockstack_founder} />
                          <div className="overlay-text card-text">
                            <div className="mobile-only">Muneeb Ali</div>
                            <div className="mobile-only">Princeton PhD</div>
                            <div>Muneeb Ali (Princeton PhD &#39;17)</div>
                            <div>Blockstack</div>
                          </div>
                        </Link>
                      </div>
                      <div className="left-first-row-second-half tile">
                        <Link to="/chris-gray">
                          <img className="tile-img" src={scholly_founder} />
                          <div className="overlay-text card-text">
                            <div className="mobile-only">Chris Gray</div>
                            <div className="mobile-only">Drexel &#39;13</div>
                            <div>Chris Gray (Drexel &#39;13)</div>
                            <div>Scholly</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="left-second-row tile">
                      <Link to="/brooklinen">
                        <img
                          className="tile-img brooklinen"
                          src={brooklinen_founder}
                        />
                        <div className="overlay-text card-text">
                          <div className="mobile-only">Vicki Fulop</div>
                          <div className="mobile-only">NYU &#39;07</div>
                          <div>
                            Rich Fulop (NYU &#39;14) & Vicki Fulop (NYU &#39;07)
                          </div>
                          <div>Brooklinen</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="right-part tile">
                    <NavLink to="/tim-hwang">
                      <img
                        className="tile-img fiscalnote"
                        src={fiscalnote_founder}
                      />
                      <div className="overlay-text card-text">
                        <div className="mobile-only">Tim Hwang</div>
                        <div className="mobile-only">Princeton &#39;14</div>
                        <div>Tim Hwang (Princeton &#39;14)</div>
                        <div>FiscalNote</div>
                      </div>
                    </NavLink>
                  </div>
                </div>
                <div className="founders-hero-grid-mobile" />
              </div>
            </div>
          </div>
          <div className="content">
            <div className="founders-grid-wrapper">
              <h1 className="team-divider-title">All Companies</h1>
              <hr className="team-divider" />
              <div className="founders-grid-container">
                <div className="founders-grid" data-column="3">
                  {company_data
                    .sort(
                      (a, b) =>
                        a.companyName < b.companyName
                          ? -1
                          : a.companyName > b.companyName ? 1 : 0
                    )
                    .map(c => <Company key={c.companyName} company={c} />)}
                </div>
              </div>
            </div>
          </div>
          <CustomFooter />
        </div>
      </div>
    );
  }
}

class FoundersFeature extends Component {
  render() {
    return (
      <div className="founders-feature">
        <Menu />
        <div className="feature-wrapper">
          <div className="content">
            <div className="col-4 m-col-12">
              <img src={this.props.photo} />
              <div className="sidebar">
                <ul className="overview-list">
                  <li>Milestones</li>
                  {this.props.milestones.map(milestone =>
                    <li>
                      {milestone}
                    </li>
                  )}
                </ul>
                <ul className="overview-list">
                  <li>Founders</li>
                  {this.props.founders.map(milestone =>
                    <li>
                      {milestone}
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="col-8 m-col-12">
              <div className="text">
                <h1 className="feature-name">
                  {this.props.name}
                </h1>
                <h1 className="feature-company">
                  {this.props.company}
                </h1>
                <div className="feature-summary">
                  <p className="italic">
                    {this.props.summary}
                  </p>
                </div>
                <div className="feature-bio">
                  <p>
                    {this.props.bio.split('\n').map(i => {
                      return (
                        <div className="bio-line-break">
                          {i}
                        </div>
                      );
                    })}
                  </p>
                </div>
                <div className="sidebar bottom">
                  <ul className="overview-list">
                    <li>Milestones</li>
                    {this.props.milestones.map(milestone =>
                      <li>
                        {milestone}
                      </li>
                    )}
                  </ul>
                  <ul className="overview-list">
                    <li>Founders</li>
                    {this.props.founders.map(milestone =>
                      <li>
                        {milestone}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CustomFooter />
      </div>
    );
  }
}

const Company = ({ company }) =>
  <div className="founders-column">
    <div className="founders-card-container">
      <a href={company.url} className="founders-card-link">
        <div className="founders-card">
          <div className="card-text">
            <div className="">
              <h5>
                {company.companyName}
              </h5>
            </div>
            <div className="founders-card-school">
              {company.school}
            </div>
            <div className="founders-card-bio">
              {company.people}
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>;

class TeamPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCurrent: this.props.showCurrent
    };

    this.handleCurrentClick = this.handleCurrentClick.bind(this);
    this.handleAlumniClick = this.handleAlumniClick.bind(this);
  }

  handleCurrentClick() {
    this.setState({
      showCurrent: true
    });
  }

  handleAlumniClick() {
    this.setState({
      showCurrent: false
    });
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Dorm Room Fund - Team</title>
        </Helmet>
        <div className="team">
          <Menu lightColor={true} />
          <div className="team-hero-photo">
            <div className="content">
              <div className="team-hero-wrapper">
                <h1 className="hero-text light-text">
                  We support founders across the US from day zero.
                </h1>
              </div>
            </div>
          </div>
          <div className="content" id="team-content">
            <div className="team-alumni-navigation">
              <ul>
                <li
                  className="team-current-link"
                  id="team-current"
                  onClick={this.handleCurrentClick}
                >
                  <a className="menu">
                    <span
                      className={this.state.showCurrent ? 'menu-highlight' : ''}
                    >
                      Current
                    </span>
                  </a>
                </li>
                <li
                  className="team-alumni-link"
                  onClick={this.handleAlumniClick}
                >
                  <a className="menu">
                    <span
                      className={this.state.showCurrent ? '' : 'menu-highlight'}
                    >
                      Alumni
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {this.state.showCurrent ? <TeamSection /> : <AlumniSection />}
          </div>
        </div>
        <CustomFooter />
      </div>
    );
  }
}

class TeamSection extends Component {
  render() {
    return (
      <div className="team-wrapper">
        <h1 className="team-divider-title">Dorm Room Fund HQ</h1>
        <hr className="team-divider" />
        <div className="team-grid-container">
          <div className="team-grid" data-column="3">
            {team_data['national'].map(teamMember =>
              TeamMember({
                teamMember
              })
            )}
          </div>
        </div>
        <h1 className="team-divider-title">Investment</h1>
        <hr className="team-divider" />
        <h4 className="team-divider-subtitle">Boston</h4>
        <div className="team-grid-container">
          <div className="team-grid" data-column="3">
            {team_data['boston'].map(teamMember =>
              TeamMember({
                teamMember
              })
            )}
          </div>
        </div>
        <hr className="team-divider" />
        <h4 className="team-divider-subtitle">New York</h4>
        <div className="team-grid-container">
          <div className="team-grid" data-column="3">
            {team_data['newYork'].map(teamMember =>
              TeamMember({
                teamMember
              })
            )}
          </div>
        </div>
        <hr className="team-divider" />
        <h4 className="team-divider-subtitle">Philly</h4>
        <div className="team-grid-container">
          <div className="team-grid" data-column="3">
            {team_data['philly'].map(teamMember =>
              TeamMember({
                teamMember
              })
            )}
          </div>
        </div>
        <hr className="team-divider" />
        <h4 className="team-divider-subtitle">San Francisco</h4>
        <div className="team-grid-container">
          <div className="team-grid" data-column="3">
            {team_data['bayArea'].map(teamMember =>
              TeamMember({
                teamMember
              })
            )}
          </div>
        </div>
      </div>
    );
  }
}

const TeamMember = ({ teamMember }) =>
  <div className="team-column">
    <div className="team-card-container">
      <div className="team-card">
        <img
          src={require(`./img/team_compressed/${teamMember.imageFileName}`)}
          className="team-card-image"
        />
        <div className="card-text team-card-text">
          <h5 className="team-card-name">
            {teamMember.name}
          </h5>
          <div className="team-card-school">
            {teamMember.school}
          </div>
          <div className="team-card-bio">
            {teamMember.miniBio}
          </div>
        </div>
      </div>
    </div>
  </div>;

// Alumni page
class AlumniSection extends Component {
  render() {
    return (
      <div className="team-alumni-grid-wrapper">
        <ScrollBackToTop />
        <div className="team-divider-title">
          <a
            href="http://graduatefund.herokuapp.com/"
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
              href="http://graduatefund.herokuapp.com/"
              target="_blank"
              className="bodylink"
            >
              Graduate Fund
            </a>, which empowers recent graduates to start new ventures.
          </p>
        </div>
        <div className="team-alumni-grid-container">
          <div className="team-alumni-grid" data-column="3">
            {alumni_data
              .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
              .map(c => <Alumni key={c.name} alumni={c} />)}
          </div>
          <a href="#team-alumni" />
        </div>
      </div>
    );
  }
}

const Alumni = ({ alumni }) =>
  <div className="team-alumni-column">
    <div className="team-alumni-card-container">
      <div className="team-alumni-card">
        <div className="team-alumni-card-top-bar" />
        <div className="card-text">
          <div className="">
            <h5 className="team-alumni-card-name">
              {alumni.name}
              {alumni.linkedin != ''
                ? <a
                    href={alumni.linkedin}
                    target="_blank"
                    className="team-alumni-card-link"
                  >
                    <img className="icon" src={linkedin_icon} />
                  </a>
                : null}
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
  </div>;

class Menu extends Component {
  constructor(props) {
    super(props);

    document.body.style.overflow = 'initial';
    document.body.removeEventListener('touchmove', blockMove);
    this.state = {
      showMobileMenu: false,
      originalBodyOverflow: document.body.style.overflow
    };
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
  }

  handleHamburgerClick() {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    });
    document.body.style.overflow = !this.state.showMobileMenu
      ? 'hidden'
      : this.state.originalBodyOverflow;

    if (!this.state.showMobileMenu) {
      document.body.addEventListener('touchmove', blockMove);
    } else {
      document.body.removeEventListener('touchmove', blockMove);
    }
  }

  render() {
    return (
      <div>
        {this.state.showMobileMenu ? <MobileMenu /> : null}
        <nav className={this.state.showMobileMenu ? 'mobile-menu-visible' : ''}>
          <div className="content">
            <div className="wrapper">
              <div
                className={
                  'logo-container ' +
                  (this.state.showMobileMenu ? 'mobile-menu-visible' : '')
                }
              >
                {this.props.lightColor
                  ? <div>
                      <Link to="/">
                        <img
                          alt="Dorm Room Fund logo"
                          className="drf-logo-white"
                          src={drf_logo_white}
                        />
                      </Link>
                      <Link to="/">
                        <img
                          alt="Dorm Room Fund logo"
                          className="drf-logo-small-white"
                          src={drf_logo_small_white}
                        />
                      </Link>
                    </div>
                  : <div>
                      <Link to="/">
                        <img
                          alt="Dorm Room Fund logo"
                          className="drf-logo-black"
                          src={drf_logo_black}
                        />
                      </Link>
                      <Link to="/">
                        <img
                          alt="Dorm Room Fund logo"
                          className="drf-logo-small-black"
                          src={drf_logo_small_black}
                        />
                      </Link>
                    </div>}
              </div>
              <ul
                className={'links ' + (this.state.showMobileMenu ? 'lock' : '')}
              >
                <li className="hamburger-container">
                  <div
                    className="hamburger"
                    onClick={this.handleHamburgerClick}
                  >
                    <span className="hamburger-icon">
                      <span
                        className={
                          'line' +
                          (this.props.lightColor ? ' light' : '') +
                          (this.state.showMobileMenu ? ' active' : '')
                        }
                      />
                    </span>
                  </div>
                </li>
                <li>
                  <Link to="/companies">
                    <a
                      className={
                        'menu ' + (this.props.lightColor ? 'light' : '')
                      }
                    >
                      Companies
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/team">
                    <a
                      className={
                        'menu ' + (this.props.lightColor ? 'light' : '')
                      }
                    >
                      Team
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    className={'menu ' + (this.props.lightColor ? 'light' : '')}
                    target="_blank"
                    href="https://5years.dormroomfund.com"
                  >
                    Five Years
                  </a>
                </li>
                <li>
                  <a
                    className={'menu ' + (this.props.lightColor ? 'light' : '')}
                    target="_blank"
                    href="https://vcwiz.co"
                  >
                    VCWiz
                  </a>
                </li>
                <li>
                  <Link to="/apply">
                    <a
                      className={
                        this.props.lightColor
                          ? 'button-rounded-white'
                          : 'button-rounded-blue'
                      }
                    >
                      Apply Now
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

class MobileMenu extends Component {
  render() {
    return (
      <div className="mobile-nav">
        <div className="mobile-wrapper">
          <div>
            <ul>
              <li>
                <Link to="/companies">
                  <a className="menu menu-link">Companies</a>
                </Link>
              </li>
              <li>
                <Link to="/team">
                  <a className="menu menu-link">Team</a>
                </Link>
              </li>
              <li>
                <a
                  className="menu menu-link"
                  href="https://5years.dormroomfund.com"
                >
                  Five Years
                </a>
              </li>
              <li>
                <a className="menu menu-link" href="https://vcwiz.co">
                  VCWiz
                </a>
              </li>
              <li>
                <Link to="/apply">
                  <a className="menu menu-link">Apply Now</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

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
                  We invest $20,000 through a{' '}
                  <a
                    className="bodylink"
                    target="_blank"
                    href="https://medium.com/@joshephraim/complete-guide-to-understanding-safes-how-we-invest-at-dorm-room-fund-bbb37855ec4e"
                  >
                    SAFE
                  </a>—the most founder-friendly terms that exist.{' '}
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
              <Link to="/companies">
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
              <Link to="/team">
                <a className="colored-section-button button-rounded-white">
                  Our Team
                </a>
              </Link>
            </div>
          </div>
          <img className="community-image" src={community_photo} />
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
            <Link to="/apply">
              <a className="apply-section-button button-rounded-blue">
                Apply Now
              </a>
            </Link>
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
          <object className="ramp" data={ramp} type="image/svg+xml" />
          <object
            className="ramp-mobile"
            data={ramp_mobile}
            type="image/svg+xml"
          />
        </div>
        <div className="section-logos">
          <div className="content">
            <div className="col-12">
              <div className="logos-wrapper">
                <h1>
                  We&#39;ve invested in 200 startups who&#39;ve raised $400
                  million from:
                </h1>
                <div className="logos">
                  <div className="content">
                    <div className="col-10 col-centered m-col-12">
                      <div className="content">
                        <div className="col-3 m-col-6">
                          <object
                            className="logo"
                            data={investor_firstround}
                            type="image/svg+xml"
                          />
                        </div>
                        <div className="col-3 m-col-6">
                          <object
                            className="logo"
                            data={investor_gv}
                            type="image/svg+xml"
                          />
                        </div>
                        <div className="col-3 m-col-6">
                          <object className="logo" data={investor_sequoia} />
                        </div>
                        <div className="col-3 m-col-6">
                          <object
                            className="logo"
                            data={investor_yc}
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
                      <img className="medium-article" src={article_2} />
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
                      <img className="medium-article" src={article_1} />
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
                      <img className="medium-article" src={article_3} />
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
        {!this.state.submitted
          ? <div>
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
                <p>
                  {this.state.message}
                </p>
              </div>
            </div>
          : <h1>Thanks!</h1>}
      </form>
    );
  }
}

class CustomFooter extends Component {
  render() {
    return (
      <footer>
        <div className="content">
          <div className="wrapper">
            <div className="vertically-centered">
              <h2 className="title">© 2018 Dorm Room Fund.</h2>
              <h2 className="title-mobile">© 2018 DRF.</h2>
              <ul className="links">
                <li>
                  <a
                    className="menu"
                    target="_blank"
                    href="https://drive.google.com/drive/folders/13kIXHJjCRs5nfrqiww5aq_e0mzrJOY6J?usp=sharing"
                  >
                    <div className="link-box">
                      <img className="icon" src={kit_icon} />
                      <span className="link-text">Press Kit</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="menu" href="https://medium.com/@dormroomfund">
                    <div className="link-box">
                      <img className="icon" src={medium_icon} />
                      <span className="link-text">Medium</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="menu" href="https://twitter.com/DormRoomFund">
                    <div className="link-box">
                      <img className="icon" src={twitter_icon} />
                      <span className="link-text">Twitter</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export default App;
