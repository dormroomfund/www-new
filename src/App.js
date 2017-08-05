import React, { Component } from 'react';
import drf_logo_black from './img/drf-logo-black.svg'
import drf_logo_small_black from './img/drf-logo-small-black.svg'
import ramp from './img/ramp.svg'
import ramp_mobile from './img/ramp-mobile.svg'
import investor_firstround from './img/investor-firstround.svg'
import investor_gv from './img/investor-gv.png'
import investor_sequoia from './img/investor-sequoia.svg'
import investor_yc from './img/investor-yc.svg'
import community_photo from './img/community-photo.png'
import twitter_icon from './img/twitter-icon.svg'
import medium_icon from './img/medium-icon.svg'

import './css/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
              <Hero />
            </div>
        );
    }
}

class Menu extends Component {
  constructor(props) {
    super(props);
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
              <img alt="Dorm Room Fund logo" className="drf-logo-black" src={drf_logo_black}></img>
              <img alt="Dorm Room Fund logo" className="drf-logo-small-black" src={drf_logo_small_black}></img>
              <ul className="links">
                  <li className="hamburger-container">
                  <div className="hamburger" onClick={this.handleHamburgerClick}>
                    <span className="hamburger-icon"><span className= {"line" + (this.state.showMobileMenu ? ' active' : '')}></span></span>
                  </div>
                  </li>
                  <li>
                      <a href="/founders/">Our Founders</a>
                  </li>
                  <li>
                      <a href="/team/">Our Team</a>
                  </li>
                  <li>
                      <a href="/faq">FAQS</a>
                  </li>
                  <li>
                      <a href="/apply" className="button-rounded-blue">Apply Now</a>
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
    <ul>
      <li><a className="menu-link">Our Founders</a></li>
      <li><a className="menu-link">Our Team</a></li>
      <li><a className="menu-link">FAQS</a></li>
      <li><a className="menu-link">Apply Now</a></li>
    </ul>
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
      <div className="col-4 m-col-12"><div className="value-section-card"><h3>Community</h3><p className="value-section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis.</p></div></div>
      <div className="col-4 m-col-12"><div className="value-section-card"><h3>Mentors</h3><p className="value-section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis.</p></div></div>
      <div className="col-4 m-col-12"><div className="value-section-card"><h3>$20,000</h3><p className="value-section-text">We invest $20,000 on an uncapped convertible note. Yup, these are the most founder-friendly terms that exist. </p></div></div>
      </div>
      </div>
      </div>
    )
  }
}

class Founders extends Component {
  render(){
    return(
    <div className="bg-colored-blue founders-section">
    <div className="content">
    <div className="founders-wrapper">
    <div>
    <h1 className="colored-section-header light-text">Our founders, our family.</h1>
    <p className="colored-section-subheader light-text">Since 2012, we have helped our companies grow exponentially. The majority of founders have gone on to raise seed rounds, and many are now running teams with 100+ employees.</p>
    <a className="colored-section-button button-rounded-white">Our Founders</a>
    </div>
    </div>
    <div className="founders-image-container">
    <img className="founders-image" src={community_photo}></img>
    <div className="founders-image-overlay"><p className="founders-image-caption light-text">Chris Gray, Drexel ’12, Founder of Scholly</p></div>
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
    <h1 className="colored-section-header light-text">For students, by students.</h1>
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
      <h2>What are you waiting for? Apply now.</h2>
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
      <Menu/>
      <div className="content">
      <div className="hero-wrapper">
      <h1 className="hero-header">Hi. We’re Dorm Room Fund—the best way for student founders to accelerate their startup.</h1>
      <p className="hero-subheader">Our community provides students a strong network of founders and investors, expert mentors who have built influential tech companies, and a $20,000 check.</p>
      </div>
      </div>
      <object className="ramp" data={ramp} type="image/svg+xml"></object>
      <object className="ramp-mobile" data={ramp_mobile} type="image/svg+xml"></object>
      </div>
      <div className="section-logos">
      <div className="content">
      <div className="col-12">
      <p className="hero-investors-text">We’ve invested in 150+ startups that have gone on to raise over $300 million from investors, including:</p>
      <div className="logos">
      <div className="content">
      <div className="col-10 col-centered m-col-12">
      <div className="content">
      <div className="col-3 m-col-6"><object className="logo" data={investor_firstround} type="image/svg+xml"></object></div>
      <div className="col-3 m-col-6"><img className="logo" src={investor_gv}></img></div>
      <div className="col-3 m-col-6"><object className="logo" data={investor_sequoia}></object></div>
      <div className="col-3 m-col-6"><object className="logo" data={investor_yc} type="image/svg+xml"></object></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <Community/>
      <Value/>
      <Founders/>
      <Apply/>
      <Resources/>
      <CustomFooter/>
      </div>
      )
  }
}

class Resources extends Component {
  render(){
    return(
      <div className="resources-section">
      <div className="content">
      <h2 className="resources-section-header">Stay Up to Date with our Resources</h2>
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
      <li><a><div className="link-box"><img className="icon" src={medium_icon}></img><span className="link-text">Medium</span></div></a>
      </li>
      <li><a><div className="link-box"><img className="icon" src={twitter_icon}></img><span className="link-text">Twitter</span></div></a>
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
