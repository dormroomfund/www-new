import { Component } from 'react';

export default class Resources extends Component {
  render() {
    return (
      <div className="resources-section">
        <div className="content">
          <div className="resources-section-wrapper">
            <h2 className="resources-section-header">
              Not ready yet? We&#39;d still love to help.
            </h2>
            <p className="email-title">
              Follow events, resources, and jobs in our portfolio:
            </p>
            <NameForm />
            <p className="medium-title">
              Our most recent posts on{' '}
              <a href="https://medium.com/@dormroomfund">
                <span className="gray-underline">Medium</span>
              </a>
              :
            </p>
            <div className="medium-content-links">
              <div className="content">
                <div className="col-4 m-col-12">
                  <a
                    target="_blank"
                    href="https://medium.com/@dormroomfund/good-luck-to-the-graduating-dorm-room-fund-partners-1e8f230df93f"
                  >
                    <div className="medium-card">
                      <img className="medium-article" src={article_1} />
                      <p className="medium-article-title">
                        #DRF4Life: Good Luck to the Graduating Dorm Room Fund
                        Partners!
                      </p>
                    </div>
                  </a>
                </div>
                <div className="col-4 m-col-12">
                  <a
                    target="_blank"
                    href="https://medium.com/@dormroomfund/dorm-room-fund-is-looking-for-the-next-cohort-of-investment-partners-ea41904ba67f"
                  >
                    <div className="medium-card">
                      <img className="medium-article" src={article_2} />
                      <p className="medium-article-title">
                        Join the Dorm Room Fund Team in 2018
                      </p>
                    </div>
                  </a>
                </div>
                <div className="col-4 m-col-12">
                  <a
                    target="_blank"
                    href="https://medium.com/@dormroomfund/how-to-start-a-startup-colgate-68132b71ccb"
                  >
                    <div className="medium-card last">
                      <img className="medium-article" src={article_3} />
                      <p className="medium-article-title">
                        How to Start a Startup at Colgate
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
