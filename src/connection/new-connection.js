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
                <p className="control">
                  <span className="select">
                    <select>
                      <option>Select dropdown</option>
                      <option>With options</option>
                    </select>
                  </span>
                </p>
              </div>
            </section>

            <footer className="modal-card-foot">
              <a className="button is-primary">Create</a>
              <a className="button" onClick={this.props.close}>Cancel</a>
            </footer>
          </div>
        </div>    
    );
  }
};

module.exports = NewConnection;
