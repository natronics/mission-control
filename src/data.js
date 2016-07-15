import React from 'react';

class DataTime extends React.Component {
  render() {
    return (
        <div className="data">
          <h3>{ this.props.label }</h3>: <span className="value">{ this.props.value }</span> <span className="units">[{ this.props.units }]</span>
        </div>
    );
  }
};

module.exports = DataTime;
