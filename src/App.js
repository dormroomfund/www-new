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
      </div>
    )
  }
}

export default App;