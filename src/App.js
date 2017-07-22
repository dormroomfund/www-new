import React, { Component } from 'react';
import logo from './logo.svg';
import drf_logo_black from './img/drf-logo-black.svg'
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
            <div className="nav content">
              <div className="col-12">
                  <img alt="Dorm Room Fund logo" className="drf-logo-black" src={drf_logo_black}></img>
                  <ul className="links">
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
                          <a href="/apply">Apply Now</a>
                      </li>
                  </ul>
              </div>
          </div>
        );
    }
}

class Hero extends Component {
  render(){
    return(
      <div>
      <menu></>
      </div>
  }
}

export default App;