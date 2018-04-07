import React, { Component } from 'react';
import Link from 'next/link';

function blockMove(e) {
  e.preventDefault();
}

class MobileMenu extends Component {
  render() {
    return (
      <div className="mobile-nav">
        <div className="mobile-wrapper">
          <div>
            <ul>
              <li>
                <Link href="/founders">
                  <a className="menu menu-link">Our Founders</a>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <a className="menu menu-link">Our Team</a>
                </Link>
              </li>
              <li>
                <a
                  className="menu menu-link"
                  href="https://5years.dormroomfund.com"
                >
                  5 Years
                </a>
              </li>
              <li>
                <a className="menu menu-link" href="https://vcwiz.co">
                  VCWiz
                </a>
              </li>
              <li>
                <a
                  className="menu menu-link"
                  target="_blank"
                  href="https://dormroomfund.typeform.com/to/DsPlYB"
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMobileMenu: false
    };
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
  }

  componentDidMount() {
    document.body.style.overflow = 'initial';
    document.body.removeEventListener('touchmove', blockMove);
    this.setState({
      originalBodyOverflow: document.body.style.overflow
    });
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
    const style = this.props.relativeNav ? { position: 'relative' } : {};

    return (
      <div>
        {this.state.showMobileMenu ? <MobileMenu /> : null}
        <nav
          style={style}
          className={this.state.showMobileMenu ? 'mobile-menu-visible' : ''}
        >
          <div className="content">
            <div className="wrapper">
              <div
                className={
                  'logo-container ' +
                  (this.state.showMobileMenu ? 'mobile-menu-visible' : '')
                }
              >
                {this.props.lightColor ? (
                  <div>
                    <Link prefetch href="/">
                      <a>
                        <img
                          alt="Dorm Room Fund logo"
                          className="drf-logo-white"
                          src="/static/img/drf-logo-white.svg"
                        />
                      </a>
                    </Link>
                    <Link prefetch href="/">
                      <a>
                        <img
                          alt="Dorm Room Fund logo"
                          className="drf-logo-small-white"
                          src="/static/img/drf-logo-small-white.svg"
                        />
                      </a>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link prefetch href="/">
                      <a>
                        <img
                          alt="Dorm Room Fund logo"
                          className="drf-logo-black"
                          src="/static/img/drf-logo-black.svg"
                        />
                      </a>
                    </Link>
                    <Link prefetch href="/">
                      <a>
                        <img
                          alt="Dorm Room Fund logo"
                          className="drf-logo-small-black"
                          src="/static/img/drf-logo-small-black.svg"
                        />
                      </a>
                    </Link>
                  </div>
                )}
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
                  <Link prefetch href="/founders">
                    <a
                      className={
                        'menu ' + (this.props.lightColor ? 'light' : '')
                      }
                    >
                      Our Founders
                    </a>
                  </Link>
                </li>
                <li>
                  <Link prefetch href="/team">
                    <a
                      className={
                        'menu ' + (this.props.lightColor ? 'light' : '')
                      }
                    >
                      Our Team
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    className={'menu ' + (this.props.lightColor ? 'light' : '')}
                    target="_blank"
                    href="https://5years.dormroomfund.com"
                  >
                    5 Years
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
                  <a
                    className={
                      this.props.lightColor
                        ? 'button-rounded-white'
                        : 'button-rounded-blue'
                    }
                    target="_blank"
                    href="https://dormroomfund.typeform.com/to/DsPlYB"
                  >
                    Apply Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
