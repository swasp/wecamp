import React, { Component } from 'react';
import Flight from './Flight';

class MyFlights extends Component {
    constructor(props) {
        super(props);
        this.state = { items: { flights: [] } };
    }

    componentDidMount() {
        fetch('http://api.swasp.local/MyFlights.json')
            .then(result=>result.json())
            .then(items=>this.setState({items}));
    }
  
    render() {
        return (
        <div>
            <div className="col-md-12 flightsheader">
                <h4>You have following flights listed</h4>
            </div>
            <ul className="col-md-12">
                {this.state.items.flights.map(item=><Flight flight={item} />)}
            </ul>
        </div>
        )
    }
}

export default MyFlights;
