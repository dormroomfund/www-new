import { Component } from 'react';

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export default class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      submitted: false,
      error: false,
      message: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.name || !this.state.email) {
      this.setState({
        error: true,
        message: 'Please fill out all required fields!',
      });
    } else if (!validateEmail(this.state.email)) {
      this.setState({
        error: true,
        message: 'Please use a valid email!',
      });
    } else if (!this.state.submitted) {
      var url =
        'https://script.google.com/macros/s/AKfycbxs4vTvuG_Ysmaim4qefVjNH0bM4cWsmorz-av0eaby-1aPSQ/exec';
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function() {
        console.log(xhr.status, xhr.statusText);
        console.log(xhr.responseText);
        return;
      };

      var data = {
        name: this.state.name,
        email: this.state.email,
      };
      // url encode form data for sending as post data
      var encoded = Object.keys(data)
        .map(function(k) {
          return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
        })
        .join('&');
      xhr.send(encoded);
      this.setState({
        submitted: true,
        error: false,
      });
    }
  }

  render() {
    return (
      <form className="resources-section-form">
        {!this.state.submitted ? (
          <div>
            <div className="container">
              <input
                className="name"
                name="name"
                placeholder="First Name"
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
              <input
                className="email"
                name="email"
                placeholder="Email Address"
                type="text"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
              <input
                type="submit"
                value="Sign Up"
                onClick={this.handleSubmit}
              />
            </div>
            <div
              className={
                'validation-message' + (this.state.error ? '' : 'hidden')
              }
            >
              <p>{this.state.message}</p>
            </div>
          </div>
        ) : (
          <h1>Thanks!</h1>
        )}
      </form>
    );
  }
}
