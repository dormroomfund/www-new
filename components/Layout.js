import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Menu from './Menu';
import '../styles/App.scss';

const CustomFooter = () => (
  <footer>
    <div className="content">
      <div className="wrapper">
        <div className="vertically-centered">
          <h2 className="title">© 2018 Dorm Room Fund.</h2>
          <h2 className="title-mobile">© 2018 DRF.</h2>
          <ul className="links">
            <li>
              <a className="menu" href="https://medium.com/@dormroomfund">
                <div className="link-box">
                  <img className="icon" src="/static/img/medium-icon.svg" />
                  <span className="link-text">Medium</span>
                </div>
              </a>
            </li>
            <li>
              <a className="menu" href="https://twitter.com/DormRoomFund">
                <div className="link-box">
                  <img className="icon" src="/static/img/twitter-icon.svg" />
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

export default class Layout extends Component {
  static defaultProps = {
    lightColor: false,
    relativeNav: false
  };

  componentDidMount() {
    this.breakFrame();
    this.initGA();
    this.initProductHunt();
  }

  breakFrame() {
    if (top.location != location) {
      top.location.href = document.location.href;
    }
    if (process.env.REACT_APP_DOMAIN) {
      if (document.domain != process.env.REACT_APP_DOMAIN) {
        document.location.hostname = process.env.REACT_APP_DOMAIN;
      }
    }
  }

  initGA() {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize('UA-105612774-1');
      window.GA_INITIALIZED = true;
    }
    ReactGA.pageview(window.location.pathname);
  }

  initProductHunt() {
    if (process.env.REACT_APP_PH_APP) {
      if (!window.productHuntUpcoming) {
        window.productHuntUpcoming = {
          appId: process.env.REACT_APP_PH_APP,
          position: 'bottomRight'
        };

        (function(doc, scr, src, a, b) {
          a = doc.createElement(scr);
          b = doc.getElementsByTagName(scr)[0];
          a.async = true;
          a.src = src;
          b.parentNode.insertBefore(a, b);
        })(
          document,
          'script',
          'https://assets.producthunt.com/assets/upwigloader.js'
        );
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Menu
          lightColor={this.props.lightColor}
          relativeNav={this.props.relativeNav}
        />
        {this.props.children}
        <CustomFooter />
      </div>
    );
  }
}
