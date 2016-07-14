import React from 'react';

class DataTime extends React.Component {
  render() {
    return (
        <div className="data">
          <h3>{ this.props.label }</h3>: <span>{ this.props.value }</span>
        </div>
    );
  }
};

module.exports = DataTime;
