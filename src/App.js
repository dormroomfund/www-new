import React, { Component } from 'react';
import drf_logo_black from './img/drf-logo-black.svg'
import ramp from './img/ramp.svg'
import investor_firstround from './img/investor-firstround.svg'
import investor_gv from './img/investor-gv.png'
import investor_sequoia from './img/investor-sequoia.png'
import investor_yc from './img/investor-yc.svg'

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
      <object className="ramp" data={ramp} type="image/svg+xml"></object>
      <div className="section-logos">
      <div className="content">
      <div className="col-12">
      <h1 className="hero-investors-text">We’ve invested in 130+ startups that have gone on to raise over $XYZ Millon from investors, including:</h1>
      <div className="logos">
      <div className="content">
      <div className="col-10 col-centered m-col-12 ">
      <div className="content">
      <div className="col-3 m-col-6"><object className="logo" data={investor_firstround} type="image/svg+xml"></object></div>
      <div className="col-3 m-col-6"><img className="logo" src={investor_gv}></img></div>
      <div className="col-3 m-col-6"><img className="logo" src={investor_sequoia}></img></div>
      <div className="col-3 m-col-6"><object className="logo" data={investor_yc} type="image/svg+xml"></object></div>
      <div className="col-3 m-col-6"><object className="logo" data={investor_yc} type="image/svg+xml"></object></div>
      <div className="col-3 m-col-6"><object className="logo" data={investor_yc} type="image/svg+xml"></object></div>
      <div className="col-3 m-col-6"><object className="logo" data={investor_yc} type="image/svg+xml"></object></div>
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

export default App;