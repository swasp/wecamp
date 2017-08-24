import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FlightDetails from '../Views/FlightDetails';
import SeatMap from '../Views/SeatMap';
import SeatForm from '../Forms/SeatForm';
import SeatRequestView from '../Views/SeatRequestView';
import '../App.css';

class AircraftInformation extends Component {

    requestSeatCallback = (seatRow, seatColumn) => {
        ReactDOM.render(
            <SeatRequestView seatRow={seatRow} seatColumn={seatColumn}/>,
            document.getElementById('swapRequestForm')
        );
    }

    componentDidMount() {
        ReactDOM.render(
            <FlightDetails flight={this.props.flight} />,
            document.getElementById('flightDetails')
        );
        ReactDOM.render(
            <SeatMap flight={this.props.flight} />,
            document.getElementById('seatMap')
        );
        ReactDOM.render(
            <SeatForm callbackFromParent={this.requestSeatCallback} instruction="Which seat do you want?"/>,
            document.getElementById('swapRequestForm')
        );
    }

    render() {
        return (
            <div>
                <div className="col-md-3"></div>
                <div className="col-md-3">
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
                    <div id="swapRequestForm"></div>
                </div>
                <div className="col-md-3">
                    <div id="seatMap"></div>
                </div>
            </div>
        );
    }
}

export default AircraftInformation;