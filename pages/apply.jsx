import { Component } from 'react';

export default class ApplyPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Dorm Room Fund - Apply</title>
        </Helmet>
        <ReactTypeformEmbed
          url={'https://dormroomfund.typeform.com/to/H90ZNU'}
        />
      </div>
    );
  }
}
