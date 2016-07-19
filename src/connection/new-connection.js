import React from 'react';

class NewConnection extends React.Component {
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
                  <span className="select">
                    <select>
                      <option>ws://example.com (demo server)</option>
                      <option>ws://localhost:8080 (run locally)</option>
                      <option>ws://telemetry.psas.local (PSAS network)</option>
                    </select>
                  </span>
                </p>

              </div>
            </section>

            <footer className="modal-card-foot">
              <a className="button is-primary" onClick={this.props.accept}>
                <span className="icon"><i className="fa fa-check"></i></span>
                Create
              </a>
              <a className="button" onClick={this.props.close}>Cancel</a>
            </footer>
          </div>
        </div>    
    );
  }
};

module.exports = NewConnection;
