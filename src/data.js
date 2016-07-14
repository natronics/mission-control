import React from 'react';

class DataTime extends React.Component {
  constructor() {
    super();
    this.label = "Server Timestamp";
    this.state = {
      value: 0.0
    };
  }

  render() {
    return (
        <div className="data">
          <h3>{ this.label }</h3>: <span>{ this.state.value }</span>
        </div>
    );
  }
};

module.exports = DataTime;
