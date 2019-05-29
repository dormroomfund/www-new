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
          {/*Join DRF&mdash;we're recruiting{' '}*/}
          {/*<a*/}
          {/*  target="_blank"*/}
          {/*  href="https://medium.com/@dormroomfund/dorm-room-fund-is-looking-for-the-next-cohort-of-investment-partners-ea41904ba67f"*/}
          {/*>*/}
          {/*  investment partners*/}
          {/*</a>{' '}*/}
          {/*&{' '}*/}
          {/*<a*/}
          {/*  target="_blank"*/}
          {/*  href="https://medium.com/@dormroomfund/join-the-dorm-room-fund-hq-team-a4109a3f8c54"*/}
          {/*>*/}
          {/*  engineering and marketing*/}
          {/*</a>*/}
          We are currently slow with processing applications due to the end of
          the semester.
        </div>
        <button className="banner__close" onClick={this.closeBanner}>
          X
        </button>
      </div>
    );
  }
}
