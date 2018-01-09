import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(<App />, document.querySelector('#root'));

// console.log('stripe key is:', process.env.REACT_APP_STRIPE_KEY);
// console.log('environment is:', process.env.NODE_ENV);
