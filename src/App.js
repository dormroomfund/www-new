import React, { Component } from 'react';
import drf_logo_black from './img/drf-logo-black.svg'
import ramp from './img/ramp.svg'

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
    render() {
        return (
          <nav>
            <div className="content">
              <div className="col-12">
                  <img alt="Dorm Room Fund logo" className="drf-logo-black" src={drf_logo_black}></img>
                  <ul className="links">
                      <li>
                          <a className="work-link" href="/founders/">Our Founders</a>
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
        );
    }
}

class Hero extends Component {
  render(){
    return(
      <div>
      <Menu/>
      <div className="content">
      <div className="hero-wrapper">
      <h1 className="hero-header">Hi. We’re Dorm Room Fund, the best way for student founders to accelerate their startup.</h1>
      <p className="hero-subheader">Our community provides founders a stong network of other founders and VCs, access to dozens of mentors, business development deals, and $20,000.</p>
      </div>
      </div>
      <img className="ramp" src={ramp}></img>
      </div>
    )
  }
}

export default App;