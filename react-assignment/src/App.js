import React from "react";
import "./App.css";

import Task1 from "./Tasks/Task1";
import Task2 from "./Tasks/Task2";
import Task3 from "./Tasks/Task3";
import Task4 from "./Tasks/Task4";
import Task5 from "./Tasks/Task5";
import Task6 from "./Tasks/Task6";

function App() {
  return (
    <div className="app-container">
      <h1>My React Dashboard</h1>

      <Task1 />
      <Task2 />
      <Task3 />
      <Task4 />
      <Task5
        name="Rohan Choudhary"
        age={21}
        email="rohanchoudhary.rc20@gmail.com"
      />
      <Task6 />
    </div>
  );
}

export default App;