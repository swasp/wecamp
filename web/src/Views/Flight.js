import React, { Component } from 'react';
import SeatsTable from './SeatsTable';

class Flight extends Component {

  constructor(props) {
    console.log(props);
    super(props);
}

  render() {
    return (
      <div className="col-md-12">
        <h2>Flight Nr. {this.props.flight.number}</h2>
        <SeatsTable seats={this.props.flight.seats}/>
      </div>

    );
  }
}


export default Flight;