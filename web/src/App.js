import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './Views/Home';
import MyFlights from './Views/MyFlights';

import logo from './swasp.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome</h2>
          </div>

          <nav>
            <ul className="nav nav-pills nav-justified">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/flights">My Flights</Link></li>
              <li><Link to="/requests">My Requests</Link></li>
            </ul>
          </nav>

          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/flights" render={() => <MyFlights/>} />
              {/*<Route path="/requests" component={Requests}/>*/}
              <Route render={() => <div><h1>404</h1><p>Page not found!</p></div>}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
