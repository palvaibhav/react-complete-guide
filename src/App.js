import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a react app</h1>
        <p>This is really working</p>
        <Person name="Max" age="23"/>
        <Person name="Manu" age="26">And My hobby is racing.</Person>
        <Person name="Stella" age="31"/>
      </div>
    );
  }
}

export default App;
