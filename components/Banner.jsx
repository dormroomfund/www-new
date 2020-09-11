import { Component } from 'react';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = { showBanner: false };
    this.closeBanner = this.closeBanner.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ showBanner: true }), 100);
  }

  closeBanner(e) {
    e.preventDefault();
    console.log('wtf');
    this.setState({ showBanner: false });
  }
  //
  render() {
    return this.state.showBanner ? (
      <div className={'banner'} style={{ height: '5rem' }}>
        <div className="banner__message" style={{ fontSize: '0.9rem' }}>
          Dorm Room Fund is recruiting! We're looking for amazing Investment
          Partners and a Head of Engineering to join us. Learn more at{' '}
          <a target="_blank" href="join.dormroomfund.com">
            join.dormroomfund.com
          </a>
          !{' '}
        </div>
        <button className="banner__close" onClick={this.closeBanner}>
          ✗
        </button>
      </div>
    ) : null;
  }
}
