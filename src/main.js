// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var Select = require('react-select');
var Style = require('./style/style.sass');
var SelectStyle = require('react-select/dist/react-select.min.css');

var connections = [
    { value: "ws://telemtry/", label: "stream:telemtry.psas.local" },
    { value: "ws://localhost:5000", label: "stream:localhost:5000" }
];

function handleChange(val) {
    console.log("Selected: " + val);

}

var MultiSelectField = React.createClass({
    displayName: 'MultiSelectField',

	propTypes: {
		label: React.PropTypes.string,
	},

    getInitialState () {
		return {
			value: [],
		};
	},

    handleSelectChange (value) {
		console.log("You've selected:", value);
		this.setState({ value });
	},

    render () {
		return (
            <Select multi placeholder="Select connection(s)" value={this.state.value} options={connections} onChange={this.handleSelectChange} />
        );
    }
});

ReactDOM.render(
  <div>
    <span>Connection:</span>
    <MultiSelectField/>
  </div>,
  document.getElementById('connections')
);
