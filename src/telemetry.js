import React from 'react';

class Data extends React.Component {
  constructor() {
    super();
    this.state = {
      connected: false
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
    console.log(data);
  }

  render() {
    const text = this.state.connected ? 'connected' : 'not connected';
    return <div>{text}</div>;
  }
};

module.exports = Data;
