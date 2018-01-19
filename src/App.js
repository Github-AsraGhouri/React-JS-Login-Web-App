import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Shopping </h1>
        <hr/><br/>
        <input type="email" placeholder="Enter Email"/>
        <br/><br/>
        <input type="password" placeholder="Enter Password"/>
        <br/><br/>
        <button>Register</button>
        <button className="login">Login</button>
      </div>
    );
  }
}

export default App;
