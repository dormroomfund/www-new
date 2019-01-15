import React, { Component } from 'react';
import classNames from 'classnames';

import arrow from './img/ArrowBox.png';

export default class ScrollBackToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showArrow: false,
    };
    this.scrollFunction = this.scrollFunction.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollFunction);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollFunction);
  }

  scrollFunction() {
    this.setState({
      showArrow: document.documentElement.scrollTop > this.elem.offsetTop,
    });
  }

  onClick(e) {
    e.preventDefault();
    window.scroll({ top: this.elem.offsetTop, behavior: 'smooth' });
  }

  render() {
    return (
      <a href="#" ref={(elem) => (this.elem = elem)} onClick={this.onClick}>
        <img
          src={arrow}
          className={classNames({
            'scroll-back-to-top': true,
            'scroll-back-to-top__show': this.state.showArrow,
          })}
        />
      </a>
    );
  }
}
