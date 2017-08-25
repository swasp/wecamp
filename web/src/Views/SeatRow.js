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
    if (this.state.deleted) {
      return(null);
    }

    if(this.props.seat.status === 'pending') {
      buttons.push(
        <EditButton seat={this.props.seat} />
      );
      buttons.push(
        <DeleteButton clickHandler={this.removeRow} seat={this.props.seat} />
      );
    };
    if(this.props.seat.status === 'accepted') {
      buttons.push(
        <PrintButton seat={this.props.seat} />
      );
    };
    
    // edit and delete button only visible when it's pending
    // print only when accepted

    return (
     <tr>
       <td>{this.props.seat.row}{this.props.seat.col}</td>
       <td>...</td>
       <td>{this.props.seat.status}</td>
       <td>{buttons}</td>
     </tr>
    )
  }
}


export default SeatRow;
