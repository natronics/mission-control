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
    const text = this.state.connected ? 'connected' : 'not connected';
    return (
        <div className={this.state.connected ? 'active' : null}>
          <div>{text}</div>
          <DataTime label="Server Timestamp" value={this.state.time}/>
        </div>
    );
  }
};

module.exports = Data;
