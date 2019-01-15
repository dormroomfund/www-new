import { Component } from 'react';

export default class MobileMenu extends Component {
  render() {
    return (
      <div className="mobile-nav">
        <div className="mobile-wrapper">
          <div>
            <ul>
              <li>
                <Link to="/companies">
                  <a className="menu menu-link">Companies</a>
                </Link>
              </li>
              <li>
                <Link to="/team">
                  <a className="menu menu-link">Team</a>
                </Link>
              </li>
              <li>
                <a
                  className="menu menu-link"
                  href="https://5years.dormroomfund.com"
                >
                  Five Years
                </a>
              </li>
              <li>
                <a className="menu menu-link" href="https://vcwiz.co">
                  VCWiz
                </a>
              </li>
              <li>
                <Link to="/apply">
                  <a className="menu menu-link">Apply Now</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
