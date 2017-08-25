import React, { Component } from 'react';
import SeatRow from './SeatRow';

class SeatsTable extends Component {
  constructor(props) {

    super(props);
  }


  render() {
    var seats = [];
    this.props.seats.forEach(function(seat) {
      seats.push(<SeatRow seat={seat}/>);
    });
    return (
      <div className="col-md-6">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th className="col-md-3">Offered Seat</th>
            <th className="col-md-3">Requested Seat</th>
            <th className="col-md-3">Status</th>
            <th className="col-md-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {seats}
        </tbody>
      </table>
      </div>
    );
  }
}


export default SeatsTable;
