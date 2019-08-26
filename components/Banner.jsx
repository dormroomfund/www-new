import { Component } from 'react';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = { showBanner: true };
    this.closeBanner = this.closeBanner.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ showBanner: true }), 1000);
  }

  closeBanner(e) {
    e.preventDefault();
    this.setState({ showBanner: false });
  }

  render() {
    return (
      <div
        className={'banner ' + (this.state.showBanner ? 'banner--visible' : '')}
      >
        <div className="banner__message">
          Join DRF! We're recruiting{' '}
          <a
            target="_blank"
            href="https://medium.com/@dormroomfund/join-the-dorm-room-fund-team-2019-e3bf9be34f73"
          >
            investment partners, engineers, and marketers.
          </a>
        </div>
        <button className="banner__close" onClick={this.closeBanner}>
          X
        </button>
      </div>
    );
  }
}
