import React from 'react';
import NewConnection from './new-connection.js';

class ConnectionList extends React.Component {
  render() { return (
    <section id="connection-list">
      <div className="container">
        <nav className="level">
          <div className="level-left">
            <div className="level-item"> 
           </div>
         </div>
         <div className="level-right">
          <div className="level-item is-right">
            <strong className="title">Active connections:</strong>

            { this.props.connections.length ? "" : <span className="connection tag">none</span> }

            {this.props.connections.map(function(result) {
              return <span className="connection tag">{result.name}</span>;
            })}

            <a className="button is-small is-primary is-outlined">
              <span className="icon is-small"><i className="fa fa-plus"></i></span>
              <span>Add Connection</span>
            </a>

          </div>
         </div>
        </nav>
      </div>
    </section>
  );}
};

module.exports = ConnectionList;
