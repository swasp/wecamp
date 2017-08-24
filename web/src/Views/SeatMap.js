import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FlightDetails from '../Views/FlightDetails';
import '../App.css';

class SeatMap extends Component {

    componentDidMount() {
        ReactDOM.render(
            <FlightDetails flight={this.props.flight} />,
            document.getElementById('flightDetails')
        );
    }

    render() {
        return (
            <div>
            <div className="flightInformation">
                <img src={this.props.flight.equipment} className="equipment" alt="" />
            </div>
            </div>
        );
    }
}

export default SeatMap;