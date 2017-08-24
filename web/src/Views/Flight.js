import React, { Component } from 'react';
import SeatsTable from './SeatsTable';

class Flight extends React.Component {

  constructor(props) {
    console.log(props);
    super(props);
}

  render() {
    return (
      <li>
        <h2>Flight Nr. {this.props.flight.number}</h2>
        <SeatsTable seats={this.props.flight.seats}/>
      </li>

    );
  }
}


export default Flight;