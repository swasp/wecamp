import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FlightDetails from '../Views/FlightDetails';
import SeatMap from '../Views/SeatMap';
import '../App.css';

class AircraftInformation extends Component {

    componentDidMount() {
        ReactDOM.render(
            <FlightDetails flight={this.props.flight} />,
            document.getElementById('flightDetails')
        );
        ReactDOM.render(
            <SeatMap flight={this.props.flight} />,
            document.getElementById('seatMap')
        );
    }

    render() {
        return (
            <div>
                <div className="col-md-6">
                    <div id="flightDetails"></div>
                    <div className="flightInformation">
                        <h1>Aircraft layout</h1>
                        <table className="center">
                            <tbody>
                                <tr><th>Model:</th><td>Model</td></tr>
                                <tr><th>Seat:</th><td>{this.props.seatRow}{this.props.seatLetter}</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-6">
                    <div id="seatMap"></div>
                </div>
            </div>
        );
    }
}

export default AircraftInformation;