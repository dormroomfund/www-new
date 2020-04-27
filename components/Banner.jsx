import { Component } from 'react';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = { showBanner: false };
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
        style={{ height: '5rem' }}
      >
        <div className="banner__message" style={{ fontSize: '1rem' }}>
          We're hiring for a new Head of Content and a new Head of Design.{' '}
          <a
            target="_blank"
            href="https://blog.dormroomfund.com/blog/student-founders-need-you-join-the-dorm-room-fund-hq-team"
          >
            Apply Now
          </a>
          !{' '}
        </div>
        <button className="banner__close" onClick={this.closeBanner}>
          ✗
        </button>
      </div>
    );
  }
}
