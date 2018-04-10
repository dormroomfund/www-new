import React, { Component } from 'react';

import Layout from './Layout';

export default class FoundersFeature extends Component {
  render() {
    return (
      <Layout relativeNav>
        <div className="founders-feature">
          <div className="feature-wrapper">
            <div className="content">
              <div className="col-4 m-col-12">
                <img src={this.props.photo} />
                <div className="sidebar">
                  <ul className="overview-list">
                    <li>Milestones</li>
                    {this.props.milestones.map(milestone => (
                      <li>{milestone}</li>
                    ))}
                  </ul>
                  <ul className="overview-list">
                    <li>Founders</li>
                    {this.props.founders.map(milestone => <li>{milestone}</li>)}
                  </ul>
                </div>
              </div>
              <div className="col-8 m-col-12">
                <div className="text">
                  <h1 className="feature-name">{this.props.name}</h1>
                  <h1 className="feature-company">{this.props.company}</h1>
                  <div className="feature-summary">
                    <p className="italic">{this.props.summary}</p>
                  </div>
                  <div className="feature-bio">
                    <p>
                      {this.props.bio.split('\n').map(i => {
                        return <div className="bio-line-break">{i}</div>;
                      })}
                    </p>
                  </div>
                  <div className="sidebar bottom">
                    <ul className="overview-list">
                      <li>Milestones</li>
                      {this.props.milestones.map(milestone => (
                        <li>{milestone}</li>
                      ))}
                    </ul>
                    <ul className="overview-list">
                      <li>Founders</li>
                      {this.props.founders.map(milestone => (
                        <li>{milestone}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
