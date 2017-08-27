import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import drf_logo_black from './img/drf-logo-black.svg'
import drf_logo_small_black from './img/drf-logo-small-black.svg'
import drf_logo_white from './img/drf-logo-white.svg'
import drf_logo_small_white from './img/drf-logo-small-white.svg'


import ramp from './img/ramp.svg'
import ramp_mobile from './img/ramp-mobile.svg'
import investor_firstround from './img/investor-firstround.svg'
import investor_gv from './img/investor-gv.svg'
import investor_sequoia from './img/investor-sequoia.svg'
import investor_yc from './img/investor-yc.svg'
import community_photo from './img/community-photo.png'
import community_photo_blue from './img/community-photo-blue.png'

import twitter_icon from './img/twitter-icon.svg'
import medium_icon from './img/medium-icon.svg'

import founder from './img/founders/blockstack2.jpg'

import team_data from './team.json';
import company_data from './companies.json';


import './css/App.css';


class App extends Component {
    render() {
        return (
          <Router>
            <div className="App">
              <Route exact path="/" component={Home}/>
              <Route path="/founders" component={Founders}/>
              <Route path="/team" component={Team}/>
            </div>
          </Router>
        );
    }
}

/* Pages */
class Home extends Component {
  render() {
    return(
      <div>
      <Menu lightColor={false}/>
      <Hero/>
      <Community/>
      <Value/>
      <FoundersSection/>
      <Apply/>
      <Resources/>
      <CustomFooter/>
      </div>
    )
  }
}

class Founders extends Component {

  getSchoolCompanies(){
    var schools = [];

    // Get all unique schools
    for (var i = 0; i < company_data.length; i++){
      console.log(company_data[i])
      if (!schools.includes(company_data[i]["school"])){
        schools.push(company_data[i]["school"]);
      }
    }

    console.log(schools)

    // Create school-by-school components
    var output = schools.map(function (school){

      var schoolCompanies = company_data.filter(function(company){
        return company["school"] == school;
      })

      return CompanySection({ schoolCompanies })
    })

    return output
  }

  render() {
    return (
      <div className="founders">  
      <Menu lightColor={true}/>
      <div className="founders-hero-photo">
      <div className="content">
      <div className="founders-hero-wrapper">
            <div className="founders-hero-grid">
            <div className="left-part">
              <div className="left-first-row">
                <div className="left-first-row-first-half"></div>
                <div className="left-first-row-second-half"></div>
              </div>
              <div className="left-second-row"></div>
            </div>
            <div className="right-part"></div>
            </div>
      </div>
      </div>
      </div>
      <div className="content">
      <div className="founders-grid-wrapper">
      <h1 className="team-divider-title">Our Founders</h1>
      <hr className="team-divider"/>
      <div className="founders-grid-container">
      <div className="founders-grid" data-column="3">
      {this.getSchoolCompanies()}
      </div>  
      </div>
      </div>
      </div>
      <CustomFooter/>
      </div>
    )
  }
}

const CompanySection = ({ schoolCompanies }) => (
  schoolCompanies.map(function (company, index, array){

    var first = index == 0 ? true : false

    var last = index == array.length - 1;
    console.log(last)

    return Company({ company, first, last})
  })
)

const Company = ({ company, first, last }) => (
  <div className="founders-column">
  <div className="founders-card-container">
  <div className={"founders-line" + (last ? " last" : "")} >
  { first ? <span className="founders-school">{company.school}</span>: null }
  </div>
  { first ? <h4 className="founders-school-mobile">{company.school}</h4> : null }
  <a href={company.url} className="founders-card-link">
  <div className="founders-card">
  <div className="card-text">
  <div className=""><h5>{company.companyName}</h5></div>
  <div className="founders-card-bio">{company.people}</div>
  </div>
  </div>
  </a>
  </div>
  </div>
)

class Team extends Component {
  render() {
    return (
      <div className="team">
      <Menu lightColor={true}/>
      <div className="team-hero-photo">
      <div className="content">
      <div className="team-hero-wrapper">
      <h1 className="light-text">Dorm Room Fund is run 100% for students, 100% by students.</h1>
      </div>
      </div>
      </div>
      <div className="content">
      <div className="team-wrapper">
      <h1 className="team-divider-title">Brand & Strategy</h1>
      <hr className="team-divider"/>
      <div className="team-grid-container">
      <div className="team-grid" data-column="3">
      {team_data["national"].map(teamMember => TeamMember({ teamMember }))}
      </div>
      </div>
      <h1 className="team-divider-title">Investment</h1>
      <hr className="team-divider"/>
      <h4 className="team-divider-subtitle">Boston</h4>
      <div className="team-grid-container">
      <div className="team-grid" data-column="3">
      {team_data["boston"].map(teamMember => TeamMember({ teamMember }))}
      </div>
      </div>
      <hr className="team-divider"/>
      <h4 className="team-divider-subtitle">New York</h4>
      <div className="team-grid-container">
      <div className="team-grid" data-column="3">
      {team_data["newYork"].map(teamMember => TeamMember({ teamMember }))}
      </div>
      </div>
      <hr className="team-divider"/>
      <h4 className="team-divider-subtitle">Philly</h4>
      <div className="team-grid-container">
      <div className="team-grid" data-column="3">
      {team_data["philly"].map(teamMember => TeamMember({ teamMember }))}
      </div>
      </div>
      <hr className="team-divider"/>
      <h4 className="team-divider-subtitle">Bay Area</h4>
      <div className="team-grid-container">
      <div className="team-grid" data-column="3">
      {team_data["bayArea"].map(teamMember => TeamMember({ teamMember }))}
      </div>
      </div>
      </div>
      </div>
      <CustomFooter/>
      </div>
    )
  }
}

