import React from 'react';
import SeatsTable from './SeatsTable';
import FlightDetails from '../Views/FlightDetails';
import ReactDOM from 'react-dom';

class Flight extends React.Component {
  constructor(props) {
    super(props);
      this.state = { flightdetails: [] };
  }

    //componentDidMount()
    //     //alert( this.props.flight.number);
    //     fetch('http://api.swasp.local/flight?flightnumber=' + this.props.flight.number)
    //         .then(result=>result.json())
    //         .then(flightdetails=>this.setState({flightdetails}));
    // }
    // componentDidUpdate() {
    //     // console.log(this.state.flightdetails.flight);
    //     ReactDOM.render(
    //         <FlightDetails flight={this.state.flightdetails.flight} />,
    //         document.getElementById('flightDetails')
    //     );
    // }

  render() {
    return (
      <div className="col-md-12">
        <h2>Flight Nr. {this.props.flight.number}</h2>
          {/*<div id="flightDetails"></div>*/}
        <SeatsTable seats={this.props.flight.seats}/>
      </div>
    );
  }
}

export default Flight;
