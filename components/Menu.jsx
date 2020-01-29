import { Component } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import drf_logo_white from '../static/img/drf-logo-white.svg';
import drf_logo_small_white from '../static/img/drf-logo-small-white.svg';
import drf_logo_black from '../static/img/drf-logo-black.svg';
import drf_logo_small_black from '../static/img/drf-logo-small-black.svg';

function blockMove(e) {
  e.preventDefault();
}

export default class Menu extends Component {
  state = {
    showMobileMenu: false,
    originalBodyOverflow: '',
  };

  componentDidMount() {
    document.body.style.overflow = 'initial';
    document.body.removeEventListener('touchmove', blockMove);

    this.setState({
      originalBodyOverflow: document.body.style.overflow,
    });
  }

  handleHamburgerClick = () => {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu,
    });
    document.body.style.overflow = !this.state.showMobileMenu
      ? 'hidden'
      : this.state.originalBodyOverflow;

    if (!this.state.showMobileMenu) {
      document.body.addEventListener('touchmove', blockMove);
    } else {
      document.body.removeEventListener('touchmove', blockMove);
    }
  };

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
                {this.props.lightColor ? (
                  <div>
                    <Link href="/" prefetch>
                      <a>
                        <img
                          alt="Dorm Room Fund logo"
                          className="drf-logo-white"
                          src={drf_logo_white}
                        />
                      </a>
                    </Link>
                    <Link href="/" prefetch>
                      <a>
                        <img
                          alt="Dorm Room Fund logo"
                          className="drf-logo-small-white"
                          src={drf_logo_small_white}
                        />
                      </a>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link href="/" prefetch>
                      <a>
                        <img
                          alt="Dorm Room Fund logo"
                          className="drf-logo-black"
                          src={drf_logo_black}
                        />
                      </a>
                    </Link>
                    <Link href="/" prefetch>
                      <a>
                        <img
                          alt="Dorm Room Fund logo"
                          className="drf-logo-small-black"
                          src={drf_logo_small_black}
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
                  <Link href="/companies">
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
                  <Link href="/team">
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
                    href="https://ebook.dormroomfund.com"
                  >
                    Ebook
                  </a>
                </li>
                <li>
                  <a
                    className={'menu ' + (this.props.lightColor ? 'light' : '')}
                    target="_blank"
                    href="https://www.notion.so/dormroomfund/528f475499b2424ea9839ca87344c804?v=c522c87778014443a79ffcb99ec15013"
                  >
                    Jobs
                  </a>
                </li>
                <li>
                  <Link href="/apply">
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
