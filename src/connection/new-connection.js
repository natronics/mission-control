import React from 'react';

class NewConnection extends React.Component {
  constructor() {
    super();
    this.state = {
        complete: false,
        index: 0,
    };
    this.choose = this.choose.bind(this);
    this.create = this.create.bind(this);
  }

  choose (event) {
    this.setState({complete: true, index: event.target.selectedIndex - 1});
  }

  create (event) {
    this.props.newConnection(this.state.index);
  }

  render() {
    return (
        <div className={this.props.active ? 'modal is-active' : 'modal'}>
          <div className="modal-background"></div>
          <div className="modal-card">

            <header className="modal-card-head">
              <p className="modal-card-title">
                <span className="fa-stack">
                  <i className="fa fa-plug fa-stack-2x"></i>
                  <i className="fa fa-plus fa-stack-1x green corner"></i>
                </span>
                New Connection
              </p>
              <button className="delete" onClick={this.props.close}></button>
            </header>

            <section className="modal-card-body">
              <div className="content">

                <label className="label">Connection Name</label>
                <p className="control">
                  <input className="input" type="text" placeholder="Rocket Telemetry" onChange={this.props.editTitle} />
                </p>

                <label className="label">Server</label>
                <p className="control">
                  <span className="select is-fullwidth">
                    <select onChange={this.choose}>
                        <option disabled selected>Choose...</option>
                      {this.props.options.map(function(result) {
                        return <option>{result.name} ({result.socket})</option>;
                      })}

                    </select>
                  </span>
                </p>

              </div>
            </section>

            <footer className="modal-card-foot">
              <a className="button is-primary" disabled={!this.state.complete} onClick={this.create}>
                <span className="icon is-small"><i className="fa fa-check"></i></span>
                <span>Create</span>
              </a>
              <a className="button" onClick={this.props.close}>Cancel</a>
            </footer>
          </div>
        </div>    
    );
  }
};

module.exports = NewConnection;
