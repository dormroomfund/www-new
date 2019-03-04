import { Component } from 'react';
import kit_icon from '../static/img/kit-icon.svg';
import medium_icon from '../static/img/medium-icon.svg';
import twitter_icon from '../static/img/twitter-icon.svg';

export default class CustomFooter extends Component {
  render() {
    return (
      <footer>
        <div className="content">
          <div className="wrapper">
            <div className="vertically-centered">
              <h2 className="title">© 2019 Dorm Room Fund.</h2>
              <h2 className="title-mobile">© 2019 DRF.</h2>
              <ul className="links">
                <li>
                  <a
                    className="menu"
                    target="_blank"
                    href="https://drive.google.com/drive/folders/13kIXHJjCRs5nfrqiww5aq_e0mzrJOY6J?usp=sharing"
                  >
                    <div className="link-box">
                      <img className="icon" src={kit_icon} />
                      <span className="link-text">Press Kit</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="menu" href="https://medium.com/@dormroomfund">
                    <div className="link-box">
                      <img className="icon" src={medium_icon} />
                      <span className="link-text">Medium</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="menu" href="https://twitter.com/DormRoomFund">
                    <div className="link-box">
                      <img className="icon" src={twitter_icon} />
                      <span className="link-text">Twitter</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
