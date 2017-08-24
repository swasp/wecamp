import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FlightDetails from '../Views/FlightDetails';
import '../App.css';

class SeatForm extends Component {
    constructor(props) {
        super(props);
        this.state = {seatrow: '', seatletter: ''};

        this.handleRowChange = this.handleRowChange.bind(this);
        this.handleSeatChange = this.handleSeatChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleRowChange(event) {
        this.setState({seatrow: event.target.value.toUpperCase()});
    }

    handleSeatChange(event) {
        this.setState({seatletter: event.target.value});
    }

    componentDidMount() {
        ReactDOM.render(
            <FlightDetails flight={this.props.flight} />,
            document.getElementById('flightDetails')
        );
    }

    handleSubmit(event) {
        //alert('You entered seat: ' + this.state.row  + this.state.seat);
        this.props.callbackFromParent(this.state.seatrow, this.state.seatletter);

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div id="flightDetails"></div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Please enter your seat</h3>
                    <label>
                        <div>Row:</div>
                        <input type="text" value={this.state.seatrow} onChange={this.handleRowChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        <div>Column:</div>
                        <input type="text" value={this.state.seatletter} onChange={this.handleSeatChange} />
                    </label>
                    <br/>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default SeatForm;