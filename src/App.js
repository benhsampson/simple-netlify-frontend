import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    console.log(process.env);

    this.fetchFromUrl();
  }

  fetchFromUrl = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/hello`);
    const body = await response.json();

    console.log(body);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
