import React from 'react';
import '../App.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleRequestsClick = this.handleRequestsClick.bind(this);
    this.handleSeatsClick = this.handleSeatsClick.bind(this);
  }

  handleHomeClick() {
    this.props.loadHome();
  }

  handleRequestsClick() {
    this.props.loadMyRequests();
  }

  handleSeatsClick() {
    this.props.loadMySeats();
  }

  render() {
    return (
      <nav>
        <ul className="nav nav-pills nav-justified">
          <li><a href="#" onClick={this.handleHomeClick}>Home</a></li>
          <li><a href="#" onClick={this.handleSeatsClick}>My Seats</a></li>
          <li><a href="#" onClick={this.handleRequestsClick}>My Requests</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
