import React from 'react';
import ReactDOM from 'react-dom';
import Style from './style/style.sass';

import ConnectionList from './connection/connection-list.js';


/**
 * Handle a single connection
 */
class Connection {
  constructor(name, uri) {
    this.name = name;
    this.URI = uri;
    this.connected = false;

    console.log("WS: Construct", this.URI);
    this.socket = new WebSocket(this.URI);
    this.socket.onopen = this.openHandler.bind(this);
    this.socket.onclose = this.closeHandler.bind(this);
    this.socket.onmessage = (message) => { this.messageHandler(message.data); };
  }

  openHandler(event) {
    console.log("WS: Open");
    this.connected = true;
  }

  closeHandler(event) {
    console.log("WS: Close");
    this.connected = false;
  }

  messageHandler(message) {
    //let data = JSON.parse(message);
    //console.log(data);
    console.log(message);
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

  createConnection (name, i) {
    var option = this.state.connectionoptions[i];
    var conn = new Connection(name, option.socket);
    this.setState({connections: this.state.connections.concat([conn])});
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

            {this.state.connections.map(function(result) {
              return <section><div className="container"><h1 className="title">{result.name}</h1><hr/></div></section>;
            })}


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
