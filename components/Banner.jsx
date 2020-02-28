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
          Subscribe to our newsletter,{' '}
          <a target="_blank" href="https://dormroomfund.substack.com/">
            The Syllabus
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
