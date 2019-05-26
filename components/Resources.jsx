import { Component } from 'react';
import NameForm from './NameForm';
import axios from 'axios';

export default class Resources extends Component {
  state = { articles: [] };

  async componentDidMount() {
    try {
      const mediumRssFeed = 'https://medium.com/feed/@dormroomfund';
      const rssToJsonApi = 'https://api.rss2json.com/v1/api.json';
      const data = { params: { rss_url: mediumRssFeed } };
      const newArticles = (await axios.get(
        rssToJsonApi,
        data
      )).data.items.slice(0, 3); // take first 3 articles
      this.setState({ articles: newArticles });
    } catch (error) {
      console.error(error);
    }
  }

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
                {this.state.articles.length === 0 ? (
                  <p>There seems to be a problem with loading our articles.</p>
                ) : (
                  this.state.articles.map((article) => (
                    <div className="col-4 m-col-12">
                      <a target="_blank" href={article.link}>
                        <div className="medium-card">
                          <div class="medium-article">
                            <img src={article.thumbnail} />
                          </div>
                          <p className="medium-article-title">
                            {article.title}
                          </p>
                        </div>
                      </a>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
