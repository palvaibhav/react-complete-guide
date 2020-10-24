import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons:[
      {name:"Max", age:28},
      {name:"Manu", age:13},
      {name:"Stella", age:40}
    ]
  }

  switchNameHandler = () => {
    //console.log("Was Clicked!");
    this.setState({
      persons:[
        {name:"Vaibhav", age:28},
        {name:"Manu", age:13},
        {name:"Stella", age:28}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>This is a react app</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>And My hobby is racing.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
