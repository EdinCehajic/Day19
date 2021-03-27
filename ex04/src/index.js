// src/index.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// ONLY
class App extends Component {  // CH
  render() {
    return (
      <div className="App">
        <h1>Helo Padawans!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />document.getElementById('root'));

