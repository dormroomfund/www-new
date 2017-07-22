import React, { Component } from 'react';
import logo from './logo.svg';
import drf_logo_black from './img/drf-logo-black.svg'
import './css/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
              <Menu />

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
        );
    }
}

class Menu extends Component {
    render() {
        return (
            <div className="content">
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

export default App;