import React, { Component } from 'react';
import EditButton from '../Buttons/EditButton';
import DeleteButton from '../Buttons/DeleteButton';
import PrintButton from '../Buttons/PrintButton';

class SeatRow extends Component {

  constructor(props) {
    super(props);

    this.removeRow = this.removeRow.bind(this);

    this.state = {deleted: false};
  }

  removeRow() {
    this.setState({deleted: true});
  }

  componentWillUpdate() {
    // notify the API of the removal!!
  }

  render() {
    var buttons = [];
    var requestedSeat = [];
    var className = '';
    if (this.state.deleted) {
      return(null);
    }

    switch (this.props.seat.status) {
      case 'pending':
        className += 'warning';
        buttons.push(
            <EditButton seat={this.props.seat} />
        );
        buttons.push(
            <DeleteButton clickHandler={this.removeRow} seat={this.props.seat} />
        );
        break;

      case 'accepted':
        className += 'success';
        buttons.push(
            <PrintButton seat={this.props.seat} />
        );
        break;

      case 'rejected':
        className += 'danger';
        buttons.push(
            <PrintButton seat={this.props.seat} />
        );
        break;
    }

    if (this.props.seat.requested) {
      requestedSeat = this.props.seat.requested.row + this.props.seat.requested.col
    }
    
    // edit and delete button only visible when it's pending
    // print only when accepted

    return (
     <tr>
       <td className={className}>{this.props.seat.row}{this.props.seat.col}</td>
       <td className={className}>{requestedSeat}</td>
       <td className={className}>{this.props.seat.status}</td>
       <td className={className}>{buttons}</td>
     </tr>
    )
  }
}


export default SeatRow;
