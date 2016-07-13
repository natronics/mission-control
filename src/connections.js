import React from 'react';
import Select from 'react-select';

const SERVICES = [
    { value: "ws://telemetry/",         label: "stream:telemetry.psas.local",   type: "telemetry" },
    { value: "ws://localhost:8080",     label: "stream:localhost:8080",         type: "telemetry" },
    { value: "http://localhost:5000",   label: "control:localhost:5000",        type: "api" }
];

var ConnectionField = React.createClass({

    displayName: 'ConnectionField',

	propTypes: { label: React.PropTypes.string },

    getInitialState () {
		return {
			disabled: false,
			selectValue: '',
		};
	},

	updateValue (newValue) {
		console.log('State changed to ' + newValue);
		this.setState({
			selectValue: newValue
		});
	},

	render () {
		return (
            <Select name="connection" autofocus simpleValue placeholder="Select server" options={SERVICES}  disabled={this.state.disabled} value={this.state.selectValue} onChange={this.updateValue} />
        );
    }
});

module.exports = ConnectionField;
