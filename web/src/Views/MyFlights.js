import React, { Component } from 'react';
import Flight from './Flight';

class MyFlights extends React.Component {

    constructor(props) {
        super(props);
    }
  
    render() {
        var flights = [];
        this.props.flights.forEach(function(flight) {
            flights.push(<Flight flight={flight} />
        )
      });



        return (
        <div>
            <h1>My Flights </h1>
            <ul>{flights}</ul>
        </div>
        )
    }

}


export default MyFlights;



// ReactDOM.render(
//     <MyFlights flights={FLIGHTS} />,
//     document.getElementById('root')
// );