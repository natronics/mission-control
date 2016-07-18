import React from 'react';
import NewConnection from './connection/new-connection.js';

class Page extends React.Component {

  constructor() {
    super();
    this.state = {
        connected: false,
        edit_connection: false,
    };
    this.addConnection = this.addConnection.bind(this);
    this.finishAddConnection = this.finishAddConnection.bind(this);
  }

  addConnection (event) {
    this.setState({ edit_connection: true });
  }

  finishAddConnection (event) {
    this.setState({ edit_connection: false });
  }

  render() {
    return (
        <section className="connection">
          <div className="container">

            <a className="button is-primary" onClick={this.addConnection}>
              <i className="fa fa-plug"></i>&nbsp;Add Connection
            </a>

            <NewConnection close={this.finishAddConnection} active={this.state.edit_connection} />

          </div>
        </section>
    );
  }
};

module.exports = Page;
