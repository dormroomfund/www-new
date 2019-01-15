import { Component } from 'react';

function blockMove(e) {
  e.preventDefault();
}

export default class Menu extends Component {
  constructor(props) {
    super(props);

    document.body.style.overflow = 'initial';
    document.body.removeEventListener('touchmove', blockMove);
    this.state = {
      showMobileMenu: false,
      originalBodyOverflow: document.body.style.overflow,
    };
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
  }

  handleHamburgerClick() {
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
  }

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
                    <Link to="/">
                      <img
                        alt="Dorm Room Fund logo"
                        className="drf-logo-white"
                        src={drf_logo_white}
                      />
                    </Link>
                    <Link to="/">
                      <img
                        alt="Dorm Room Fund logo"
                        className="drf-logo-small-white"
                        src={drf_logo_small_white}
                      />
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link to="/">
                      <img
                        alt="Dorm Room Fund logo"
                        className="drf-logo-black"
                        src={drf_logo_black}
                      />
                    </Link>
                    <Link to="/">
                      <img
                        alt="Dorm Room Fund logo"
                        className="drf-logo-small-black"
                        src={drf_logo_small_black}
                      />
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
                  <Link to="/companies">
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
                  <Link to="/team">
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
                    href="https://5years.dormroomfund.com"
                  >
                    Five Years
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
                  <Link to="/apply">
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