const TeamMember = ({ teamMember }) => (
  <div className="team-column">
  <div className="team-card-container">
    <div className="team-card">
    <img src={require(`./img/team/${teamMember.imageFileName}`)} className="team-card-image"></img>
    <div className="card-text team-card-text">
      <h5 className="team-card-name">{teamMember.name}</h5>
      <div className="team-card-school">{teamMember.school}</div>
      <div className="team-card-bio">{teamMember.miniBio}</div>
    </div>
    </div>
    </div>
  </div>
  )

class Menu extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.lightColor)
    this.state = {showMobileMenu: false, originalBodyOverflow: document.body.style.overflow};
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
  }

  handleHamburgerClick(){
    this.setState({showMobileMenu: !this.state.showMobileMenu})
    document.body.style.overflow = !this.state.showMobileMenu ? 'hidden' : this.state.originalBodyOverflow;
  }
  
  render() {
    return (
      <div>
      { this.state.showMobileMenu ? <MobileMenu /> : null }
      <nav>
        <div className="content">
          <div className="wrapper">
            { this.props.lightColor ?
              <div>
              <Link to="/"><img alt="Dorm Room Fund logo" className="drf-logo-white" src={drf_logo_white}></img></Link>
              <Link to="/"><img alt="Dorm Room Fund logo" className="drf-logo-small-white" src={drf_logo_small_white}></img></Link>
              </div>
              :
              <div>
              <Link to="/"><img alt="Dorm Room Fund logo" className="drf-logo-black" src={drf_logo_black}></img></Link>
              <Link to="/"><img alt="Dorm Room Fund logo" className="drf-logo-small-black" src={drf_logo_small_black}></img></Link>
              </div>
            }
              <ul className="links">
                  <li className="hamburger-container">
                  <div className="hamburger" onClick={this.handleHamburgerClick}>
                    <span className="hamburger-icon"><span className={"line" + (this.props.lightColor ? ' light' : '') + (this.state.showMobileMenu ? ' active' : '')}></span></span>
                  </div>
                  </li>
                  <li>
                      <Link to="/founders"><a className={(this.props.lightColor ? 'light' : '')}>Our Founders</a></Link>
                  </li>
                  <li>
                      <Link to="/team"><a className={(this.props.lightColor ? 'light' : '')}>Our Team</a></Link>
                  </li>
                  <li>
                      <a className={(this.props.lightColor ? 'light' : '')} href="https://medium.com/best-of-dorm-room-fund/dorm-room-fund-ask-us-anything-256c23cad699">FAQS</a>
                  </li>
                  <li>
                      <a className={(this.props.lightColor ? 'light' : '')} href="https://dormroomfund.typeform.com/to/DsPlYB" className="button-rounded-blue">Apply Now</a>
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

  render(){
    return(
    <div className="mobile-nav">
    <div className="mobile-wrapper">
    <div>
    <ul>
      <li><Link to="/founders"><a className="menu-link">Our Founders</a></Link></li>
      <li><Link to="/team"><a className="menu-link">Our Team</a></Link></li>
      <li><a className="menu-link" href="https://medium.com/best-of-dorm-room-fund/dorm-room-fund-ask-us-anything-256c23cad699">FAQS</a></li>
      <li><a className="menu-link" href="https://dormroomfund.typeform.com/to/DsPlYB">Apply Now</a></li>
    </ul>
    </div>
    </div>
    </div>
    )
  }
}

class Value extends Component {
  render(){
    return(
      <div className="value-section">
      <div className="content">
      <h2>So, what do Dorm Room Fund founders recieve?</h2>
      <p className="value-section-subheader">Everything we do is to designed to help student founders go from the earliest stage to the seed stage.</p>
      <div className="value-section-cards content">
      <div className="col-4 m-col-12"><div className="value-section-card"><h3>Community</h3><p className="value-section-text">300+ fellow founders, 50+ world-class mentors, dozens of intimate events with industry leaders and investors.</p></div></div>
      <div className="col-4 m-col-12"><div className="value-section-card"><h3>Mentors</h3><p className="value-section-text">Access to world-class advisors, including the founders of Venmo, YouTube, Buzzfeed, and Quora.</p></div></div>
      <div className="col-4 m-col-12"><div className="value-section-card"><h3>$20,000</h3><p className="value-section-text">We invest $20,000 on an uncapped convertible note—the most founder-friendly terms that exist. </p></div></div>
      </div>
      </div>
      </div>
    )
  }
}

class FoundersSection extends Component {
  render(){
    return(
    <div className="bg-colored-blue founders-section">
    <div className="content">
    <div className="founders-wrapper">
    <div>
    <h1 className="colored-section-header light-text">Our founders, our family.</h1>
    <p className="colored-section-subheader light-text">Since our first investment in 2012, the majority of our founders have raised further rounds of funding, running teams of up to 100+ employees. By helping our founders learn the ins and outs of fundraising, launch strategy, growth, and hiring, we’re just as invested in your mission as you are.</p>
    <a className="colored-section-button button-rounded-white">Our Founders</a>
    </div>
    </div>
    <div className="founders-image-container">
    <img className="founders-image" src={founder}></img>
    <div className="founders-image-overlay"><p className="founders-image-caption light-text">Muneeb Ali, Blockstack (Princeton PhD '17)</p></div>
    </div>
    </div>
    </div>
    )
  }

}

class Community extends Component {
  render(){
   return(
    <div className="bg-colored-blue community-section">
    <div className="content">
    <div className="community-wrapper">
    <div>
    <h1 className="colored-section-header light-text">Powered by First Round.</h1>
    <p className="colored-section-subheader light-text">We're a student-run venture fund backed by First Round. We invest in startups where at least one person on the founding team is a student (undergraduate or graduate). Our investment team is run completely by students who are passionate about helping our peers start companies.</p>
    <a className="colored-section-button button-rounded-white">Our Team</a>
    </div>
    </div>
    <img className="community-image" src={community_photo}></img>
    </div>
    </div>
    )
  }
}

class Apply extends Component {
  render(){
    return( 
      <div className="value-section">
      <div className="content">
      <h2>Working on something big? Let's talk.</h2>
      <p className="apply-section-subheader">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis iaculis lorem, vel viverra.</p>
      <a className="apply-section-button button-rounded-blue">Apply Now</a>
      </div>
      </div>
      )
  }
}

class Hero extends Component {
  render(){
    return(
      <div>
      <div className="hero-container">
      <div className="content">
      <div className="hero-wrapper">
      <h1 className="hero-header">Hi. We’re Dorm Room Fund—the best way for student founders to accelerate their startup.</h1>
      <p className="hero-subheader">Powered by First Round, we provide our community with a strong network of investors, access to world-class mentors, and a $20,000 check.</p>
      </div>
      </div>
      <object className="ramp" data={ramp} type="image/svg+xml"></object>
      <object className="ramp-mobile" data={ramp_mobile} type="image/svg+xml"></object>
      </div>
      <div className="section-logos">
      <div className="content">
      <div className="col-12">
      <h1>150+ startups, over $300 million raised from:</h1>
      <div className="logos">
      <div className="content">
      <div className="col-10 col-centered m-col-12">
      <div className="content">
      <div className="col-3 m-col-6"><object className="logo" data={investor_firstround} type="image/svg+xml"></object></div>
      <div className="col-3 m-col-6"><object className="logo" data={investor_gv} type="image/svg+xml"></object></div>
      <div className="col-3 m-col-6"><object className="logo" data={investor_sequoia}></object></div>
      <div className="col-3 m-col-6"><object className="logo" data={investor_yc} type="image/svg+xml"></object></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      )
  }
}

class Resources extends Component {
  render(){
    return(
      <div className="resources-section">
      <div className="content">
      <h2 className="resources-section-header">Not ready yet? We'd still love to help.</h2>
      <NameForm/>
      </div>
      </div>
    )
  }
}

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', school: ''};

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSchoolChange = this.handleSchoolChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleSchoolChange(event) {
    this.setState({school: event.target.value});
  }

  handleSubmit(event) {
    alert('An email was submitted: ' + this.state.email);
    event.preventDefault();
  }

  render() {
    return (
      <form className="resources-section-form" onSubmit={this.handleSubmit}>
      <div className="container">
        <input className="email" placeholder="Email Address" type="text" value={this.state.email} onChange={this.handleEmailChange} />
        <input className="school" placeholder="School" type="text" value={this.state.school} onChange={this.handleSchoolChange} />
        <input type="submit" value="Sign Up" />
      </div>
      </form>
    );
  }
}

class CustomFooter extends Component {
  render(){
    return(
    <footer>
    <div className="content">
    <div className="wrapper">
    <div className="vertically-centered">
    <h2 className="title">© 2017 Dorm Room Fund.</h2>
    <h2 className="title-mobile">© 2017 DRF.</h2>
    <ul className="links">
      <li><a href="https://medium.com/@dormroomfund"><div className="link-box"><img className="icon" src={medium_icon}></img><span className="link-text">Medium</span></div></a>
      </li>
      <li><a href="https://twitter.com/DormRoomFund"><div className="link-box"><img className="icon" src={twitter_icon}></img><span className="link-text">Twitter</span></div></a>
      </li>
    </ul>
    </div>
    </div>
    </div>
    </footer>
    )
  }
}

export default App;
