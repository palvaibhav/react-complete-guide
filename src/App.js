import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 13 },
      { name: "Stella", age: 40 },
    ],
  };

  switchNameHandler = (newName) => {
    //console.log("Was Clicked!");
    /**
     * DON'T DO THIS: this.state.persons[0].name = "some name"
     * As this will not let react know that the state has been updated
     * and react will not be able to re-render the DOM with updated state.
     */
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 13 },
        { name: "Stella", age: 28 },
      ],
    });
  };

  nameChangeHandler = (event) => {
    console.log(event);
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 13 },
        { name: "Stella", age: 28 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>This is a react app</h1>
        <p>This is really working</p>
        <button
          onClick={() => this.switchNameHandler("Vaibhav")} // Passing args to function using arrow function
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Amit")} // This is how we can pass down reference to parent method to the child as prop
          changed={this.nameChangeHandler}
        >
          And My hobby is racing.
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
