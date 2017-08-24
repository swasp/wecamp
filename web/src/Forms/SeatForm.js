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
        this.setState({seatletter: event.target.value.toUpperCase()});
    }

    componentDidMount() {
        if (this.props.flight) {
            ReactDOM.render(
                <FlightDetails flight={this.props.flight}/>,
                document.getElementById('flightDetails')
            );
        }
    }

    handleSubmit(event) {
        //alert('You entered seat: ' + this.state.row  + this.state.seat);
        this.props.callbackFromParent(this.state.seatrow, this.state.seatletter);

        event.preventDefault();
    }

    render() {
        return (
            <div className="center">
                <div id="flightDetails"></div>
                <form onSubmit={this.handleSubmit} className="row col-md-4 col-md-push-4 form-horizontal">
                    <h3>{this.props.instruction}</h3>
                    <div className="form-group">
                        <label className="col-md-6 control-label" htmlFor="seatRowInput">Row:</label>
                        <div className="col-md-6">
                            <input className="form-control" id="seatRowInput" type="text" value={this.state.seatrow} onChange={this.handleRowChange} />
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                        <label className="col-md-6 control-label" htmlFor="seatColumnInput">Seat:</label>
                        <div className="col-md-6">
                            <input className="form-control" id="seatColumnInput" type="date" value={this.state.seatletter} onChange={this.handleSeatChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-6 col-sm-6">
                            <input type="submit" value="Submit" className="btn btn-default"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SeatForm;