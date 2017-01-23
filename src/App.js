import React, { Component } from 'react';

import './App.css';

import Search from './Search';
import List from './List';

const BASE_URL = 'https://api.apple-mapkit.com/v1/search';
const placeholder = 'Indian restaurants near San Francisco';

class App extends Component {
  constructor() {
    super();

    this.state = {
      results: undefined,
      searching: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch({ value }) {
    const url = encodeURI(`${BASE_URL}?q=${value}`);

    this.setState({ searching: true });

    // QUIZ: what happens if you use a normal function
    // instead of an arrow function?
    fetch(url).then(response => response.json())
      .then(({ results }) => this.setState({ results, searching: false }))
      .catch(error => this.setState({ searching: false }));
  }

  render() {
    return (
      <div className="App">
        <Search
          placeholder={placeholder}
          searching={this.state.searching}
          onSearch={this.handleSearch}
        />
        <List
          items={this.state.results}
        />
      </div>
    );
  }
}

export default App;
