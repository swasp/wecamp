import React, { Component } from 'react';
import Flight from './Flight';

class MyFlights extends Component {

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
            <div className="col-md-12">
                <h1>My Flights </h1>
            </div>
            <div className="col-md-12">{flights}</div>
        </div>
        )
    }

}


export default MyFlights;



// ReactDOM.render(
//     <MyFlights flights={FLIGHTS} />,
//     document.getElementById('root')
// );