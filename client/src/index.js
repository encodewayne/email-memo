import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import axios from 'axios';
import App from './components/App';

window.axios = axios;

ReactDOM.render(<App />, document.querySelector('#root'));
