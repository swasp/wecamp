import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FlightForm from './FlightForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <FlightForm />,
    document.getElementById('flightForm')
);
registerServiceWorker();
