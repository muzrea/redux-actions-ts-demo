import 'core-js/es/map';
import 'core-js/es/object';
import 'react-app-polyfill/ie11';
import React from 'react'; // tslint:disable-line
import ReactDOM from 'react-dom';

import App from './app';
import './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
