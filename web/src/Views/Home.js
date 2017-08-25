import React, { Component } from 'react';
import FlightForm from '../Forms/FlightForm';

class Home extends Component {
  render() {
    return (
      <div>
        <p className="App-intro"></p>
        <FlightForm />
      </div>
    );
  }
}

export default Home;
