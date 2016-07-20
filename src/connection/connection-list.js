import React from 'react';
import NewConnection from './new-connection.js';


/**
 * Display a list of defined connections
 */
class ConnectionList extends React.Component {
  constructor() {
    super();
    this.state = {
        editing: false
    };
    this.edit = this.edit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  edit (event) {
    this.setState({editing: true});
  }

  cancelEdit (event) {
    this.setState({editing: false});
  }

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

            <a className="button is-small is-primary is-outlined" onClick={this.edit}>
              <span className="icon is-small"><i className="fa fa-plus"></i></span>
              <span>Add Connection</span>
            </a>

            <NewConnection
              active={this.state.editing}
              close={this.cancelEdit}
            />

          </div>
         </div>
        </nav>
      </div>
    </section>
  );}
};

module.exports = ConnectionList;
