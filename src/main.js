// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var Select = require('react-select');
var Style = require('./style/style.sass');
var SelectStyle = require('react-select/dist/react-select.min.css');

var ConnectionSelect = require('./connections.js');



ReactDOM.render(
  <ConnectionSelect/>,
  document.getElementById('connections')
);
