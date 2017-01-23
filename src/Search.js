import React, { Component, PropTypes } from 'react';

import './Search.css';

const KEY_ENTER = 13;

class Search extends Component {
  constructor() {
    super();

    // The initial state; the user hasn't entered anything yet
    // QUIZ: what happens if `value` is undefined?
    this.state = { value: '' };

    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.search = this.search.bind(this);
  }

  search() {
    this.props.onSearch(this.state);
  }

  handleChange(ev) {
    this.setState({
      value: ev.target.value,
    });
  }

  handleKeyDown(ev) {
    if (ev.keyCode === KEY_ENTER) {
      this.search();
    }
  }

  render() {
    let icon = 'fa-search';

    // Disable the controls and show a spinner icon inside the button
    // while there's a pending network request
    if (this.props.searching) {
        icon = `fa-spinner fa-spin`;
    }

    return (
      <div className="search">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={this.state.value}
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-default"
              onClick={this.search}
              disabled={this.props.searching}
            >
              <i className={`fa ${icon}`} />
            </button>
          </span>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  searching: PropTypes.bool,
};

export default Search;
