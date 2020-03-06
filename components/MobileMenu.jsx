import { Component } from 'react';
import Link from 'next/link';

export default class MobileMenu extends Component {
  render() {
    return (
      <div className="mobile-nav">
        <div className="mobile-wrapper">
          <div>
            <ul>
              <li>
                <Link href="/companies">
                  <a className="menu menu-link">Companies</a>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <a className="menu menu-link">Team</a>
                </Link>
              </li>
              <li>
                <a
                  className="menu menu-link"
                  href="https://blueprint.dormroomfund.com"
                >
                  Blueprint
                </a>
              </li>
              <li>
                <a
                  className="menu menu-link"
                  href="https://blog.dormroomfund.com"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="menu menu-link"
                  href="https://anchor.fm/dormroomfund"
                >
                  Podcast
                </a>
              </li>
              <li>
                <Link href="/apply">
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
