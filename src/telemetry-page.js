import React from 'react';
import NewConnection from './connection/new-connection.js';

class Page extends React.Component {

  constructor() {
    super();
    this.state = {
        connected: false,
        edit_connection: false,
        defined: false,
        title: "Rocket Telemetry",
    };
    this.addConnection = this.addConnection.bind(this);
    this.finishAddConnection = this.finishAddConnection.bind(this);
    this.editTitle = this.editTitle.bind(this);
    this.beginSession = this.beginSession.bind(this);
  }

  addConnection (event) {
    this.setState({ edit_connection: true });
  }

  finishAddConnection (event) {
    this.setState({ edit_connection: false });
  }

  beginSession (event) {
    this.setState({ edit_connection: false, defined: true });
    this.finishAddConnection(null);
  }

  editTitle (event) {
    this.setState({title: event.target.value});
  }

  render() {

    var h;
    if (this.state.defined) {
        h = <div className="content"><h1>{this.state.title}</h1><hr/></div>;
    } else {
        h = "";
    }
    return (
        <section className="connection">
          <div className="container">

            <a className="button is-primary" onClick={this.addConnection}>
              <i className="fa fa-plug"></i>&nbsp;Add Connection
            </a>

            <NewConnection
                close={this.finishAddConnection}
                active={this.state.edit_connection}
                editTitle={this.editTitle}
                accept={this.beginSession}
            />

            {h}

          </div>
        </section>
    );
  }
};

module.exports = Page;
