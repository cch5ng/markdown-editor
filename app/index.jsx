//app/index.jsx

//import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

require("!style!css!sass!./main.scss");

//var css = require("!raw!sass!./file.scss");
var css = require("!css!sass!./main.scss");

ReactDOM.render(<App />, document.getElementById('app'));