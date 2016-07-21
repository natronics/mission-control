import React from 'react';
import ReactDOM from 'react-dom';
import Style from './style/style.sass';

import ConnectionList from './connection/connection-list.js';


/**
 * Handle a single connection
 */
class Connection {
  constructor(name) {
    this.name = name;
  }
}

/**
 * Class to render the page, and keep state
 */
class Page extends React.Component {
  constructor() {
    super();
    this.state = {
        connections: [],
        connectionoptions: [
          {name: "demo", socket: "wss://psas-telemetry-demo.herokuapp.com/"},
          {name: "localhost", socket: "ws://localhost:5000"},
        ],
    };

    this.createConnection = this.createConnection.bind(this);
  }

  createConnection (i) {
    console.log(this.state.connectionoptions[i]);
  }

  render() {
    return (
        <div>
          <ConnectionList
            connections={this.state.connections}
            options={this.state.connectionoptions}
            create={this.createConnection}
          />
          <div id="connections">

            { this.state.connections.length ? "" :  <section className="empty"><div className="container"><p>No connections defined.</p></div></section> }

          </div>
        </div>
    );
  }
};


// Finally render the page
ReactDOM.render(
  <Page/>,
  document.getElementById('page')
);
