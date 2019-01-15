import {Component} from 'react';
import Head from 'next/head';
import Menu from './Menu';
import CustomFooter from './Footer';
import TeamSection from './TeamSection';
import AlumniSection from './AlumniSection';
import React from 'react';


export default class TeamPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCurrent: this.props.showCurrent || true,
    };
  }

  handleCurrentClick = () => {
    this.setState({
      showCurrent: true,
    });
  };

  handleAlumniClick = () => {
    this.setState({
      showCurrent: false,
    });
  };

  render() {
    return (
      <div className="App">
        <Head>
          <title>Dorm Room Fund - Team</title>
        </Head>
        <div className="team">
          <Menu lightColor={true}/>
          <div className="team-hero-photo">
            <div className="content">
              <div className="team-hero-wrapper">
                <h1 className="hero-text light-text">
                  We support founders across the US from day zero.
                </h1>
              </div>
            </div>
          </div>
          <div className="content" id="team-content">
            <div className="team-alumni-navigation">
              <ul>
                <li
                  className="team-current-link"
                  id="team-current"
                  onClick={this.handleCurrentClick}
                >
                  <a className="menu">
                    <span
                      className={this.state.showCurrent ? 'menu-highlight' : ''}
                    >
                      Current
                    </span>
                  </a>
                </li>
                <li
                  className="team-alumni-link"
                  onClick={this.handleAlumniClick}
                >
                  <a className="menu">
                    <span
                      className={this.state.showCurrent ? '' : 'menu-highlight'}
                    >
                      Alumni
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {this.state.showCurrent ? <TeamSection/> : <AlumniSection/>}
          </div>
        </div>
        <CustomFooter/>
      </div>
    );
  }
}