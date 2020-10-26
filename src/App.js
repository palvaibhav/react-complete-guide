import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, personsSetState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 13 },
      { name: "Stella", age: 40 },
    ],
  });

  const [otherState, otherSetState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log("Was Clicked!");
    /**
     * NOTE: personsSetState() does not "MERGE" but "REPLACES" the current state
     * with the new provided state. So we need to maintain state in slices in while
     * using react hooks i.e. useState() by calling it multiple times for different
     * slices of state separately.
     */
    personsSetState({
      persons: [
        { name: "Vaibhav", age: 28 },
        { name: "Manu", age: 13 },
        { name: "Stella", age: 28 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>This is a react app</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        And My hobby is racing.
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;
