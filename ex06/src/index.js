// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Only
class App extends React.Component {
    render() {

      // CH

const wolrd = "World";

      //CH
      return (
        <div className="App">
          <h1>Hello, {world}!</h1>  //CH
        </div>
      );
    }
  }
ReactDOM.render(<App />, document.getElementById('root'));

