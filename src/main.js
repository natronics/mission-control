// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var Select = require('react-select');
var style = require('react-select/dist/react-select.min.css');

var connections = [
    { value: 'ws://telemtry/', label: 'ws://telemtry/' },
    { value: 'ws://localhost:5000', label: 'ws://localhost:5000' }
];

function logChange(val) {
    console.log("Selected: " + val);
}

ReactDOM.render(
  <Select
    name="connections-select"
    multi={true}
    options={connections}
    onChange={logChange}
  />,
  document.getElementById('content')
);
