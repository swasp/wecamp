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
            .then(items=>this.setState({items}))
    }
  
    render() {
        return (
        <div>
            <div className="col-md-12">
                <h1>My Flights </h1>
            </div>
            <ul className="col-md-12">
                {this.state.items.flights.map(item=><Flight flight={item} />)}
            </ul>
        </div>
        )
    }

}

export default MyFlights;



// ReactDOM.render(
//     <MyFlights flights={FLIGHTS} />,
//     document.getElementById('root')
// );