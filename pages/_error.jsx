import { Component } from 'react';

export default class NoMatchPage extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Dorm Room Fund</title>
        </Helmet>
        <Menu lightColor={false} />
        <div className="content">
          <div className="error-wrapper">
            <h1 className="oops-text">Oops!</h1>
            <p className="error-description-text">
              We can't seem to find the page you're looking for.
            </p>
            <p className="error-description-code">Error code: 404</p>
          </div>
        </div>
        <CustomFooter />
      </div>
    );
  }
}
