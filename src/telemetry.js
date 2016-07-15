import React from 'react';
import DataTime from './data.js';

class Data extends React.Component {
  constructor() {
    super();
    this.state = {
      connected: false,
      time: 0.0,
    };

    this.socket = new WebSocket("ws://localhost:8080/ws");
    this.socket.onopen = this.openHandler.bind(this);
    this.socket.onclose = this.closeHandler.bind(this);
    this.socket.onmessage = (message) => { this.messageHandler(message.data); };
  }

  openHandler(event) {
    this.setState({connected: true});
  }

  closeHandler(event) {
    this.setState({connected: false});
  }

  messageHandler(msg) {
    let data = JSON.parse(msg);
    this.setState({time: data.server.time});
    //console.log(data);
  }

  render() {
    return (
        <div>
          <article className={this.state.connected ? 'message is-success' : 'message is-warning'}>
            <div className="message-header">
              {this.state.connected ? 'Connected' : 'Not Connected'}
            </div>
          </article>
          <nav className={this.state.connected ? 'level telemetry active' : 'level telemetry'}>
            <DataTime label="Server Timestamp" units="Unix time" value={this.state.time}/>
          </nav>
        </div>
    );
  }
};

module.exports = Data;
