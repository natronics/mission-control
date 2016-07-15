import React from 'react';

class DataTime extends React.Component {
  render() {
    return (
        <div className="level-item has-text-centered data">
          <p className="heading">{ this.props.label }</p>
          <p className="title">{ this.props.value }</p>
          <p className="units">{ this.props.units }</p>
        </div>
    );
  }
};

module.exports = DataTime;
