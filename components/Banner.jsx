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
      >
        <div className="banner__message">
          Get the scoop on entrepreneurship on campus in DRF's{' '}
          <a
            target="_blank"
            href="https://blog.dormroomfund.com/blog/from-the-fund"
          >
            State of Student Startups 2019
          </a>
          !{' '}
        </div>
        <button className="banner__close" onClick={this.closeBanner}>
          X
        </button>
      </div>
    );
  }
}
