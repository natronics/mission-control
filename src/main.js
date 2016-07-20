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
 * Render the page, and keep state
 */
class Page extends React.Component {
  constructor() {
    super();
    this.state = {
        connections: []
    };
  }

  render() {
    return (
        <ConnectionList connections={this.state.connections} />
    );
  }
};

ReactDOM.render(
  <Page/>,
  document.getElementById('page')
);
